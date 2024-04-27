let box = document.getElementById("box");
console.log(box);

console.log(typeof box.innerHTML);

box.innerHTML = "hello world";

box.innerHTML = "<p>dog</p>";
// box.innerHTML = ' <img src="/assest/21a-400x400.jpg" alt="">';

console.log(box.innerHTML);
