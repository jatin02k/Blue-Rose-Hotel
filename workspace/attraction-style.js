document.addEventListener('DOMContentLoaded', () => {
    const attractionsDetails = document.querySelector('.attractions-details');
    const attractionsSection = document.getElementById('attractions');
    const sectionHeading = attractionsSection.querySelector('h2'); // Select the heading
    const headingHeight = sectionHeading.offsetHeight; // Get the height of the heading

    window.addEventListener('scroll', () => {
        const sectionRect = attractionsSection.getBoundingClientRect();
        
        // Adjust the margin so the section doesn't scroll out of view
        if (sectionRect.top <= 0) {
            attractionsDetails.style.marginTop = `${headingHeight}px`; // Set margin to the height of the heading
        } else if (sectionRect.top > 0) {
            attractionsDetails.style.marginTop = '50px'; // Restore initial margin
        }
    });
});
//prevent header scroll
let lastScrollTop = 0; // Store the last scroll position
const header = document.querySelector('header'); // Select the header element

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY; // Get the current scroll position

    if (currentScroll > lastScrollTop) {
        // Scrolling down
        header.style.transform = 'translateY(-100%)'; // Hide the header
    } else {
        // Scrolling up
        header.style.transform = 'translateY(0)'; // Show the header
    }

    lastScrollTop = currentScroll; // Update the last scroll position
});
