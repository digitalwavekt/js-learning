// Arrays
const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const heros= ["ironman","spiderman","thor","hulk","captain"]

const Arr2= new Array(1,2,3,4,5,6,7,8,9,10)
//console.log(Arr2[2])

// array methods


//Arr2.push(6)

//Arr2.unshift(9)
//Arr2.shift()
//console.log(Arr2)

//console.log(Arr.includes(9))

//console.log(Arr2)


//slice adn splice

/*console.log("A", myArr)
const myn1 = myArr.slice(1,3)
const myn2 = myArr.splice(1,3)

console.log(myn1)
console.log(myn2)
console.log("B",myArr)
console.log("c",myArr)*/

const heros = ["ironman", "spiderman", "thor", "hulk", "captain"]
const dc = ["superman","batman","wonderwoman"]  
//heros.push(dc)
//let totalHeros=heros.concat(dc)

//console.log(totalHeros)

let totalHeros = [...heros,...dc]
//console.log(totalHeros)

const anotherarr= [1,2,3,[4,5,6],7,[6,7,[4,5]]]
let bArr= anotherarr.flat(Infinity)
console.log(bArr)

//console.log(Array.isArray("yogesh"))
//console.log(Array.from("yogesh"))
//console.log(Array.from({name:"yogesh"}))


let A=105
let B=205
let C=405
console.log(Array.of(A,B,C))