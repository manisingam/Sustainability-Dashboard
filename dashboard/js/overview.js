// js/overview.js
import data from '../data.js';

function initOverview() {
  document.getElementById('total-2022').textContent    = data.total.points2022.toFixed(2);
  document.getElementById('predicted-2023').textContent = data.total.predicted2023.toFixed(2);

  const ctx = document.getElementById('totalChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['2022','2023 (Predicted)'],
      datasets: [{
        label: 'Total Points',
        data: [data.total.points2022, data.total.predicted2023],
        fill: false,
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      animation: { duration: 1200 },
      scales: { y: { beginAtZero: true } }
    }
  });
}

window.addEventListener('DOMContentLoaded', initOverview);
