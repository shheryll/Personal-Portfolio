// Add active class to nav link on scroll
window.addEventListener('scroll', function() {
    // Select all sections and navigation links
    var sections = document.querySelectorAll('section');
    var navLinks = document.querySelectorAll('nav ul li a');
    
    // Loop through sections
    sections.forEach((section, index) => {
        // Get the top position and height of the section
        var sectionTop = section.offsetTop;
        var sectionHeight = section.clientHeight;
        var scrollY = window.pageYOffset;

        // Check if the scroll position is within the section
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            // Remove active class from all nav links
            navLinks.forEach(link => link.classList.remove('active'));
            // Add active class to the current section's nav link
            navLinks[index].classList.add('active');
        }
    });
});

// Modal popup logic
document.addEventListener("DOMContentLoaded", () => {
    const contactBtn = document.getElementById("contactBtn");
    const contactModal = document.getElementById("contactModal");
    const closeModal = document.getElementById("closeModal");

    if (contactBtn && contactModal && closeModal) {
        contactBtn.addEventListener("click", () => {
            contactModal.style.display = "block";
        });

        closeModal.addEventListener("click", () => {
            contactModal.style.display = "none";
        });

        window.addEventListener("click", (e) => {
            if (e.target === contactModal) {
                contactModal.style.display = "none";
            }
        });
    }
});

function toggleModal() {
    const modal = document.getElementById('contactModal');
    modal.classList.toggle('active');
  }


  const toggles = document.querySelectorAll('.accordion-toggle');

  toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const content = toggle.nextElementSibling;
      content.style.display = (content.style.display === "block") ? "none" : "block";
    });
  });
  