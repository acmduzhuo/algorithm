function Tree() {
    function Node(element) {
        this.element = element;
        this.next = null;
    }
    this.root = null;
    Tree.prototype.insert = function(key){
        var newNode = new Node(key);

        if(this.root === null){
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    };

    Tree.prototype.insertNode = function (node, newNode) {
        if (newNode.element < node.element) {
            if (node.prev === null) {
                node.prev = newNode;
            } else {
                this.insertNode(node.prev, newNode);
            }
        } else {
            if (node.next === null) {
                node.next = newNode;
            } else {
                this.insertNode(node.next, newNode);
            }
        }
    };

    Tree.prototype.preOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            callback(node.element);
            this.preOrderTraverseNode(node.prev, callback);
            this.preOrderTraverseNode(node.next, callback);
        }
    };
    Tree.prototype.preOrderTraverse =  function(callback) {
        this.preOrderTraverseNode(this.root, callback);
    }
}
let tree = new Tree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(9);
tree.insert(13);
tree.insert(20);
tree.insert(3);
tree.insert(6);
tree.insert(8);
tree.insert(10);
tree.insert(12);
tree.insert(14);
tree.insert(18);
tree.insert(25);
tree.preOrderTraverse((value) => console.log(value));