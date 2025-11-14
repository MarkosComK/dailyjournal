document.addEventListener("DOMContentLoaded", function () {
    const el = document.querySelector(".headline-loop-type");
    if (!el) return;

    const fullText = el.textContent.trim();
    el.textContent = ""; // clear

    let index = 0;
    let deleting = false;

    function loopType() {
        if (!deleting) {
            // typing forward
            el.textContent = fullText.substring(0, index + 1);
            index++;

            if (index === fullText.length) {
                // when finished typing → pause then start deleting
                deleting = true;
                setTimeout(loopType, 1200);
                return;
            }
        } else {
            // deleting backward
            el.textContent = fullText.substring(0, index - 1);
            index--;

            if (index === 0) {
                // restart typing
                deleting = false;
                setTimeout(loopType, 600);
                return;
            }
        }

        // typing/deleting speed
        setTimeout(loopType, deleting ? 40 : 60);
    }

    loopType();
});
