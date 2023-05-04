// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "123456789";
  var specialChar = "!@#$%^&*";

  var charLength = prompt("How many characters long would you like your password to be?")

if (
  charLength < "8" &&
  charLength > "128"
) {
  alert("Please choose a character length between 8 and 128.");
}

// changed car to lowercase letters from cap
var includeLowercase = confirm("Would you like to include lowercase letters in you password?");
var includeUppercase = confirm("Would you like to include uppercase letters in you password?");
var includeNumeric = confirm("Would you like to include numbers in you password?");
var includeSpecialchar = confirm("Would you like to include special characters in you password?");

var totalCharacters = "";
var finalPassword = "";
if (
  includeLowercase === false &&
  includeUppercase === false &&
  includeNumeric === false &&
  includeSpecialchar === false &&
  ) {
  alert("Please select atleast one of the selections.");
} else {
  if (includeLowercase){
    totalCharacters += lowerCase
  }
  if (includeUppercase) {
    totalCharacters += upperCase
  }
  if (includeNumeric) {
    totalCharacters += numeric
  }
  if (includeSpecialchar) {
    totalCharacters += specialChar
  }
  for(var i = 0; i < charLength; i++) {
    var randomChar = Math.floor(Math.random() * totalCharacters.length)
    finalPassword += totalCharacters[randomChar]
    //Conditional to check to see if password includes all criteria. If all requirements are met, return final password
  }
  return finalPassword;
} 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
