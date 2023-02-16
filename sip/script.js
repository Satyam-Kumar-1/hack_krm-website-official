document.getElementById("buttonn").addEventListener("click", myfnc)
function myfnc() {
  // Grabs the values from input fields
  var p = document.getElementById("p").value;
  var t =document.getElementById("t").value;
  var roi = document.getElementById("roi").value;
  n=12,
  r=roi/n/100,
  //result=0,
  instalments=n*t
  
  // selects the result element
  
  
  // var result = document.getElementById("result");
  // // Returns the result of the percentage portion amount
  // return (result.textContent = p * Math.pow((1 + r/n), n*t));
  var res=p * Math.pow((1 + r/n), n*t);
  document.getElementById('result').innerHTML=result;

};