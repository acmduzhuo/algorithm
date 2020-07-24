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

   inOrderTraverse(curNode = this.root){
       if(!curNode){
           return ;
       }
       var arr = [];
       const inOrderTraverseNode = (node) => {
           if(!node){
               return
           }
           inOrderTraverseNode(node.left);
           arr.push(node.key);
           inOrderTraverseNode(node.right);
       };
       inOrderTraverseNode(curNode);
       return arr;
   }

    postOrderTraverse(curNode = this.root){
       if(!curNode){
           return ;
       }
       var arr = [];
       const postOrderTraverseNode = (node) => {
           if(!node){
               return ;
           }
           postOrderTraverseNode(node.left);
           postOrderTraverseNode(node.right);
           arr.push(node.key);
       };
       postOrderTraverseNode(curNode);
       return arr;
    }

    minNode(node = this.root){
       if(!node.left){
           return node.key;
       }
       return this.minNode(node.left);
    }

    maxNode(node = this.root){
       if(!node.right){
           return node.key;
       }
       return this.maxNode(node.right);
    }

    search(key, curNode = this.root){
       if(! curNode){
           return false;
       }
       if(key === curNode.key){
           return true;
       }
       return this.search(key, key<curNode.key?curNode.left:curNode.right);
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
console.log(tree.preOrderTraverse());//先序遍历
console.log(tree.inOrderTraverse());//中序遍历
console.log(tree.postOrderTraverse());//后序遍历
console.log(tree.minNode());//找最小值
console.log(tree.maxNode());//找最大值
console.log((tree.search(123)));