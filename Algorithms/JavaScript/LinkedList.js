class Node {
  constructor(element) {
    this.data = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //functions to be implemented
  //add(element)
  //insertAt(element, location)
  //removeFrom(location)
  //removeElement(element)

  //Helper Methods
  //isEmpty
  //size_Of_List
  //PrintList

  add(element) {
    let node = new Node(element);
    if (!this.head) {
      this.head = node;
      console.log(`New list created with ${element}`);
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  insertAt(element, index) {
    if (index > 0 && index >= this.size) return false;
    else {
      let node = new Node(element);
      var curr, prev;
      curr = this.head;
      if (index === 0) {
        node.next = curr;
        this.head = node;
      } else {
        let i = 0;
        while (i < index) {
          prev = curr;
          curr = curr.next;
          i++;
        }
        node.next = curr;
        prev.next = node;
      }
      this.size++;
    }
  }

  remove(element) {
    if (!this.head) {
      console.log("Can't delete from empty list");
      return -1;
    } else {
      let curr = this.head;
      var prev;
      while (curr) {
        if (curr.data == element) {
          prev.next = curr.next;
          this.size--;
          return curr.element;
        }
        prev = curr;
        curr = curr.next;
      }
      console.log("element not found");
      return -1;
    }
  }

  removeFrom(index) {
    if (!this.head) {
      console.log("cant delete from empty list");
      return -1;
    } else if (index > 0 && index >= this.size) {
      console.log("Out of bounds");
      return -1;
    } else {
      let current = this.head;
      var prev;
      let i = 0;
      if (index == 0) {
        this.head = this.head.next;
        return current.element;
      }
      while (i < index) {
        prev = current;
        current = current.next;
        i++;
      }
      prev.next = current.next;
      this.size--;
      return current.element;
    }
  }

  printList() {
    let current = this.head;
    let str = "";
    while (current) {
      str += current.data + " ";
      current = current.next;
    }
    console.log(str);
  }
}

var list = new LinkedList();
list.add(10);
list.add(40);
list.add(30);
list.add(20);
list.insertAt(15, 2);
list.printList();
list.remove(15);
list.printList();
list.removeFrom(3);
list.printList();
