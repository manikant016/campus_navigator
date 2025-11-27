/* ============================================
   MAP RENDERING
   ============================================ */

let currentFloor = 0;

function switchFloor() {
  currentFloor = parseInt(document.getElementById('floor').value);
  renderMap();
  populateDropdowns();
}

function renderMap() {
  const map = document.getElementById('map');
  map.innerHTML = '';

  const nodes = floorData[currentFloor].nodes;

  for (const [name, pos] of Object.entries(nodes)) {
    const node = document.createElement('div');
    node.className = 'node';
    node.style.top = pos.top + 'px';
    node.style.left = pos.left + 'px';
    map.appendChild(node);

    const label = document.createElement('div');
    label.className = 'label';
    label.style.top = pos.top + 16 + 'px';
    label.style.left = pos.left + 'px';
    label.innerText = name;
    map.appendChild(label);
  }
}

function populateDropdowns() {
  const options = Object.keys(floorData[currentFloor].nodes)
    .map(k => `<option>${k}</option>`)
    .join('');

  document.getElementById('start').innerHTML = options;
  document.getElementById('end').innerHTML = options;
}

/* 🚀 Fix: Render map on page load */
document.addEventListener("DOMContentLoaded", () => {
  renderMap();
  populateDropdowns();
});
