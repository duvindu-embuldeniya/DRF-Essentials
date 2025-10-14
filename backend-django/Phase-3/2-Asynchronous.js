//part-1............................................................................
// bydefault setTimeout and fetch have asynchronous bhaviour





// setTimeout(()=>{
//     console.log("Inside Block1")
// },2000)


// setTimeout(()=>{
//     console.log("Inside Block2")
// },1000)






// fetch('https://fakestoreapi.com/products').then(()=>{
//     console.log("Result Received")
// })

// console.log("Downtown Part..!")











//Part-2.............................................................................
// function wash(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let state = true

//             if(state){
//                 resolve("Washed..!")
//             }
//             else{
//                 reject("Didn't Wash..!")
//             }

//         },1000)
//     })
// }


// function eat(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let state = true

//             if(state){
//                 resolve("Ate..!")
//             }
//             else{
//                 reject("Didn't Ate  ..!")
//             }

//         },1500)
//     })
// }


// function sleep(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let state = false

//             if(state){
//                 resolve("Slept..!")
//             }
//             else{
//                 reject("Didn't Sleep..!")
//             }

//         },2000)
//     })
// }



// async function run(){
//     try{
//         console.log(await wash())
//         console.log(await eat())
//         console.log(await sleep())
//         console.log("All Done")
//     }
//     catch(exception){
//         console.log(exception)
//         console.log("Something Went Wrong..!")
//     }
// }

// run()