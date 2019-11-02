/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  //check if either list is empty
  //  if only one of them is empty, return the non-empty one
  //if both are empty return empty list

  if (l1.length < 1 && l2.length < 1) return [];
  if (l1.length < 1 && l2.length >= 1) return l2;
  if (l1.length >= 1 && l2.length < 1) return l1;

  //track the positions of the two lists l1 and l2 with i and j respectively
  //  starting with i = j = 0

  let i = 0;
  let j = 0;

  //iterate over the two lists

  while (i <= l1.length - 1) {
    console.log("inside while loop");
    //if l1[i] <= l2[j]
    if (l1[i] < l2[j]) i++;
    if (l1[i] >= l2[j]) {
      console.log(`li[${i}] - ${l1[i]}`);
      console.log(`l2[${j}] - ${l2[j]}`);
      l1.splice(i, 0, l2.shift());
      i++;
    }
    //i++
    //repeat the above comparison and incrementing i++ until l1[i]>=l2[j]
    //when the above condition succeeds, splice the element l2[j] into l1 at index i
    // continue above process until reaching the end of either list
    //if either list ends first, add the remaining elements of the other list into l1 and return
  }
  while (l2.length > 0) {
    l1.push(l2.shift());
  }

  return l1;
};

let a = [1, 2, 3];
let b = [1, 3, 4];

console.log(mergeTwoLists(a, b));
