let arr1 = ['duvindu', 'niduvara', 'embuldeniya', 2002, 'june', 13]
let obj1 = {name:'duvindu', city:'nugegoda', year:2002, age:23}


//Destructuring
let arr2 = [...arr1]
let obj2 = {...obj1}

// console.log(arr2)
// console.log(obj2)


//Rest Parameter
let[a,b,...rest] = arr1
console.log(rest)

let{name:a1, city:a2, ...restt} = obj1
console.log(restt)