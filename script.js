document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal-overlay');
    const enterBtn = document.getElementById('enter-studio-btn');
    const pageWrapper = document.getElementById('page-wrapper');

    /**
     * 1. Graceful Modal Entry
     * Triggered 1 second after initial load
     */
    setTimeout(() => {
        modal.classList.remove('hidden');
        modal.classList.add('visible');
    }, 1000);

    /**
     * 2. Modal Exit & Content Reveal
     * On click, fade out modal, remove from DOM, then trigger main content animation
     */
    enterBtn.addEventListener('click', () => {
        // Fade out the modal
        modal.classList.add('fade-out');

        // Once transition ends, remove and reveal
        setTimeout(() => {
            modal.style.display = 'none';
            modal.remove(); // Completely remove from DOM for performance

            // Trigger the main page fade-in and slide-up
            revealMainContent();
        }, 800);
    });

    function revealMainContent() {
        pageWrapper.classList.remove('content-hidden');
        pageWrapper.classList.add('content-reveal');
    }
});
