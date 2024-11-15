
class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList{
    constructor(head = null){
        this.head = head
    }

    append(value){
        const newNode = new Node(value)
        if(this.head === null){
            this.head = newNode
        }
        else{
            let current = this.head
            while(current.next !== null){
                current = current.next
            }
            current.next = newNode
        }
    }

    prepend(value){
        const newNode = new Node(value)
        if(this.head === null){
            this.head = newNode
        }
        else{
            newNode.next = this.head
            this.head = newNode
        }
    }

    size(){
        let count = 0
        let node = this.head
        while(node){
            count++
            node = node.next
        }
        return count
    }

    headLinkList(){
        return this.head.data
    }

    tailLinkList(){
        let node = this.head
        for(let i = 0; i < this.size() - 1; i++){
            node = node.next
        }
        return node
    }

    at(index){
        let node = this.head
        for(let i = 0; i < this.size(); i++){
            if(i == index){
                return node.data
            }
            node = node.next
        }
        return "Not Found"

    }

    pop(){
        let node = this.head
        for(let i = 0; i < this.size() - 2; i++){
            node = node.next
        }
        node.next = null
    }

    contains(value){
        let node = this.head
        for(let i = 0; i < this.size(); i++){
            if(node.data == value){
                return true
            }
            node = node.next
        }
        return false
    }

    find(value){
        let node = this.head
        for(let i = 0; i < this.size(); i++){
            if(node.data == value){
                return i
            }
            node = node.next
        }
        return null
    }

    toString(){

        let text = ""

        let node = this.head
        for(let i = 0; i < this.size(); i++){
            text += `( ${node.data} ) -> `
            if(node.next === null){
                text += "null"
            }
            node = node.next
        }
        return text
    }
}

let list = new LinkedList()

list.append("Apple")
list.append("Mango")
list.append("Orange")
list.append("Grape")
list.append("Carrot")

console.log(list);
console.log(list.size());
console.log(list.headLinkList());
console.log(list.tailLinkList().data);
console.log(list.at(1));
console.log(list.toString());
list.pop()
console.log(list);
console.log(list.contains("Orange"));
console.log(list.find("Orange"));
list.prepend("Cherry")
console.log(list);