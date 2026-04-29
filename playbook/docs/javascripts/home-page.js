// Add 'home-page' class to body when on home page
// This allows CSS to scope styles to home page only
(function () {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  function checkHomePage() {
    const homeHero = document.querySelector('.home-hero');
    if (homeHero) {
      document.body.classList.add('home-page');
      startTypingEffect();
      updateHomeHeaderOffset();
    } else {
      document.body.classList.remove('home-page');
    }
  }

  // Initial check
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkHomePage);
  } else {
    checkHomePage();
  }

  // Re-check on navigation (Material for MkDocs uses instant loading)
  if (window.location$ && typeof window.location$.subscribe === 'function') {
    window.location$.subscribe(checkHomePage);
  } else {
    document.addEventListener('click', function () {
      setTimeout(checkHomePage, 0);
    }, true);
  }

  // Update header offset on resize to keep image flush with navbar
  window.addEventListener('resize', function () {
    if (document.body.classList.contains('home-page')) {
      updateHomeHeaderOffset();
    }
  });
})();

// Typing effect for the risk area in the home page tagline.
function startTypingEffect() {
  const el = document.querySelector('.typed-areas');
  if (!el || el.dataset.typingInit === '1') return;
  el.dataset.typingInit = '1';

  const words = ['safety', 'robustness', 'fairness', 'explainability', 'privacy', 'transparency'];
  const typeDelay = 90;       // ms per char when typing
  const eraseDelay = 60;      // ms per char when erasing
  const holdDelay = 1200;     // ms to hold full word before erase
  const gapDelay = 500;       // ms to wait before typing next word

  let wordIndex = 0;
  let charIndex = 0;
  let typing = true;

  function tick() {
    const word = words[wordIndex];
    if (typing) {
      el.textContent = word.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === word.length) {
        typing = false;
        setTimeout(tick, holdDelay);
        return;
      }
      setTimeout(tick, typeDelay);
    } else {
      el.textContent = word.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        typing = true;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(tick, gapDelay);
        return;
      }
      setTimeout(tick, eraseDelay);
    }
  }

  // Kick off
  tick();
}

// Compute combined header + tabs height and expose as CSS var
function updateHomeHeaderOffset() {
  const header = document.querySelector('.md-header');
  const tabs = document.querySelector('.md-tabs');
  const headerH = header ? header.offsetHeight : 0;
  const tabsH = tabs ? tabs.offsetHeight : 0;
  const total = headerH + tabsH;
  document.documentElement.style.setProperty('--home-header-offset', total + 'px');
}
