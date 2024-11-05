const images = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  "image4.jpg",
  "image5.jpg",
];

// Create clones for seamless looping
const imagesWithClones = [images[images.length - 1], ...images, images[0]];

let currentIndex = 1; // Start at the first actual image

function updateImages() {
  const galleryImages = document.querySelector(".gallery-images");

  // Calculate the translate value
  const translateX = -(currentIndex * 33.33); // Shift by 33.33% for each image
  galleryImages.style.transform = `translateX(${translateX}%)`;

  // Smooth transition for all except the reset snaps
  galleryImages.style.transition = "transform 1s ease";

  // Check if we're at the first or last clone for a seamless loop
  if (currentIndex === 0 || currentIndex === imagesWithClones.length - 1) {
    setTimeout(() => {
      // Temporarily disable transition to "snap" to the correct image
      galleryImages.style.transition = "none";

      // Update the currentIndex to the real first or last image
      currentIndex = currentIndex === 0 ? images.length : 1;
      const translateX = -(currentIndex * 33.33);
      galleryImages.style.transform = `translateX(${translateX}%)`;
    }, 500);
  }
}

// Update images on load
updateImages();

document.getElementById("next").addEventListener("click", () => {
  // Increment index to show the next image
  currentIndex = (currentIndex + 1) % imagesWithClones.length;
  updateImages();
});

document.getElementById("prev").addEventListener("click", () => {
  // Decrement index to show the previous image
  currentIndex = (currentIndex - 1 + imagesWithClones.length) % imagesWithClones.length;
  updateImages();
});

//video
document.getElementById("playButton").addEventListener("click", function () {
  // Logic to open video player can go here
  // For example, opening a modal or redirecting to a video page
  window.open("video1.mp4", "_blank"); // Open the video in a new tab
});

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
    if (!navMenu.contains(event.target) && !toggleButton.contains(event.target)) {
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
