let arr = [10,20,30,40,50,60]



//filter -> list of values
let filtered_arr = arr.filter((item)=>{
    return item < 35
})



//map -> true,false list
let mapped_arr = arr.map((item)=>{
    return item < 35
})



//forEach -> iterate 1 by 1
arr.forEach((item)=>{
    console.log(item)
})



//some -> if one statement is true; then output is true
let consist_one = arr.some((item)=>{
    return item < 35
})



//every -> need all statements to be true; then output is true
let every_items = arr.every((item)=>{
    return item < 35
})



//reduce -> to take the sum of all items (0 = initial)
let total = arr.reduce((item, initial)=>{
    return item+initial
},0)





//sort
// a-b = (-) -> a,b
// a-b = (0) -> a,b
// a-b = (+) -> b.a
let sorted_arr = arr.sort((a,b)=>{
    return a-b
})



//include
let is_include = arr.includes(20)
console.log(is_include)