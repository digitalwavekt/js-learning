// primitive 


// 7 types: string, number, boolean, null, undefined, symbol, bigint

const id=Symbol('123')
const anotherId=Symbol('123')
//console.log(id===anotherId)
// Reference type (non permitive)

// Array , Objects , Functions  

//const bigNumber=100213543213243213n
//console.log(typeof bigNumber)

const heros=['ironman','spiderman','thor','hulk','captain']
const family={
    name:'yogesh',
    age:23
}
let fnction=function(){ 
    console.log("hello world")
    
}

console.log(typeof heros)
console.log(typeof family)
console.log(typeof fnction)
fnction()