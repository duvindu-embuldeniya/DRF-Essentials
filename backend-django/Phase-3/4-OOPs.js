class Parent{
    constructor(_side1, _side2){
        this.side1 = _side1
        this.side2 = _side2
        console.log("Triggered")
    }

    getArea(){
        return this.side1 * this.side2
    }

    set area(value){
        this.side1 = Math.sqrt(value)
        this.side2 = Math.sqrt(value)
    }

    get area(){
        return this.side1 * this.side2
    }

    static meth1(){
        return "Inside Static Method..!"
    }
}



class Child extends Parent{

}



let parent = new Parent(5,6)
// console.log(parent.getArea())
// parent.area = 36
// console.log(parent.area)
// console.log(Parent.meth1())


let child = new Child(5,6)
// console.log(child.getArea())
// child.area = 100
// console.log(child.area)
// console.log(Child.meth1())
