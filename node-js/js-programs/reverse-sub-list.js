class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  get_list() {
    let result = "";
    let temp = this;
    while (temp !== null) {
      result += temp.value + " ";
      temp = temp.next;
    }
    return result;
  }
}

const reverse_sub_list = function(head, p, q) {
  // TODO: Write your code here
  if (!head) return head;

  let current = head;
  let first = null;
  let second = null;
  let firstPrev;
  let secondPrev;

  while (current != null && current.next != null) {
    if (current.next.value == p) {
      firstPrev = current;
      first = current.next;
    }
    if (current.value == q) {
      second = current.next;
      current.next = null;
    }
    // if (first !== null && second !== null) {
    //   break;
    // }
    current = current.next;
  }
  if (first === null || second === null) return head;

  console.log(first);
  console.log(second);
  first = reverseList(first);
  firstPrev.next = first;
  let node = first;
  while (node.next != null) {
    node = node.next;
  }
  node.next = second;
  console.log(first);
  return head;
};

const reverseList = function(node) {
  if (node === null) return node;
  let prev = null;
  while (node !== null) {
    let next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }
  return prev;
};

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log(`Nodes of original LinkedList are: ${head.get_list()}`);
console.log(
  `Nodes of reversed LinkedList are: ${reverse_sub_list(head, 2, 4).get_list()}`
);
