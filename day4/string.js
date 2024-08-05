const name="yogesh"
const repoCount="100"

//console.log(name+repoCount + "yogesh")  // out dated way

console.log(`hello my name is ${name} and my repo count is ${repoCount}. I am learning js`)

const myName = new String("yogesh")

/*console.log(myName[0])
console.log(myName.__proto__)

console.log(myName.length)
console.log(myName.toUpperCase())

console.log(myName.charAt(2)) 
console.log(myName.indexOf("g"))*/

//const firstName=myName.substring(0,3)
const firstName=myName.substring(-6,3)
console.log(firstName)

const spaceString  ="        yogesh        "
console.log(spaceString)
console.log(spaceString.trim())

const url="https://github.com/yogeshkumar%20saini619"
console.log(url.replace('%20','-'))

const url1="https:-github.com-yogeshkumar-saini619"
console.log(url1.split('-'))