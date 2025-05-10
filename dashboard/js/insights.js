// js/insights.js
import data from '../data.js';

function renderTable(filter='') {
  const tbody = document.getElementById('insights-body');
  tbody.innerHTML = '';
  data.categories
    .filter(d => d.category.toLowerCase().includes(filter))
    .forEach(d => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${d.category}</td>
        <td>${d.points2022.toFixed(2)}</td>
        <td>${d.predicted2023.toFixed(2)}</td>
      `;
      tbody.appendChild(tr);
    });
}

document.addEventListener('DOMContentLoaded', () => {
  renderTable();
  document.getElementById('search-input')
    .addEventListener('input', e => renderTable(e.target.value.toLowerCase()));
});


// js/insights.js

// // 1) Fetch your JSON file (make sure it's served alongside your site)
// async function fetchData() {
//     const res = await fetch('2025_Submission_Excel_Cleaned.json');
//     const raw = await res.json();
  
//     // Map it into the shape you need: category, 2022 points, predicted2023
//     return raw
//       .filter(d => d.Category && typeof d['2022 Points'] === 'number')
//       .map(d => ({
//         category: d.Category,
//         points2022: d['2022 Points'],
//         // simple example: assume next year they hit their "Points Attainable"
//         predicted2023: d['Points Attainable']
//       }));
//   }
  
//   // 2) Render the filterable table
//   function renderTable(data, filter = '') {
//     const tbody = document.getElementById('insights-body');
//     tbody.innerHTML = '';
  
//     data
//       .filter(d => d.category.toLowerCase().includes(filter))
//       .forEach(d => {
//         const tr = document.createElement('tr');
//         tr.innerHTML = `
//           <td>${d.category}</td>
//           <td>${d.points2022.toFixed(2)}</td>
//           <td>${d.predicted2023.toFixed(2)}</td>
//         `;
//         tbody.appendChild(tr);
//       });
//   }
  
//   // 3) Compute and display AI insights
//   function renderAIInsights(data) {
//     const list = document.getElementById('ai-highlights');
//     const pts = data.map(d => d.points2022);
//     const avg = pts.reduce((a,b) => a + b, 0) / pts.length;
//     const max = Math.max(...pts);
//     const min = Math.min(...pts);
//     const best = data.find(d => d.points2022 === max).category;
//     const worst = data.find(d => d.points2022 === min).category;
  
//     list.innerHTML = `
//       <li><strong>Total categories analyzed:</strong> ${data.length}</li>
//       <li><strong>Average 2022 score:</strong> ${avg.toFixed(2)}</li>
//       <li><strong>Highest‐scoring category:</strong> ${best} (${max.toFixed(2)})</li>
//       <li><strong>Lowest‐scoring category:</strong> ${worst} (${min.toFixed(2)})</li>
//     `;
//   }
  
//   document.addEventListener('DOMContentLoaded', async () => {
//     const data = await fetchData();
//     renderAIInsights(data);
//     renderTable(data);
  
//     document.getElementById('search-input')
//       .addEventListener('input', e => renderTable(data, e.target.value.toLowerCase()));
//   });
  