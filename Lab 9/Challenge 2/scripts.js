var age = prompt("What is your age?");
var todayDate = new Date();
var year = todayDate.getFullYear();
var userBirthYear = year - age;
document.write(userBirthYear)
