// Handle modal interactions
document.addEventListener('DOMContentLoaded', () => {
    const aboutBtn = document.querySelector('a[href="#about-me"]');
    const modal = document.getElementById('about-me-modal');

    if (aboutBtn && modal) {
        // Open modal on clicking the About Me hotspot
        aboutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('active');
        });

        // Close modal when clicking outside the image
        modal.addEventListener('click', (e) => {
            if (e.target.tagName !== 'IMG') {
                modal.classList.remove('active');
            }
        });
    }
});
