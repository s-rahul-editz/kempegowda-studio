/**
 * Kempegowda Studio — script.js
 *
 * Behaviour:
 *  1. Modal fades in 1 second after page load.
 *  2. Clicking "Enter Studio" fades out the modal and removes it from the DOM.
 *  3. After modal exits, the main page fades in with a gentle slide-up.
 */

document.addEventListener('DOMContentLoaded', () => {

  const overlay  = document.getElementById('modal-overlay');
  const enterBtn = document.getElementById('enter-btn');
  const mainPage = document.getElementById('main-page');

  // ── 1. Fade modal in after 1 second ──────────────────────────────────
  setTimeout(() => {
    overlay.classList.add('is-visible');
  }, 1000);

  // ── 2. On "Enter Studio" click — fade out modal, reveal main page ─────
  enterBtn.addEventListener('click', () => {

    // Remove the visible class → CSS transition kicks in (opacity → 0)
    overlay.classList.remove('is-visible');

    // Guard: ensure reveal only fires once, even if transitionend misfires
    let revealed = false;

    const revealMainPage = () => {
      if (revealed) return;
      revealed = true;

      // Remove modal from DOM entirely
      if (overlay.parentNode) overlay.remove();

      // Unlock main page for assistive tech
      mainPage.removeAttribute('aria-hidden');

      // ── 3. Trigger fade-in + slide-up on main page ──────────────────
      mainPage.classList.add('is-visible');
    };

    // Primary trigger: CSS transitionend (opacity transition ≈ 0.7s)
    overlay.addEventListener('transitionend', revealMainPage, { once: true });

    // Fallback: if transitionend never fires (e.g. reduced-motion, old browser)
    setTimeout(revealMainPage, 900);
  });

});
