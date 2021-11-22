function add(){
  var input1 = document.getElementById("input1").value;
  var input2 = document.getElementById("input2").value;
  var answer = Number(input1) + Number(input2);
  document.getElementById("OUTPUT").innerHTML=answer
}
function subtract(){
  var input1 = document.getElementById("input1").value;
  var input2 = document.getElementById("input2").value;
  var answer = Number(input1) - Number(input2);
  document.getElementById("OUTPUT").innerHTML=answer
}
function multiply(){
  var input1 = document.getElementById("input1").value;
  var input2 = document.getElementById("input2").value;
  var answer = Number(input1) * Number(input2);
  document.getElementById("OUTPUT").innerHTML=answer
}
function divide(){
  var input1 = document.getElementById("input1").value;
  var input2 = document.getElementById("input2").value;
  var answer = Number(input1) / Number(input2);
  document.getElementById("OUTPUT").innerHTML=answer
}
