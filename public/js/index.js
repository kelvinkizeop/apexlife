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
  
