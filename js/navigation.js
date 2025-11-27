function navigate() {
  const start = document.getElementById('start').value;
  const end = document.getElementById('end').value;

  if (!start || !end) return;

  const floorNodes = floorData[currentFloor].nodes;
  const floorGraph = floorData[currentFloor].graph;

  // Try exact custom instruction lookup first (authoritative)
  const directKey = `${start}→${end}`;
  if (edgeInstruction[directKey]) {
    // show the exact instruction(s) you wrote
    document.getElementById('path').innerText = `Path: ${start} → ${end}`;
    document.getElementById('directions').innerHTML = `<div class="instruction">➡️ ${edgeInstruction[directKey]}</div>`;

    // Try to draw a simple straight path between the two nodes (if coordinates exist)
    drawPathLines([start, end], floorNodes);
    // animate user along the two-node path
    currentPath = [start, end];
    userIndex = 0;
    animateUser();
    return;
  }

  // If no direct custom instruction, fallback to pathfinding (Dijkstra)
  // Build undirected weighted graph from coordinates
  const weighted = computeWeightedGraphUndirected(floorNodes, floorGraph);

  // Run Dijkstra
  const path = dijkstra(weighted, start, end);

  if (!path || path.length === 0) {
    document.getElementById('path').innerText = "No Path Found";
    document.getElementById('directions').innerHTML = "";
    return;
  }

  currentPath = path;
  document.getElementById('path').innerText = "Path: " + path.join(" → ");

  // show segment-by-segment: first try custom edgeInstruction per hop, else fallback text
  let html = "";
  for (let i = 0; i < path.length - 1; i++) {
    const key = `${path[i]}→${path[i+1]}`;
    if (edgeInstruction[key]) {
      html += `<div class="instruction">➡️ ${edgeInstruction[key]}</div>`;
    } else {
      html += `<div class="instruction">➡️ Walk towards ${path[i+1]}</div>`;
    }
  }
  document.getElementById('directions').innerHTML = html;

  // Draw & animate
  drawPathLines(path, floorNodes);
  userIndex = 0;
  animateUser();
}
