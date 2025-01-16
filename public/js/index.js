function toggleText() {
    var fullText = document.getElementById("full-text");
    var readMoreLink = document.querySelector(".read-more");
    
    // Toggle the visibility of the full text
    if (fullText.style.display === "none") {
        fullText.style.display = "block";  // Show full text
        readMoreLink.textContent = "Read Less";  // Change text to "Read Less"
    } else {
        fullText.style.display = "none";  // Hide full text
        readMoreLink.textContent = "Read More";  // Change text back to "Read More"
    }
}
document.querySelectorAll('.footer-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const hamburger = document.getElementById('hamburger');
    const dropdownMenu = document.getElementById('dropdown-menu');
    const closeBtn = document.getElementById('close-btn');
    const navLinks = document.querySelectorAll('.dropdown-list a');

    // Open the menu when hamburger is clicked
    hamburger.addEventListener('click', () => {
        console.log('Hamburger clicked');
        dropdownMenu.classList.add('open'); 
    });

    // Close the menu when close button is clicked
    closeBtn.addEventListener('click', () => {
        console.log('Close button clicked');
        dropdownMenu.classList.remove('open');
    });

    // Close the dropdown menu when a nav link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            console.log('Nav link clicked');
            dropdownMenu.classList.remove('open');
        });
    });
});
