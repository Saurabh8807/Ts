const heros : string[] = ["hero1","hero2"]
const heros2:Array<number>=[2,34,5]

type User = {
    name:string,
    age:number,
    isActive?:boolean
}

const user1 = {
    name:"saurabh",
    age:12
}
const allUsers : Array<User> = [user1]
const allUsers2 : User[] =[user1]