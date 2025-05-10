// js/common.js
document.addEventListener('DOMContentLoaded', () => {
    const page = window.location.pathname.split('/').pop();
    document.querySelectorAll('aside nav a').forEach(a => {
      if (a.getAttribute('href') === page) a.classList.add('active');
    });
  });
  