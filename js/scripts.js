$(document).ready(function () {
  var choice = prompt("Which animal would you like to learn about? Type the animal name in the box. Your choices are: 'Turtle', 'Snake', 'Insect'.");


  if (choice === "Turtle") {
    $("#turtle").show();
  } else if (choice === "Snake") {
    $("#snake").show();
  } else if (choice === "Insect") {
    $("#insect").show();
  } else {
    alert("You chose none of the options, please reload this page and try again.");
  }
});
