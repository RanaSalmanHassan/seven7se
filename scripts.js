// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    setActiveLink();
    setupGetQuoteButton();
    startTestimonialSlider();
});

function setActiveLink() {
    // Get current page URL
    const currentPage = window.location.pathname.split('/').pop();

    // Select all navigation links
    const navigationLinks = document.querySelectorAll('nav a');

    navigationLinks.forEach(link => {
        // Check if navigation link href matches current page
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function setupGetQuoteButton() {
    // Select the Get a Quote button
    const quoteButton = document.querySelector('.intro button');
    if (quoteButton) {
        quoteButton.addEventListener('click', () => {
            // Implement the logic to get a quote
            alert("Please fill out our contact form to get a quote.");
        });
    }
}

function startTestimonialSlider() {
    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonialIndex = 0;

    if (testimonials.length > 0) {
        setInterval(() => {
            testimonials[currentTestimonialIndex].style.display = 'none';
            currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
            testimonials[currentTestimonialIndex].style.display = 'block';
        }, 5000); // Switch testimonials every 5 seconds
    }
}
// Addition to scripts.js

// Toggle password visibility
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function (e) {
  // toggle the type attribute
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  // toggle the eye slash icon
  this.classList.toggle('fa-eye-slash');
});

