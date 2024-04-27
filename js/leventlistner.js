document.getElementById('btn').addEventListener('click',()=>{
     alert('add to cart..')
})

// mousehover
document.getElementById('box').addEventListener('mouseover',()=>{
    console.log('hello')
})

// mouseout
document.getElementById('box').addEventListener('mouseout',()=>{
    console.log('world')

})
let box = document.getElementById('box')
document.getElementById('box').addEventListener('mouseover',()=>{
     box.style.backgroundColor='red'
})

document.getElementById('box').addEventListener('mouseout',()=>{
    
    box.style.backgroundColor='black'

})

// keydown event
let user=document.getElementById('user')
document.getElementById('user').addEventListener('keydown',(event)=>{
    console.log('keydown  '+event.key)
    

})

// keyup evet

let userin=document.getElementById('user')
document.getElementById('user').addEventListener('keyup',(event)=>{
    console.log('keyup  '+ event.key)
    

})

document.getElementById('im').addEventListener('submit',function(){
    console.log('form submit')
})

