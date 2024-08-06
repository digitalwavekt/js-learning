/*let myDate = new Date()
console.log(myDate)
const myDate1 = myDate.toString()
console.log(myDate1)
const myDate2 = myDate.toDateString()
const myDate3= myDate.toLocaleString()



console.log(myDate1)

console.log(myDate2)

console.log(myDate3)*/

const { Console } = require("console")

//let newDate= new Date(2023 ,0,23,5,3)
//let specialDate = new Date("2023-01-12")
//let specialDate1 = new Date("12-01-2023")


//console.log(newDate)
//console.log(newDate.toLocaleString())
//onsole.log(specialDate)
//console.log(specialDate1)

/*let date= new Date("01/04/2023")
let Timestamp = Date.now()
console.log(Timestamp)
console.log(date.getTime())
let day =Timestamp-date.getTime()
let totalDay= day/864000 
console.log(day)
console.log(totalDay)*/

/*let newDate = new Date()
console.log(newDate)
console.log(newDate.getTime())
console.log(newDate.getDay())
console.log(newDate.getMonth()+1)*/

 console.log(newDate.toLocalstring('default',{
    weekday:'long',
    year:'numeric',
    month:'long',
    day:'numeric'
})
 )
