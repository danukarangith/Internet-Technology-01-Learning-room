 
function calculateGrade(marks) {
    if (marks === 100) {
      return 'A+';
    } else if (marks >= 80 && marks <= 89) {
      return 'A-';
    } else if (marks >= 75 && marks <= 79) {
      return 'A';
    } else if (marks >= 65 && marks <= 74) {
      return 'B';
    } else if (marks >= 55 && marks <= 64) {
      return 'C';
    } else if (marks >= 35 && marks <= 54) {
      return 'S';
    } else {
      return 'F';
    }
  }
   
  
  
  function getResult(marks){
    let results = calculateGrade(marks)
    console.log(results)

  }
  getResult(92)
  getResult(73)
  getResult(78)
  getResult(100)
  getResult(12)
    
  