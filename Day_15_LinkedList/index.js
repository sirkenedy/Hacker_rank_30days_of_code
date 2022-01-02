this.insert=function(head,data){
    //complete this method
    if(!this.head) {
    this.head  = new Node(data)
    this.tail = this.head
    return this.head;
    }
    let newNode = new Node(data);
    this.tail.next = newNode;
    this.tail = newNode
    return this.head   
};