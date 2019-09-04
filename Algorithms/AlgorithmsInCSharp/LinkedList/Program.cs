using System;

namespace LinkedList
{
    class MainClass
    {
        public static void Main(string[] args)
        {
            SinglyLinkedList myList = new SinglyLinkedList();
            myList.search(10);
            myList.insertFirst(100);
            myList.insertFirst(50);
            myList.insertFirst(99);
            myList.insertFirst(88);
            myList.insertFirst(77);
            myList.insertLast(999000);


            myList.search(77);

            myList.search(99);

            myList.printList();

            myList.deleteFirst();
            myList.printList();
            myList.delete(99);
            myList.printList();
            myList.delete(999000);


            myList.printList();
            Console.ReadLine();
        }
    }
}
