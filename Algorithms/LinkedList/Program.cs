using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SinglyLinkedList
{
    class Program
    {
        static void Main(string[] args)
        {
            SinglyLinkedList myList = new SinglyLinkedList();
            myList.insertFirst(100);
            myList.insertFirst(50);
            myList.insertFirst(99);
            myList.insertFirst(88);
            myList.insertFirst(77);
            myList.insertLast(999000);

            myList.displayList();

            myList.deleteFirst();
            myList.displayList();

            myList.delete(999000);

            myList.displayList();
            Console.ReadLine();
        }
    }

    class SinglyLinkedList
    {
        private Node first;

        public Boolean isEmpty()
        {
            return (first == null);
        }

        public void insertFirst(int data)
        {
            Node newNode = new Node();
            newNode.setData(data);
            newNode.next = first;
            first = newNode;
        }

        public Node deleteFirst()
        {
            Node temp = first;
            first = first.next;
            return temp;
        }

        public void displayList()
        {
            Node current = first;
            Console.WriteLine("List (first --> last) ");
            while (current != null)
            {
                current.displayNode();
                current = current.next;
            }
            Console.WriteLine();
        }

        public void insertLast(int data)
        {
            Node current = first;

            while(current.next != null)
            {
                current = current.next;
            }

            Node newNode = new Node();
            newNode.setData(data);
            current.next = newNode;

        }

        //Delete function to delete by data element
        public void delete(int data)
        {
            Node current = first;
            Node del;
            if (current.getData() == data)
            {
                Console.WriteLine("Deleting first element, {0}", data);
                first = current.next;
            }
            else
            {
                while (current.next != null && !isEmpty())
                {
                    if (current.next.getData() == data)
                    {
                        del = current.next;
                        current.next = del.next;
                        Console.WriteLine("Deleting {0}", del.getData());
                        Console.WriteLine();
                        del = null;
                        Console.WriteLine(current.next);
                        break;
                    }
                    current = current.next;
                }
            }
            
        }
    }

    class Node
    {
        private int data;
        public Node next;

        public void displayNode()
        {
            Console.WriteLine("<" + data + ">");
        }

        public void setData(int data)
        {
            this.data = data;
        }

        public int getData()
        {
            return data;
        }
    }

}
