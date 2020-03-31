const topological_sort = function(vertices, edges) {
  sortedOrder = [];
  // TODO: Write your code here

  let inDegree = Array(vertices).fill(0);
  //let graph = Array(vertices).fill([]);
  const graph = Array(vertices)
    .fill(0)
    .map(() => Array()); // adjacency list graph

  let queue = [];

  edges.forEach(edge => {
    let parent = edge[0],
      child = edge[1];
    graph[parent].push(child); // put the child into it's parent's list
    inDegree[child]++; // increment child's inDegree
  });

  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  while (queue.length > 0) {
    let vertex = queue.shift();
    let children = graph[vertex];
    children.forEach(child => {
      inDegree[child]--;
      if (inDegree[child] === 0) queue.push(child);
    });
    sortedOrder.push(vertex);
  }

  // topological sort is not possible as the graph has a cycle
  if (sortedOrder.length !== vertices) {
    return [];
  }

  return sortedOrder;
};

console.log(
  `Topological sort: ${topological_sort(4, [
    [3, 2],
    [3, 0],
    [2, 0],
    [2, 1]
  ])}`
);
console.log(
  `Topological sort: ${topological_sort(5, [
    [4, 2],
    [4, 3],
    [2, 0],
    [2, 1],
    [3, 1]
  ])}`
);
console.log(
  `Topological sort: ${topological_sort(7, [
    [6, 4],
    [6, 2],
    [5, 3],
    [5, 4],
    [3, 0],
    [3, 1],
    [3, 2],
    [4, 1]
  ])}`
);
