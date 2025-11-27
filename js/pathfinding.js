/* ===============================================
   REAL SHORTEST PATH USING DIJKSTRA
   ===============================================*/

function dijkstra(graph, start, end) {
  const distances = {};
  const visited = {};
  const previous = {};

  // initialize
  for (let node in graph) {
    distances[node] = Infinity;
    previous[node] = null;
  }
  distances[start] = 0;

  while (true) {
    // pick unvisited node with smallest distance
    let curr = null;
    for (let node in distances) {
      if (!visited[node] && (curr === null || distances[node] < distances[curr])) {
        curr = node;
      }
    }

    if (curr === null) break;
    if (curr === end) break;

    visited[curr] = true;

    for (let neighbor in graph[curr]) {
      const newDist = distances[curr] + graph[curr][neighbor];
      if (newDist < distances[neighbor]) {
        distances[neighbor] = newDist;
        previous[neighbor] = curr;
      }
    }
  }

  // build path
  const path = [];
  let node = end;
  while (node) {
    path.unshift(node);
    node = previous[node];
  }

  return path;
}

function computeWeightedGraphUndirected(nodes, graph) {
  const weighted = {};
  for (let from in graph) {
    weighted[from] = weighted[from] || {};
    for (let to of graph[from]) {
      if (!nodes[from] || !nodes[to]) continue;
      const dx = nodes[from].left - nodes[to].left;
      const dy = nodes[from].top - nodes[to].top;
      const dist = Math.sqrt(dx*dx + dy*dy);
      weighted[from][to] = dist;
      weighted[to] = weighted[to] || {};
      if (weighted[to][from] == null) weighted[to][from] = dist;
    }
  }
  return weighted;
}

function dijkstra(graph, start, end) {
  if (!graph[start] || !graph[end]) {
    console.error("dijkstra: start or end not in graph:", start, end);
    return null;
  }
  const dist = {}, prev = {}, Q = new Set();
  for (let node in graph) { dist[node] = Infinity; prev[node] = null; Q.add(node); }
  dist[start] = 0;
  while (Q.size) {
    let u = null;
    for (let n of Q) { if (u === null || dist[n] < dist[u]) u = n; }
    if (u === null || dist[u] === Infinity) break;
    Q.delete(u);
    if (u === end) break;
    for (let v in graph[u]) {
      const alt = dist[u] + graph[u][v];
      if (alt < dist[v]) { dist[v] = alt; prev[v] = u; }
    }
  }
  if (!isFinite(dist[end])) return null;
  const path = []; let cur = end;
  while (cur) { path.unshift(cur); cur = prev[cur]; }
  return path;
}
