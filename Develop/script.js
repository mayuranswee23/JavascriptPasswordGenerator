// Assignment code here
var generateBtn = document.querySelector("#generate");

var lowercaseCharacter = "abcdefghijklmnopqrstuvwxyz";
var uppercaseCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberCharacter = "0123456789";
var specialCharacter = "!@#$%^&*()"

// empty array



//Ask to prepare password
function generatePassword (){
  
  password = alert("Let's create a password!");
  //console.log (generatePassword);
// How long is the password
  var promptLength = window.prompt ("How many characters would you like? Please choose between 8 to 26 characters.");

  if (promptLength < 8 || promptLength > 26) {
    // console.log (promptLength);
    alert("Passwords must be bettwen 8 to 26 characters");
    return "";
  }
  else if (isNaN(promptLength)){
    alert("Please input a number between 8 and 26");
    
  }

  // creates lowercase 
   lowercaseCharacter = window.confirm("Would you like lowercase characters in your password?");
    state.lowercaseCharacter = lowercaseCharacter;
    
  //creates uppercase
  uppercaseCharacter = window.confirm("Would you like uppercase characters in your password?");

  // creates number 
  numberCharacter = window.confirm("Would you like numbers in your password?");

  // creates special characters
  specialCharacter = window.confirm("Would you like special characters in your password?");

  // if no characters are selected
 if (!lowercaseCharacter&&!uppercaseCharacter&&!numberCharacter&&!specialCharacter){
  alert ("You need to have at least one character type");
}







}






  













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


//console.log (uppercaseCharacter[randomInt])