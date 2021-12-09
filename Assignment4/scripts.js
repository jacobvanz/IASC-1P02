function date() {
  var todayDate = new Date();
  var month = todayDate.getMonth()+1;
  var year = todayDate.getFullYear();
  var aprilMonths = 2021*12 + 4;
  var monthsSinceApril = year*12 + month - aprilMonths;
  document.getElementById("date").innerHTML=monthsSinceApril;
}
function APA() {
  var authorLastName = document.getElementById("Author Last Name").value;
  var authorInitials = document.getElementById("Author Initials").value;
  var yearOfPublication = document.getElementById("Year of publication").value;
  var titleOfWork = document.getElementById("Title of Work").value;
  var titleOfWorkItalics = titleOfWork.italics();
  var publisher = document.getElementById("Publisher").value;
  var doi = document.getElementById("DOI").value;
  if (doi == "DOI If Available") {
    var doi = " "
  }

  document.getElementById("output1").innerHTML=authorLastName + ", " + authorInitials + ". " + "(" + yearOfPublication + "). " + titleOfWorkItalics + ". " + publisher + ". " + doi;

}
function MLA() {
  var authorLastName = document.getElementById("Author Last Name").value;
  var authorFirstName = document.getElementById("Author First Name").value;
  var titleOfWork = document.getElementById("Title of Work").value;
  var titleOfWorkItalics = titleOfWork.italics();
  var publisher = document.getElementById("Publisher").value;
  var yearOfPublication = document.getElementById("Year of publication").value;

  document.getElementById("output1").innerHTML=authorLastName + ", " + authorFirstName + ". " + titleOfWorkItalics + ". " + publisher + ", " + yearOfPublication + ".";

}
