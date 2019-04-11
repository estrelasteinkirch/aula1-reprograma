document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        // o this se refere ao anchor pq nao tem binding na function (e) (e só no this com a arrow =>)
          behavior: 'smooth'
      });
  });
});