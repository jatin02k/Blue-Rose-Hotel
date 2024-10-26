document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".navbar-toggle");
  const navMenu = document.querySelector("nav ul");

  // Function to toggle the menu and button icon
  function toggleMenu() {
    navMenu.classList.toggle("show");
    toggleButton.classList.toggle("open"); // Add a class to change icon
  }

  // Toggle menu when the button is clicked
  toggleButton.addEventListener("click", toggleMenu);

  // Close menu when clicking outside of it
  document.addEventListener("click", function (event) {
    if (
      !navMenu.contains(event.target) &&
      !toggleButton.contains(event.target)
    ) {
      navMenu.classList.remove("show");
      toggleButton.classList.remove("open");
    }
  });
});


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

