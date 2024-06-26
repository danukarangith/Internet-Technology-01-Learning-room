let box = document.getElementById("box");
console.log(box);

console.log(typeof box.innerHTML);

box.innerHTML = "hello world";

box.innerHTML = "<p>dog</p>";
// box.innerHTML = ' <img src="/assest/21a-400x400.jpg" alt="">';

console.log(box.innerHTML);

console.log(box.textContent)
box.textContent='kusal perera'
console.log(box.textContent)

// 4.applying style

let image=document.getElementById('img') ;
image.style.height='100px'


// 5.set Attribute

image.setAttribute('src','/assest/429579098_2140284036307464_8313141474756476804_n.jpg')

// 6.classlist

console.log(box.classList);
box.classList.add('abx')
console.log(box.classList)

box.classList.remove('abx')


// 6.append appendchild

let parentDiv = document.createElement('div')
box.append(parentDiv)

let childDiv = document.createElement('div')
child.setAttribute('attr', 'new')
parentDiv.appendChild(childDiv)

// 7.remove and removechild

parentDiv.removeChild(childDiv)
parentDiv.remove()
