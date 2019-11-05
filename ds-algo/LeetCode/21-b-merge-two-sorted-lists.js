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
    //if(!l1 && !l2) return;
    if(!l1 && l2) return l2;
    if(!l2 && l1) return l1;
    
    let list1 = l1;
    let list2 = l2;
    let mergedList = null;
    
    var insertIntoMerged = function(val){
        let newNode = new ListNode(val);
        if(!mergedList) {
            mergedList = newNode; 
            return;
        }
        let currentNode = mergedList;
        
       while(currentNode.next){
           currentNode = currentNode.next;
       }
        currentNode.next = newNode;
        
        return;
    }
    
    while(list1 && list2){
        if(list1.val <= list2.val){
            insertIntoMerged(list1.val);
            list1 = list1.next;
        }
        else if(list1.val > list2.val){
            insertIntoMerged(list2.val);
            list2=list2.next;
        }
    }
    
    if(list1) {
        while(list1) {
            insertIntoMerged(list1.val);
            list1 = list1.next;
        }
    }
    
    if(list2) {
        while(list2) {
            insertIntoMerged(list2.val);
            list2 = list2.next;
        }
    }
    
    return mergedList;
    
};