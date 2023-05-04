// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var charLength = prompt("How many characters long would you like your password to be?")

if (
  charLength < "8" &&
  charLength > "128"
) {
  alert("Please choose a character length between 8 and 128.");
  return generatePassword();
}
// changed car to lowercase letters from cap
var lowercase = prompt("Would you like to include lowercase letters in you password? Yes = Yes & No = No");
var uppercase = prompt("Would you like to include uppercase letters in you password? Yes = Yes & No = No");
var numeric = prompt("Would you like to include numbers in you password? Yes = Yes & No = No");
var specialchar = prompt("Would you like to include special characters in you password? Yes = Yes & No = No");

if (
  lowercase === "Yes",
  uppercase === "Yes",
  numeric === "Yes",
  specialchar === "Yes"
) {
  Math.floor(Math.random() * lowerCase.length, upperCase.length, numeric.length, specialChar.length);
}

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "123456789";
var specialChar = "!@#$%^&*";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
