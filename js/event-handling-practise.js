const btn =document.getElementById('btn');

btn.onclick=function(){
     console.log("hello");
}
btn.onclick=function(e){
    console.log(e);
}