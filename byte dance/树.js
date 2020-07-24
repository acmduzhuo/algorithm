class Node{
    constructor(key, left=null, right=null) {
        this.key = key;
        this.left = left;
        this.right = right;
    }
}

class Tree {
   constructor(node) {
       this.root = node;
   }

   insert(newNode, node = this.root){
       if(!this.root){
           this.root = newNode;
       } else {
           if(newNode.key < node.key){
               if (node.left === null){
                   node.left = newNode;
               } else {
                   this.insert(newNode, node.left);
               }
           } else {
               if(node.right === null){
                   node.right = newNode;
               } else {
                   this.insert(newNode, node.right);
               }
           }
       }
   }

   preOrderTraverse(curNode = this.root){
       var arr = [];
       if(!curNode){
           return ;
       } else {
           const preOrderTraverseNode = (node) => {
               if(!node){
                   return ;
               }
               arr.push(node.key);
               preOrderTraverseNode(node.left);
               preOrderTraverseNode(node.right);
           };
           preOrderTraverseNode(curNode);
           return arr;
       }
   }
}
const tree = new Tree(new Node(11));
tree.insert(new Node(15));
tree.insert(new Node(7));
tree.insert(new Node(5));
tree.insert(new Node(3));
tree.insert(new Node(9));
tree.insert(new Node(8));
tree.insert(new Node(10));
tree.insert(new Node(13));
tree.insert(new Node(12));
tree.insert(new Node(14));
tree.insert(new Node(20));
tree.insert(new Node(18));
tree.insert(new Node(25));
console.log(tree.preOrderTraverse());