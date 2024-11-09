type Card = {
    readonly _id:string,
    // readonly arr?:ReadonlyArray<number>,
    readonly arr?:Array<number>,
    name:string,
    number:number,
    premiumNumber?:number
}

const card :Card = {
    _id :"adg",
    name:"xyz",
    arr:[4,5,4],
    number:43,
}
card.arr?.push(5)

console.log(card.arr)


// card._id="t"

type cardNumber ={
    cardNumber  : number
}

type cardName ={
    cardName :string
}

type cardDetails = cardName & cardNumber & {
    cvv : number
}

const cardDetails : cardDetails = {
    cardName:"ff",
    cardNumber:4,
    cvv:5
}

