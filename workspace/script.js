const images = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  "image4.jpg",
  "image5.jpg"
];

// Create clones for seamless looping
const imagesWithClones = [images[images.length - 1], ...images, images[0]];
let currentIndex = 1; // Start at the first actual image

function updateImages() {
  const galleryImages = document.querySelector(".gallery-images");
  const translateX = -(currentIndex * 33.33); // Shift by 33.33% for each image
  galleryImages.style.transform = `translateX(${translateX}%)`;
  galleryImages.style.transition = "transform 1s ease"; // Smooth transition
}

// Update images on load
updateImages();

// Next button event
document.getElementById("next").addEventListener("click", () => {
  currentIndex++;
  if (currentIndex === imagesWithClones.length - 1) {
    setTimeout(() => {
      currentIndex = 1; // Snap to the first real image
      updateImages();
    }, 1000); // Wait for transition to complete before snapping
  }
  updateImages();
});

// Previous button event
document.getElementById("prev").addEventListener("click", () => {
  currentIndex--;
  if (currentIndex === 0) {
    setTimeout(() => {
      currentIndex = images.length; // Snap to the last real image
      updateImages();
    }, 1000); // Wait for transition to complete before snapping
  }
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
