// script.js

// Function to hide all sections except the specified one
function hideSections(exceptSection) {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
      if (section.id !== exceptSection) {
          section.style.display = 'none';
      }
  });
}

// Function for smooth scrolling to the target element
function smoothScroll(target) {
  const targetElement = document.getElementById(target);
  targetElement.scrollIntoView({
      behavior: 'smooth'
  });
}

// Event listener for navigation clicks
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      // Get the target section ID from the clicked link's href
      const targetSection = this.getAttribute('href').replace('#', '');

      // Hide all sections except the target section
      hideSections(targetSection);

      // Display the target section
      document.getElementById(targetSection).style.display = 'block';

      // Smooth scroll to the target section
      smoothScroll(targetSection);
  });
});

// Show the default section when the page loads (About Me in this case)
document.addEventListener('DOMContentLoaded', () => {
  hideSections('about-section');
  document.getElementById('about-section').style.display = 'block';
});
