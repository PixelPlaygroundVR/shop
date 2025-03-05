/**
 * Pixel Playgrounds - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all components
  initMobileMenu();
  initLazyLoading();
  initAnimations();
  initProductFilters();
  initContactForm();
  initDarkModeToggle();
  
  // Blog post animations
  // Animate elements on scroll
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  
  function checkIfInView() {
    animateElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add('visible');
      }
    });
  }
  
  window.addEventListener('scroll', checkIfInView);
  
  // Initial check on page load
  checkIfInView();
  
  // Filter blog posts by category
  const categoryLinks = document.querySelectorAll('.category-link');
  
  categoryLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      if (this.classList.contains('active')) {
        return; // Don't do anything if already active
      }
      
      // Remove active class from all links
      categoryLinks.forEach(l => l.classList.remove('active'));
      
      // Add active class to clicked link
      this.classList.add('active');
    });
  });
  
  // Newsletter form submission
  const newsletterForm = document.querySelector('.newsletter-form');
  
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value.trim();
      
      if (!email) {
        alert('Please enter your email address.');
        return;
      }
      
      // Here you would typically send the data to your backend
      // For now, we'll just show a success message
      
      const formContainer = this.parentElement;
      formContainer.innerHTML = '<div class="success-message"><h3>Thank you for subscribing!</h3><p>You\'ll receive our next newsletter soon.</p></div>';
    });
  }
});

/**
 * Mobile Menu Functionality
 */
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      menuToggle.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });
  }
}

/**
 * Lazy Loading Images
 */
function initLazyLoading() {
  if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          if (img.dataset.srcset) {
            img.srcset = img.dataset.srcset;
          }
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      });
    });
    
    lazyImages.forEach(function(img) {
      imageObserver.observe(img);
    });
  } else {
    // Fallback for browsers without IntersectionObserver support
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    lazyImages.forEach(function(img) {
      img.src = img.dataset.src;
      if (img.dataset.srcset) {
        img.srcset = img.dataset.srcset;
      }
      img.classList.add('loaded');
    });
  }
}

/**
 * Scroll Animations
 */
function initAnimations() {
  if ('IntersectionObserver' in window) {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const animationObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, { threshold: 0.1 });
    
    elements.forEach(function(element) {
      animationObserver.observe(element);
    });
  }
}

/**
 * Product Filters for Shop Page
 */
function initProductFilters() {
  const filterButtons = document.querySelectorAll('.filter-button');
  const productItems = document.querySelectorAll('.product-item');
  
  if (filterButtons.length && productItems.length) {
    filterButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        const filterValue = this.getAttribute('data-filter');
        
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Filter products
        if (filterValue === 'all') {
          productItems.forEach(item => item.style.display = 'block');
        } else {
          productItems.forEach(function(item) {
            if (item.classList.contains(filterValue)) {
              item.style.display = 'block';
            } else {
              item.style.display = 'none';
            }
          });
        }
      });
    });
  }
}

/**
 * Contact Form Validation and Submission
 */
function initContactForm() {
  const contactForm = document.querySelector('.contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      let isValid = true;
      const requiredFields = contactForm.querySelectorAll('[required]');
      
      requiredFields.forEach(function(field) {
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add('error');
        } else {
          field.classList.remove('error');
        }
      });
      
      // Email validation
      const emailField = contactForm.querySelector('input[type="email"]');
      if (emailField && emailField.value) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailField.value)) {
          isValid = false;
          emailField.classList.add('error');
        }
      }
      
      if (!isValid) {
        e.preventDefault();
        const errorMessage = document.querySelector('.form-error-message') || document.createElement('div');
        errorMessage.className = 'form-error-message';
        errorMessage.textContent = 'Please fill in all required fields correctly.';
        
        if (!document.querySelector('.form-error-message')) {
          contactForm.prepend(errorMessage);
        }
      }
    });
    
    // Clear error styling on input
    const formInputs = contactForm.querySelectorAll('input, textarea');
    formInputs.forEach(function(input) {
      input.addEventListener('input', function() {
        this.classList.remove('error');
      });
    });
  }
}

/**
 * Dark Mode Toggle
 */
function initDarkModeToggle() {
  const darkModeToggle = document.querySelector('.dark-mode-toggle');
  
  if (darkModeToggle) {
    // Check for saved user preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
      darkModeToggle.classList.add('active');
    }
    
    darkModeToggle.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      this.classList.toggle('active');
      
      // Save user preference
      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    });
  }
} 