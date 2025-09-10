          // Navbar shrink on scroll
          window.addEventListener('scroll', () => {
            if(window.scrollY > 20){
              navbar.classList.add('shrink');
            } else {
              navbar.classList.remove('shrink');
            }
          });