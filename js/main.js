  // JavaScript to change navbar color on scroll
  window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if(window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
 });
// JS  Tabs 

$(document).ready(function() {
    $('#btnDotNetBasics').click(function() {
      $('.content-section').removeClass('active');
      $('#dotNetBasicsContent').addClass('active');
    });
    $('#btnCSharp').click(function() {
      $('.content-section').removeClass('active');
      $('#csharpContent').addClass('active');
    });
    $('#btnDotNetCore').click(function() {
      $('.content-section').removeClass('active');
      $('#dotNetCoreContent').addClass('active');
    });
    $('#btnASPNET').click(function() {
      $('.content-section').removeClass('active');
      $('#aspNetMVCContent').addClass('active');
    });
    $('#btnEntityFramework').click(function() {
      $('.content-section').removeClass('active');
      $('#entityFrameworkContent').addClass('active');
    });
  });

// Javascript Counter Section

document.addEventListener('DOMContentLoaded', function () {
    function countUp(element, target) {
        let count = 0;
        const increment = target / 100;
        const duration = 3000; // 3 seconds
        const stepTime = Math.abs(Math.floor(duration / target));

        const timer = setInterval(() => {
            count += increment;
            if (count >= target) {
                count = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(count) + '+';
        }, stepTime);
    }

    const counters = document.querySelectorAll('.counter h3[data-count]');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-count');
        countUp(counter, target);
    });
});








// JS Testmonials Section

document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-pills-custom .nav-link');

  navLinks.forEach(link => {
      link.addEventListener('click', function() {
          // Remove active class from all links
          navLinks.forEach(nav => nav.classList.remove('active'));
          // Add active class to the clicked link
          this.classList.add('active');
      });
  });
});






