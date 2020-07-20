function LinkedList() {
    function Node(element) {
        this.element = element;
        this.next = null;
    }
    this.head = null;
    this.length = 0;
    if((typeof this.append !== 'function')&&(typeof this.append !== 'string')){
        LinkedList.prototype.append = function(element) {
            var node = new Node(element);
            var current;

            if(this.head == null){
                this.head = node;
            } else {
                current = this.head;
                while(current.next != null){
                    current = current.next;
                }
                current.next = node;
            }
            this.length++;
        };

        LinkedList.prototype.insert = function(position, element){
            var current = this.head;
            var previous;
            var index = 0;
            var node = new Node(element);
            if(position>-1 && this.length){
                if(position === 0){
                    node.next = current;
                    this.head = node;
                } else {
                    while(index++ < position){
                        previous = current;
                        current = current.next;
                    }
                    previous.next = node;
                    node.next = current;
                }
                return true;
            } else {
                return false;
            }
        };

       LinkedList.prototype.removeAt = function(position){
           if(position>-1 && position<this.length){
               var current = this.head;
               var index = 0;
               var previous;

               if(position === 0){
                   this.head = current.next;
               } else {
                   while (index++ < position){
                       previous = current;
                       current = current.next;
                   }
                   previous.next = current.next;
               }
               this.length--;
               return current.element;
           } else {
               return null;
           }
       };

        LinkedList.prototype.remove = function(element){
            var index = this.indexOf(element);
            return this.removeAt(index);
        };

        LinkedList.prototype.indexOf = function(element){
            var current = this.head;
            var index = 0;
            while(current){
                if(current.element === element){
                    return index;
                } else {
                    current = current.next;
                    index++;
                }
            }
            return -1;
        };

        LinkedList.prototype.isEmpty = function(){
            return this.length === 0;
        };
        LinkedList.prototype.toString = function () {
            var string = '';
            var currnet;

            currnet = this.head;
            while(currnet){
                string += currnet.element;
                currnet = currnet.next;
            }
            return string;
        };
        LinkedList.prototype.size = function () {
            return this.length;
        };
        LinkedList.prototype.getHead = function () {
            return this.head.element;
        }
    }
}
var linkedList = new LinkedList();
console.log(linkedList.isEmpty());
linkedList.append('Hello ');
linkedList.append('World!');
console.log(linkedList.toString());
console.log(linkedList.size());
console.log(linkedList.getHead());
linkedList.insert(1, 'the ');
console.log(linkedList.toString());
console.log(linkedList.removeAt(1));
console.log(linkedList.indexOf('Hello '));