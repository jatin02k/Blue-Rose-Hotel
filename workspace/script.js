const images = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  "image4.jpg",
  "image5.jpg",
];

let currentIndex = 0;

function updateImages() {
  const galleryImages = document.querySelector(".gallery-images");

  // Calculate the translate value
  const translateX = -(currentIndex * 33.33); // Shift by 33.33% for each image
  galleryImages.style.transform = `translateX(${translateX}%)`;

  // Update image sources based on current index
  const imgElements = document.querySelectorAll(".gallery-image");
  imgElements.forEach((img, index) => {
    // Set the images to show in the gallery with wrapping
    img.src = images[(currentIndex + index) % images.length]; // Loop through images
  });
}

// Update images on load
updateImages();

document.getElementById("next").addEventListener("click", () => {
  // Increment index to show the next image
  currentIndex = (currentIndex + 1) % images.length; // Cycle to the next image
  updateImages();
});

document.getElementById("prev").addEventListener("click", () => {
  // Decrement index to show the previous image
  currentIndex = (currentIndex - 1 + images.length) % images.length; // Cycle to the previous image
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
