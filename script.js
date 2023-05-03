// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var lowercase = "abcdefghijklmnopqrstuvwxyz"

  var result = prompt('Please enter a value bewteen 8 and 128')

  var random = Math.floor(random() * lowercase.length);

  console.log('RANDOM', random, lowercase[random]);
}

// Write password to the #password input
var lowerCase = prompt("Would you like to include lowercase letters in you password? Yes = Yes & No = No");
var upperCase = prompt("Would you like to include uppercase letters in you password? Yes = Yes & No = No");
var numeric = prompt("Would you like to include numbers in you password? Yes = Yes & No = No");
var specialChar = prompt("Would you like to include special characters in you password? Yes = Yes & No = No");

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "123456789";
var specialChar = "!@#$%^&*";
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
