console.log('Hey there')
let calculateButton = document.getElementById('btnCalculate')
console.log(calculateButton)


// class selector

let boxes=document.getElementsByClassName('box')
console.log(calculateButton)

calculateButton.style.backgroundColor='green'
calculateButton.style.color='white'

calculateButton.addEventListener('click',function(){
    alert("hello world")
    
})

//  alert("welcome");

//  tag selectors

let hedings= document.getElementsByTagName("h1")
console.log(hedings)

// querySelector
 let test=document.querySelector('.test')
 console.log(test)

 let box = document.querySelector('.box')
 console.log(box)

//  querySelectorAll

 let b =document.querySelectorAll('.box')
 console.log(b)

 let bb=document.querySelector('#container .box')
 console.log(bb)