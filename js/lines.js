/* ============================================
   PATH LINE RENDERING + ANIMATION
   ============================================ */

function clearOldLines() {
  document.querySelectorAll(".route-line").forEach(line => line.remove());
}

function drawAnimatedLine(x1, y1, x2, y2) {
  const map = document.getElementById("map");

  const length = Math.hypot(x2 - x1, y2 - y1);

  const line = document.createElement("div");
  line.className = "route-line";
  line.style.position = "absolute";
  line.style.height = "3px";
  line.style.background = "blue";
  line.style.transformOrigin = "0 0";
  line.style.left = x1 + "px";
  line.style.top = y1 + "px";
  line.style.width = length + "px";

  // Angle calculation
  const angle = Math.atan2(y2 - y1, x2 - x1);
  line.style.transform = `rotate(${angle}rad)`;

  // Animation
  line.style.width = "0px";
  setTimeout(() => {
    line.style.transition = "width 0.8s linear";
    line.style.width = length + "px";
  }, 10);

  map.appendChild(line);
}

function drawPathLines(path, nodes) {
  clearOldLines();

  for (let i = 0; i < path.length - 1; i++) {
    const A = nodes[path[i]];
    const B = nodes[path[i+1]];

    const x1 = A.left + 7;  
    const y1 = A.top + 7;
    const x2 = B.left + 7;
    const y2 = B.top + 7;

    drawAnimatedLine(x1, y1, x2, y2);
  }
}
