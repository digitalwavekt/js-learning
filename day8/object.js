// singletn 


//constroter method 
const JsUser1=new Object()

// symbol declare
const mySym=Symbol("key11")

// object  literals

const JsUser={
    name:"yogesh",
    age:24,
    [mySym]:"Key11",
    location:"jaipur",
    email:"yogeshkumarsaini619@gmail.com",
    isLogedIn:true
}

//Object.freeze(JsUser)
JsUser.email="kt969430@gmail.com"

console.log(JsUser.name)
console.log(JsUser["email"])
console.log(typeof(JsUser[mySym]))
//console.log(JsUser)

JsUser.greeting = function(){
    console.log("hello js user")
}
JsUser.greetingTwo = function(){
    console.log(`hello js user ,${this.name}`)
}

console.log(JsUser.greeting)
console.log(JsUser.greetingTwo())