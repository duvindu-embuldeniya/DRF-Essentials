// Promises are the solution for Callback Hell......................................

//Part-1............................................................................

let runner = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let state = true

        if(state){
            resolve("runner1 success")
        }
        else{
            reject("runnder1 fail")
        }
    },1000)
})


runner.then((accept)=>{
    console.log(accept)
}).catch((exception)=>{
    console.log(exception)
}).finally(()=>{
    console.log("End..!")
})












//Part-2............................................................................

function wash(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let state = true

            if(state){
                resolve("Washed..!")
            }
            else{
                reject("Didn't Wash..!")
            }

        },1000)
    })
}


function eat(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let state = true

            if(state){
                resolve("Ate..!")
            }
            else{
                reject("Didn't Ate  ..!")
            }

        },1500)
    })
}


function sleep(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let state = false

            if(state){
                resolve("Slept..!")
            }
            else{
                reject("Didn't Sleep..!")
            }

        },2000)
    })
}


wash().then((accept)=>{
    console.log(accept)
    return eat()
}).then((accept)=>{
    console.log(accept)
    return sleep()
}).then((accept)=>{
    console.log(accept)
    console.log("All Done..!")
}).catch((exception)=>{
    console.log(exception)
    console.log("Error Occured..!")
}).finally(()=>{
    console.log("End..!")
})