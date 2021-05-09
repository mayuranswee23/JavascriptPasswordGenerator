// Assignment code here
var generateBtn = document.querySelector("#generate");

var lowercaseCharacter = "abcdefghijklmnopqrstuvwxyz";
var uppercaseCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberCharacter = "0123456789";
var specialCharacter = "!@#$%^&*()"


//Ask to prepare password
function generatePassword (){
  
  password = alert("Let's create a password!");



// How long is the password
  var promptLength = window.prompt ("How many characters would you like?");

  if (promptLength < 8 || promptLength > 26) {
    // console.log (promptLength);
    alert("Passwords must be bettwen 8 to 26 characters");
    return "";
  }

  // creates lowercase 
  lowercaseCharacter = window.confirm("Would you like lowercase characters in your password?")

  




};




  













// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//console.log (uppercaseCharacter[randomInt]);