$(document).ready(function() {
  //console.log("hello")
  var age = parseInt(prompt("Please enter your age here:"));

  if(age <= 10) {
    $("#ocean").show();
  } else if (age < 15) {
    $("#edge").show();
  } else if (age < 18) {
    $("#vibe").show();
  } else if (age <=20) {
    $("#predult").show();
  }  else if (age >=21) {
    $("#adult").show();
  }  if (age >=9) {
    $("#slide").show();
  }
});
