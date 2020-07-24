class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class LinkedList {
    constructor(node) {
        this.head = node;
        this.length = 1;
    }
    get isEmpty(){
        return !this.length;
    }
    getlength(){
        return this.length;
    }
    append(node){
        var lastNode = this.findAsIndex(this.length-1);
        lastNode.next = node;
        this.length++;
        node.next = null;
    }
    insert(index,node){
        var targetNode = this.findAsIndex(index-2);
        node.next = targetNode.next;
        targetNode.next = node;
    }
    remove(index){
        var preNode = this.findAsIndex(index-1);
        var nextNode = this.findAsIndex(index+1);
        preNode.next = nextNode;
    }
    findAsIndex(index){
        if(index>this.length){
            console.log('越界');
            return ;
        }
        if(index === 0){
            return this.head;
        }
        var curNode=this.head;
        while(index&&curNode){
            index--;
            curNode = curNode.next;
        }
        return curNode;
    }

    toString(){
        var curNode = this.head;
        var arr = [];
        while(curNode){
            arr.push(curNode.val);
            curNode = curNode.next;
        }
        return arr;
    }
}
let list = new LinkedList(new Node(1));
console.log(list.isEmpty);
list.append(new Node(2));
console.log(list.toString());
console.log(list.getlength());
list.remove(1);
console.log(list.toString());

