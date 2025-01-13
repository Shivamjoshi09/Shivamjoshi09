document.addEventListener('DOMContentLoaded', () => {
    // Highlight active link in the navigation bar
    const navLinks = document.querySelectorAll('.nav-links a'); // All navigation links
    const currentPath = window.location.pathname.split('/').pop(); // Get current page filename

    navLinks.forEach(link => {
        // Add 'active' class to the matching link
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active'); // Remove active from other links
        }
    });

    // Dropdown menu toggle for mobile view
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinksContainer = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinksContainer.classList.toggle('show'); // Toggle the dropdown menu
    });
});
