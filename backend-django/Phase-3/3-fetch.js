// https://fakestoreapi.com/products


fetch('https://fakestoreapi.com/products')
.then(result => result.json())
.then(data => console.log(data))



function f1(){
    fetch('https://fakestoreapi.com/products')
    .then(result => result.json())
    .then(data => console.log(data))
}
f1()


async function f2(){
    let result = await fetch('https://fakestoreapi.com/products')
    let data = await result.json()
    console.log(data)
}
f2()



let func1 = ()=>{
    fetch('https://fakestoreapi.com/products')
    .then(result => result.json())
    .then(data => console.log(data))
}
func1()




let func2 = async() =>{
    let result = await fetch('https://fakestoreapi.com/products')
    let data = await result.json()
    console.log(data)
}
func2()



let func3 = async() =>{
    let result = await fetch('https://fakestoreapi.com/products')
    let data = await result.json()

    data.map((item)=>{
        console.log(item.id)
    })
}
func3()