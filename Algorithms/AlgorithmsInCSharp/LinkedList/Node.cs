using System;
namespace LinkedList
{
    public class Node
    {
        private int data;
        public Node next;
        public Node()
        {
        }

        public int getData(){
            return this.data;
        }

        public void setData(int data){
            this.data = data;
        }

        public void printData(){
            Console.WriteLine("<" + this.data + ">");
        }
    }
}
