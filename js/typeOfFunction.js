// type of function

// 1.Named function

function addNumber(num1,num2){
    return num1+num2
}
console.log(addNumber(10,20))

console.log('============================')

// 2.Anonymous function

let multiplyNumbers = function(num1,num2){
    return num1*num2
}
console.log(multiplyNumbers(10,20))

console.log('============================')

// 3.Arrow functions

let subNumbers = (num1,num2)=>  num1-num2
    

console.log(subNumbers(20,10))
console.log()

// 4.constructor function
function Student(name,age,email){
    this.name=name
    this.age=age
    this.email=email
}
let Student1 = new Student("kamal",38)
console.log(Student1)

// 5.callback function
function myFunction(xyz){
    // console.log(number)
    xyz()
}
console.log(myFunction)

let person ={
    name : "kamal",
    age : 40
}
// myFunction (person)

let numbersArray= [1,2,3,4,5]
function SecondFunction(){
    console.log("second function")
}
myFunction(SecondFunction)

// 6.recursive function

function factorial(n){
    if(n==0){
        return 1
    }
    return n * (factorial (n-1))
}
console.log

// 06.Symbol 
let Symbol = Symbol



