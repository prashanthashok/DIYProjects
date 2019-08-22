class Node {
    constructor(element){
        this.data = element;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
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

    add(element){

        let node = new Node(element);
        if(!this.head) {
            this.head = node;
            console.log(`New list created with ${element}`);
        } else {
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = node;
        }
        this.size++;
    }

    insertAt(element, index){
        if(index > 0 && index > this.size) return false;
        else{
            let node = new Node(element);
            var curr, prev;
            curr = this.head;
            if(index === 0){
                node.next = curr;
                this.head = node;
            } else {
                let i = 0;
                while(i < index){
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

    remove(element){
        if(!this.head) {
            console.log("Can't delete from empty list");
            return false;
        } else {
            let curr = this.head;
            var prev;
            while(curr){
                if(curr.data == element){
                    
                }
                curr = curr.next;
            }
        }
    }

}