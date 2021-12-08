function date() {
  var todayDate = new Date();
  var month = todayDate.getMonth()+1;
  var year = todayDate.getFullYear();
  var aprilMonths = 2021*12 + 4
  var monthsSinceApril = year*12 + month - aprilMonths
  document.getElementById("date").innerHTML=monthsSinceApril;
}
