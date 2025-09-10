window.addEventListener('load', function () {
    const loader = document.getElementById('loader');
    setTimeout(() => {
      loader.classList.add('fade-out');
      setTimeout(() => {
        loader.style.display = 'none';
      }, 600); // odpovídá délce přechodu v CSS (0.6s)
    }, 500); // chvíli počká po načtení, než začne mizet
  });