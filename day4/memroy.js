//+++*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+**

// memory type : stack and heap
//stack -- premetive data type(always we get a copy of the variable)
// heap -- non premetive data type(always we get refrence and using that refrence we can access the  real variable)

let name ="yogesh"

let nickName =name
nickName="kt"

//console.log(name)
//console.log(nickName)


let details={
    name:"yogesh",
    mail:"yogeshkumarsiani@gmail.com"}
let details2=details    
details2.mail="kt969430@gmail.com"

console.log(details2)
