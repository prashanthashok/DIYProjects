/**
 * Node class
 * stores value of node
 * and adjacency list
 * can add adjacent
 * can remove adjacent
 * can get adjacents
 * can return if a node is adjacent to another
 */
class Node {
    constructor(value){
        this.value = value;
        this.adjacents = [];
    }

    addAdjacent(node) {
        this.adjacents.push(node);
    }

    removeAdjacent(node) {
        const index = this.adjacents.indexOf(node);
        if(index > -1){
            this.adjacents.splice(index, 1)
            return true;
        }
        return false;
    }

    isAdjacent(node){
        return this.adjacents.indexOf(node) > 1;
    }

    getAdjacents() {
        return this.adjacents;
    }

}

/**
 * Graph class
 * contains a list of nodes
 * can add vertices
 * can add edges
 * can remove vertices
 * can remove edges
 */
class Graph {
    constructor(edgeDirection){
        this.nodes = new Map();
        this.edgeDirection = edgeDirection;
    }

    addVertex(value){
        //debugger;
        if(this.nodes.has(value)) return this.nodes.get(value);
        const vertex = new Node(value);
        this.nodes.set(value, vertex);
        return vertex;
    }

    removeVertex(value) {
        debugger;
        if(!this.nodes.has(value)) return false;

        //find vertex
        let vertex = this.nodes.get(value);
        //find all adjacents for that vertex
        let adjacents = vertex.getAdjacents();
        //remove references from all edges connected to that vertex
        adjacents.forEach(adjacentVertex => {
            adjacentVertex.removeAdjacent(vertex)
        });
        //if un-directed, remove all reference

        //remove vertex
        this.nodes.delete(value);
    }

    addEdge(source, destination) {
        //debugger;
        let sourceVertex = this.nodes.get(source);
        let destinationVertex = this.nodes.get(destination);
        if(sourceVertex.isAdjacent(destinationVertex)) return;
        sourceVertex.addAdjacent(destinationVertex);
        if(this.edgeDirection == Graph.UNDIRECTED){
            destinationVertex.addAdjacent(sourceVertex);
        }
        return true;
    }

    removeEdge(source, destination) {
        if(!source.isAdjacent(destination)) return false;
        let sourceVertex = this.nodes.get(source);
        let destinationVertex = this.nodes.get(destination);
        if(sourceVertex && destinationVertex) {
            sourceVertex.removeAdjacent(destinationVertex);
            if(this.edgeDirection == Graph.UNDIRECTED) {
                destinationVertex.removeAdjacent(sourceVertex);
            }
            return true;
        }
        
    }
    
}

Graph.DIRECTED = Symbol('directed');
Graph.UNDIRECTED = Symbol('undirected');

module.exports = Node | Graph;
module.exports = Graph;

const graph = new Graph(Graph.UNDIRECTED);

graph.addVertex('1');
graph.addVertex('2');
graph.addVertex('3');
graph.addVertex('4');
graph.addVertex('5');

graph.addEdge('1', '2');
graph.addEdge('1', '3');
graph.addEdge('2', '4');
graph.addEdge('2', '5');
graph.addEdge('3', '4');
graph.addEdge('4', '5');

graph.removeVertex('4');

debugger;
console.log(graph);


