const btn =document.getElementById('btn');

btn.onclick=function(){
     console.log("hello");
}
btn.onclick=function(e){
    console.log(e);
}

btn.addEventListener("click",function(){
    console.log("hi 1")
})
btn.addEventListener("click",function(){
    console.log("hi 2")
})