// js/recommendations.js
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.accordion-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        const panel = btn.nextElementSibling;
        panel.style.maxHeight = panel.style.maxHeight
          ? null
          : panel.scrollHeight + 'px';
      });
    });
  });
  