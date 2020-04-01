const buildTree = require('./index');

// const PRE_ORDER = [3,9,20,15,7];
// const IN_ORDER = [9,3,15,20,7];

const PRE_ORDER = [8,5,9,7,1,12,2,4,11,3];
const IN_ORDER = [9,5,1,7,2,12,8,4,3,11];

const tree = buildTree(PRE_ORDER, IN_ORDER)
debugger
console.log(tree)