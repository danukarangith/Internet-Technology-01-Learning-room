 
const inputElement = document.getElementById('myInput');

 
inputElement.addEventListener('input', function() {
 
  const inputValue = this.value;

 
  if (!isNaN(inputValue) && inputValue !== '') {


    event.preventDefault();
  
    alert('You entered a number' );
  } else {

    event.preventDefault();
     
    alert('You entered a string');


  }
});
