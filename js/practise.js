let clickbtn = document.getElementById("btn");
clickbtn.style.backgroundColor = "red";

document.getElementById("btn").onclick = function () {
  document.getElementById("text").innerHTML =
    document.getElementById("text").innerHTML + "danuka";
  document.getElementById("text").style.color = "red";
  document.getElementById("text").style.border = "2px solid black  ";
};

document.getElementById("btn2").onclick = function () {
  document.getElementById("empty").innerHTML = "lorem bn pisseks hsbsbsbuwsbu";
};
var x = 10;
x = 25;
document.getElementById("btn3").onclick = function () {
  alert(x);
};

document.getElementById("update").onclick = function () {
  var uptext = "";

  uptext = document.getElementById("input").value;

  // alert(uptext);
  document.getElementById("cl").innerHTML= "hello "+uptext;
};

var food= new Array();
 
food[0]="kottu";
food[1]="rice";
// alert(food[0]);
console.log(food)

var tweet = ["good morning","take a coffe","back to  home"]
console.log(tweet);
tweet.push ("good night")
tweet.splice(1,0,"drive car","wash")

console.log(food)
