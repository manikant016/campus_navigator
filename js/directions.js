/* =========================================================
   TURN-BY-TURN DIRECTIONS WITH LEFT/RIGHT DETECTION
   ========================================================= */

function getTurnAngle(A, B, C) {
  const ABx = B.left - A.left;
  const ABy = B.top - A.top;

  const BCx = C.left - B.left;
  const BCy = C.top - B.top;

  // Dot product → angle magnitude
  const dot = ABx * BCx + ABy * BCy;

  const magAB = Math.sqrt(ABx * ABx + ABy * ABy);
  const magBC = Math.sqrt(BCx * BCx + BCy * BCy);

  const cos = dot / (magAB * magBC);
  const angle = Math.acos(Math.min(1, Math.max(-1, cos))) * (180 / Math.PI);

  // Cross product → sign of turn
  const cross = ABx * BCy - ABy * BCx;

  const signedAngle = cross < 0 ? angle : -angle;
  return signedAngle;
}

function describeTurn(angle) {
  if (angle > -20 && angle < 20) return "Continue straight";

  if (angle <= -20 && angle > -70) return "Slight right";
  if (angle <= -70 && angle > -140) return "Turn right";
  if (angle <= -140) return "Sharp right";

  if (angle >= 20 && angle < 70) return "Slight left";
  if (angle >= 70 && angle < 140) return "Turn left";
  if (angle >= 140) return "Sharp left";

  return "Continue straight";
}

function generateDirections(path, nodes) {
  if (path.length < 2) return ["Walk to your destination"];

  const steps = [];

  for (let i = 0; i < path.length - 2; i++) {
    const A = nodes[path[i]];
    const B = nodes[path[i + 1]];
    const C = nodes[path[i + 2]];

    const angle = getTurnAngle(A, B, C);
    const instruction = describeTurn(angle);

    steps.push(`${instruction} → ${path[i + 2]}`);
  }

  return steps;
}
