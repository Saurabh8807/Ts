function addTwo (num:number):number{
    return num+2
    // console.log("hello")
}

addTwo(2)
const ans : number = addTwo(3)
console.log(ans)

const items = [1,3,4,"iii"]

items.map((item) : string=> `item ${item}`)


const user  = {
    name:"saurabh",
    email:"s@",
    isVarified:true
}

function createUser ({name,email,isVarified}:{name:string,email:string,isVarified:boolean
}):{name:string,email:string,isVarified:boolean}{
    return {name,email,isVarified}
}

console.log(createUser(user))


export{}

