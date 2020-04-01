/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
var criticalConnections = function(n, connections) {
  if (n < 1 || connections.length < 1) return [];
  let graph = constructGraph(n, connections);
  let id = 0;
  let ids = Array(n).fill(0);
  let lows = Array(n).fill(0);
  let visited = Array(n).fill(false);
  let bridges = [];

  const dfs = function(at, prev) {
    visited[at] = true;
    lows[at] = ids[at] = id++;
    for (let to of graph[at]) {
      if (to == prev) continue;
      if (!visited[to]) {
        dfs(to, at);
        lows[at] = Math.min(lows[at], lows[to]);
        if (ids[at] < lows[to]) {
          bridges.push([at, to]);
        }
      } else {
        lows[at] = Math.min(lows[at], ids[to]);
      }
    }
  };

  for (let i = 0; i < graph.length; i++) {
    if (!visited[i]) dfs(i, -1);
  }

  return bridges;
};

const constructGraph = function(n, connections) {
  //let graph = Array(n).fill(new Array());
  //graph.map(x => x.push(new Array()));
  //   for (let i = 0; i < connections.length; i++) {
  //     let from = connections[i][0];
  //     let to = connections[i][1];
  //     console.log(graph[from]);
  //     graph[from].push(to);
  //     graph[to].push(from);
  //   }

  let graph = [];
  // generate graph using adjuacency list
  for ([from, to] of connections) {
    if (!graph[from]) graph[from] = [];
    if (!graph[to]) graph[to] = [];
    graph[from].push(to);
    graph[to].push(from);
  }
  return graph;
};

let n = 4;
let connections = [
  [0, 1],
  [1, 2],
  [2, 0],
  [1, 3]
];
console.log(criticalConnections(n, connections));
console.log("end");
