using System;
namespace LinkedList
{
    public class SinglyLinkedList
    {


        private Node first;
        private Node last;


        public SinglyLinkedList()
        {
        }

        public bool isEmpty()
        {
            return first == null;
        }

        private void insertIntoEmptyList(int data)
        {
            first = new Node();
            first.setData(data);
            first.next = null;
            last = first;

        }

        public void insertFirst(int data)
        {
            if (!isEmpty())
            {
                Node newNode = new Node();
                newNode.setData(data);
                newNode.next = first;
                first = newNode;
            }
            else
            {
                insertIntoEmptyList(data);
            }
        }

        public void insertLast(int data)
        {
            if (!isEmpty())
            {
                Node newNode = new Node();
                newNode.setData(data);
                last.next = newNode;
                last = newNode;
            }
            else
            {
                insertIntoEmptyList(data);
            }
        }

        public void search(int data)
        {
            if(!isEmpty()){
                Node current = first;
                while(current != null){
                    if(current.getData() == data){
                        Console.WriteLine("Found it! " + data);
                    }

                    current = current.next;
                }

            }
            else{
                Console.WriteLine("Nothing to search! List is empty :(");
            }

        }

        public void printList()
        {
            Node current = new Node();
            current = first;
            if (!isEmpty())
            {
                Console.WriteLine("List (first --> last) ");
                while (current != null)
                {
                    current.printData();
                    current = current.next;
                }
                Console.WriteLine();

            }
        }

        public void deleteFirst()
        {
            if (!isEmpty())
            {
                Node temp = first;
                first = first.next;
                Console.WriteLine("Deleting first: " + temp.getData());
                Console.WriteLine();
            }

        }

        public void delete(int data){
            Node current = first;
            Node del;
            if (!isEmpty())
            {
                if (current.getData() == data)
                {
                    Console.WriteLine("Deleting first element:" + current.getData());
                    first = first.next;
                }
                else{
                    while(current.next != null){
                         
                        if(current.next.getData() == data){
                            del = current.next;
                            Console.WriteLine("Deleting: " + del.getData());
                            current.next = del.next;
                            del = null;
                            break;
                        }
                        current = current.next;
                    }
                }

            }
        }
    }
       
}
