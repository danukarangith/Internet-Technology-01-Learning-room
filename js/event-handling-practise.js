const btn =document.getElementById('btn');

btn.onclick=function(){
    //  console.log("hello");
}
btn.onclick=function(e){
    // console.log(e);
}

btn.addEventListener("click",function(){
    // console.log("hi 1")
})
btn.addEventListener("click",function(){
    // console.log("hi 2")
})
window.addEventListener("offline",function(){
    alert("Your network is offline")
})
window.addEventListener("online",function(){
    alert("your conection is back")
})


// let vs var


// let color = "red";
//  color ="blue";

// function getColor(){
//     let color = "green";
//      color ="yellow"
//      console.log(color)
// }
// getColor();
// console.log(color)

// const user = "danu";

//  function getName(){
//     const user ="kavi"
//     console.log(user)
//  }
//  getName();
//  console.log(user);

//  const username={
//     name : "danuka"
//  }

//  username.name ="kavi"

//  console.log(username.name)

 const school =["danuka"]
  school.push("kavinda")
  school.push("perera")
  school.
  
 
 console.log(school)



