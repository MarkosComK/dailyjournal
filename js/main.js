document.addEventListener("DOMContentLoaded", function () {
    const el = document.querySelector(".headline-#-type");
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
document.addEventListener("DOMContentLoaded", function () {

    const el = document.querySelector(".headline-loop-type");
    if (!el) return;

    // Words to cycle through
    const words = [
        "Will the dog come?",
        "Pls do more",
        "Our Magic NewsPaper"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeLoop() {
        const currentWord = words[wordIndex];

        if (!deleting) {
            // typing
            el.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentWord.length) {
                // pause before deleting
                deleting = true;
                setTimeout(typeLoop, 1000);
                return;
            }
        } else {
            // deleting
            el.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                deleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }
        }

        // typing and deleting speed
        const speed = deleting ? 40 : 70;

        setTimeout(typeLoop, speed);
    }

    typeLoop();
});

  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  function scrollTopSmooth() {
    // Fallback: some mobile browsers don't support smooth behavior
    if ('scrollBehavior' in document.documentElement.style) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    } else {
      window.scrollTo(0, 0);
    }
  }

  // 2. On normal load
  window.addEventListener('load', function () {
    scrollTopSmooth();
  });

  // 3. On pageshow (when page is restored from bfcache / reload-like behavior)
  window.addEventListener('pageshow', function (event) {
    // event.persisted = true when coming from cache
    if (event.persisted) {
      scrollTopSmooth();
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById("loader");

    // Wait until the page is fully loaded
    window.addEventListener("load", () => {
      setTimeout(() => {
        loader.classList.add("hide");
      }, 1800); // delay optional
    });
  });

