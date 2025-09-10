document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const overlay = document.getElementById('menu-overlay');
    const navbar = document.getElementById('navbar');

    function openMenu() {
      mobileNav.classList.add('open');
      menuToggle.classList.add('open');
      menuToggle.setAttribute('aria-expanded', 'true');
      overlay.classList.add('active');
      overlay.setAttribute('aria-hidden', 'false');
      mobileNav.querySelector('a')?.focus();
      document.body.style.overflow = 'hidden';
    }
    function closeMenu() {
      mobileNav.classList.remove('open');
      menuToggle.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      overlay.classList.remove('active');
      overlay.setAttribute('aria-hidden', 'true');
      menuToggle.focus();
      document.body.style.overflow = '';
    }
    function toggleMenu() {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      if (expanded) closeMenu();
      else openMenu();
    }

    menuToggle.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', closeMenu);

    // Close menu on link click (mobile)
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Close menu on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
        closeMenu();
      }
    });

    // Close menu on resize if desktop
    window.addEventListener('resize', () => {
      if(window.innerWidth >= 768 && mobileNav.classList.contains('open')){
        closeMenu();
      }
    });


  });