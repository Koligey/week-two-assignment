 function myFunction() {
  var side1 = parseInt(document.getElementById("length1").value);
  var side2 = parseInt(document.getElementById("length2").value);
  var side3 = parseInt(document.getElementById("length3").value);
  if(side1 <=0 || side2<=0 || side3<=0 ){
    alert("INVALID OPERATION");
  }
  else if(side1 + side2 <= side3 || side2 + side3 <=side1 || side1 + side3 <= side2) {
    alert ("NOT A TRIANGLE")
  }
  else if (side1===side2 && side2===side3 && side1===side3){
    alert ("EQUILATERAL TRIANGLE");
  }
  else if(side1 === side2 || side1===side3 || side2===side3 ) {
    alert ("ISOSCELES TRIANGLE");
  }
  else if(side1!==side2 && side2!==side3){
    alert("SCALENE TRIANGLE")
  }


};
