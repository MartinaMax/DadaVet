// Active navigation links
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-links a, .footer-links a'); // Select all navigation links
  const currentUrl = window.location.pathname; // Get the current page's URL path

  navLinks.forEach(link => {
      const linkPath = link.getAttribute('href'); // Get the href attribute of the link

      // If the current path matches the link's href, add the 'active' class
      if (currentUrl === '/' && linkPath === 'index.html') {
          link.classList.add('active');  // Handle the homepage case
      } else if (currentUrl.includes(linkPath)) {
          link.classList.add('active');  // General case: check if the link's href is part of the current URL
      }
  });
});

// Responsive navigation
document.addEventListener('DOMContentLoaded', function () {
  const burger = document.getElementById('burger');
  const burgerClose = document.getElementById('burger-close');
  const navLinks = document.getElementById('nav-links');

  // Function to handle screen resizing
  function handleResize() {
      const width = window.innerWidth;
      
      if (width >= 768) {
          // If on desktop, show the navigation links and hide the burger & close icon
          navLinks.classList.remove('active');  // Hide the menu
          burger.style.display = 'none';
          burgerClose.style.display = 'none';
      } else {
          // If on mobile, ensure the burger icon is visible and the close icon is hidden
          if (!navLinks.classList.contains('active')) {
              burger.style.display = 'block';
              burgerClose.style.display = 'none';
          }
      }
  }

  // Event listener for resizing
  window.addEventListener('resize', handleResize);

  // Initialize the state of icons and menu on page load
  handleResize();

  // Toggle menu visibility and swap icons
  burger.addEventListener('click', () => {
      navLinks.classList.add('active');  // Show the menu
      burger.style.display = 'none';     // Hide the burger icon
      burgerClose.style.display = 'block'; // Show the close icon
  });

  burgerClose.addEventListener('click', () => {
      navLinks.classList.remove('active');  // Hide the menu
      burger.style.display = 'block';       // Show the burger icon
      burgerClose.style.display = 'none';   // Hide the close icon
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const burger = document.getElementById('burger');
  const burgerClose = document.getElementById('burger-close');
  const navLinks = document.getElementById('nav-links');

  // Function to handle screen resizing
  function handleResize() {
      const width = window.innerWidth;
      
      if (width >= 1024) {
          // If on desktop, show the navigation links and hide the burger & close icon
          navLinks.classList.remove('active');  // Hide the menu
          burger.style.display = 'none';
          burgerClose.style.display = 'none';
      } else {
          // If on mobile, ensure the burger icon is visible and the close icon is hidden
          if (!navLinks.classList.contains('active')) {
              burger.style.display = 'block';
              burgerClose.style.display = 'none';
          }
      }
  }

  // Event listener for resizing
  window.addEventListener('resize', handleResize);

  // Initialize the state of icons and menu on page load
  handleResize();

  // Toggle menu visibility and swap icons
  burger.addEventListener('click', () => {
      navLinks.classList.add('active');  // Show the menu
      burger.style.display = 'none';     // Hide the burger icon
      burgerClose.style.display = 'block'; // Show the close icon
  });

  burgerClose.addEventListener('click', () => {
      navLinks.classList.remove('active');  // Hide the menu
      burger.style.display = 'block';       // Show the burger icon
      burgerClose.style.display = 'none';   // Hide the close icon
  });
});

// Accordion menu
function toggleAccordion(element) {
  const content = element.querySelector('.accordion-content');
  const arrow = element.querySelector('.accordion-header img');
  
  if (!content || !arrow) {
      console.error("Content or arrow element not found!");
      return;
  }

  const allContent = document.querySelectorAll('.accordion-content');
  const allArrows = document.querySelectorAll('.accordion-header img');

  allContent.forEach(item => {
      if (item !== content) {
          item.classList.remove('active');
      }
  });

  allArrows.forEach(img => {
      img.style.transform = 'rotate(0deg)'; 
  });


  content.classList.toggle('active');


  if (content.classList.contains('active')) {
      arrow.style.transform = 'rotate(180deg)';  
  } else {
      arrow.style.transform = 'rotate(0deg)'; 
  }
}



// Back to top button
mybutton = document.getElementById("btnTop"); 

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 200) { 
    mybutton.style.display = "block"; 
  } else { 
    mybutton.style.display = "none"; 
  }
}

function toTop() { 
  document.documentElement.scrollTop = 0; 
}