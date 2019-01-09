// const sayHello =  function(){
//   console.log("hello")
// }

// const sayHello = () => {
//   console.log("hello")
// }

//One line function doesn't need brackets
// const sayHello = () => console.log("hello")

//One line returns
// const sayHello = () => "Hello"

//Return Object
// const sayHello = () => ({ msg: "Hello" })

//Single param doesn't need parenthesis
// const sayHello = firstName => console.log(`Hello ${firstName}`)

//Multiple parameters need parenthesis
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`)

const users = ["Nathan", "Matt", "William"];

// const nameLengths = users.map(function(name){
//   return name.length;
// })

//Shorter
// const nameLengths = users.map((name) => {
//   return name.length;
// })

//Shortest
const nameLengths = users.map(name => name.length)

console.log(nameLengths);
