/* ===============================================
   Convert adjacency graph → weighted graph
   Using real pixel distances between nodes
   ===============================================*/

function computeWeightedGraph(nodes, graph) {
  const weighted = {};

  for (let from in graph) {
    weighted[from] = {};

    for (let to of graph[from]) {
      const dx = nodes[from].left - nodes[to].left;
      const dy = nodes[from].top - nodes[to].top;

      const dist = Math.sqrt(dx * dx + dy * dy);
      weighted[from][to] = dist;   // REAL distance weight
    }
  }

  return weighted;
}
