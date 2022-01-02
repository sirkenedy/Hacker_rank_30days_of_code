function Solution(){
    //Write your code here
    let stack = [];
    let queue = [];
    this.pushCharacter = ch => stack.push(ch);
    
    this.enqueueCharacter = ch => queue.push(ch)
    
    this.popCharacter = ch =>  stack.pop()
    
    this.dequeueCharacter = ch => queue.shift()
  }