$(document).ready(function() {
  var age = parseInt(prompt("Please enter your age here:"));

  if(age <= 12) {
    $("#ocean").show();
  }  else if (age <= 17) {
    $("#edge").show();
  }
}
