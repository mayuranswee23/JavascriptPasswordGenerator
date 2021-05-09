// Assignment code here
var generateBtn = document.querySelector("#generate");

var lowercaseCharacter = "abcdefghijklmnopqrstuvwxyz";
var uppercaseCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberCharacter = "0123456789";
var specialCharacter = "!@#$%^&*()"

// empty array

var passwordCharacters =[];

// global state
let state = {}

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
   var lowerCase = window.confirm("Would you like lowercase characters in your password?");
    //console.log(lowerCase);
    state.lowerCase = lowerCase;

    if (state.lowerCase){
      passwordCharacters.push(...[...lowercaseCharacter]);
    }

  //creates uppercase
  var upperCase = window.confirm("Would you like uppercase characters in your password?");

  state.upperCase = upperCase;

    if (state.upperCase){
      passwordCharacters.push(...[...uppercaseCharacter]);
    }

  // creates number 
  var numberChar = window.confirm("Would you like numbers in your password?");
  state.numberChar = numberChar;

    if (state.lowerCase){
      passwordCharacters.push(...[...numberCharacter]);
    }
  // creates special characters
  var specialChar = window.confirm("Would you like special characters in your password?");
  state.specialChar = specialChar;

    if (state.specialChar){
      passwordCharacters.push(...[...specialCharacter]);
    }
    //console.log (passwordCharacters)
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