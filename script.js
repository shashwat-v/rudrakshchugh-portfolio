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

    // Navigation logic
    const navToBarBtn = document.getElementById('nav-to-bar');
    const navToStudyroomBtn = document.getElementById('nav-to-studyroom');
    const studyroomView = document.getElementById('studyroom-view');
    const barView = document.getElementById('bar-view');

    if (navToBarBtn && navToStudyroomBtn && studyroomView && barView) {
        navToBarBtn.addEventListener('click', (e) => {
            e.preventDefault();
            studyroomView.classList.remove('active');
            barView.classList.add('active');
        });

        navToStudyroomBtn.addEventListener('click', (e) => {
            e.preventDefault();
            barView.classList.remove('active');
            studyroomView.classList.add('active');
        });
    }

    // Temporary coordinate listener to help place hotspots
    document.addEventListener('click', (e) => {
        // Only log if clicking on background
        if (e.target.classList.contains('background-image')) {
            const scene = e.target.closest('.scene-container');
            const rect = scene.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            console.log(`Clicked! Set hotspot style to: left: ${x.toFixed(2)}%; top: ${y.toFixed(2)}%;`);
            // Optional alert if console isn't open
            // alert(`left: ${x.toFixed(2)}%; top: ${y.toFixed(2)}%;`);
        }
    });
});
