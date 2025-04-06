
  document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
      const update = () => {
        const target = +counter.getAttribute('data-count');
        let count = 0;
        const speed = 30; // lower = faster
        const step = Math.ceil(target / 50);

        const animate = () => {
          count += step;
          if (count >= target) {
            counter.innerText = target;
          } else {
            counter.innerText = count;
            setTimeout(animate, speed);
          }
        };

        animate();
      };
      update();
    });
  });


  const toggle = document.getElementById('menuToggle');
  const nav = document.querySelector('.nav-links');

  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

