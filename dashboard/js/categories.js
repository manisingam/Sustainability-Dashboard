// js/categories.js
import data from '../data.js';
let chart = null;

function drawChart(filter) {
  const labels = data.categories.map(d => d.category);
  const datasets = [];

  if (filter==='both' || filter==='2022') {
    datasets.push({
      label: '2022 Points',
      data: data.categories.map(d => d.points2022),
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor:     'rgba(75,192,192,1)',
      borderWidth: 1
    });
  }
  if (filter==='both' || filter==='predicted') {
    datasets.push({
      label: '2023 Predicted',
      data: data.categories.map(d => d.predicted2023),
      backgroundColor: 'rgba(255,159,64,0.4)',
      borderColor:     'rgba(255,159,64,1)',
      borderWidth: 1
    });
  }

  if (chart) chart.destroy();
  const ctx = document.getElementById('categoryChart').getContext('2d');
  chart = new Chart(ctx, {
    type: 'bar',
    data: { labels, datasets },
    options: {
      responsive: true,
      animation: { duration: 1000 },
      scales: { y: { beginAtZero: true } }
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const sel = document.getElementById('year-select');
  sel.addEventListener('change', () => drawChart(sel.value));
  drawChart('both');
});
