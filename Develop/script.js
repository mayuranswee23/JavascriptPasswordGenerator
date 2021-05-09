// Assignment code here
var generateBtn = document.querySelector("#generate");

var lowercaseCharacter = "abcdefghijklmnopqrstuvwxyz";
var uppercaseCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberCharacter = "0123456789";
var specialCharacter = "!@#$%^&*()"

// empty array

var passwordCharacters =[];
var passwordResult =[];


// global state
let state = {}

//Ask to prepare password
function generatePassword (){
  
  password = alert("Let's create a password!");
  //console.log (generatePassword);
// How long is the password
  var promptLength = window.prompt ("How many characters would you like? Please choose between 8 to 26 characters.");

  if (promptLength < 8 || promptLength > 128) {
    // console.log (promptLength);
    alert("Passwords must be bettwen 8 to 128 characters");
    return "";
  }
  else if (isNaN(promptLength)){
    alert("Please input a number between 8 and 128");
    return "";
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
  if (lowercaseCharacter==false&&uppercaseCharacter==false&&numberCharacter==false&&specialCharacter==false){
  alert ("You need to have at least one character type");
  return "";
}

//generate random password

for (var i = 0; i < promptLength.length; i++){
  var randomPassword = Math.floor(Math.random() * passwordCharacters.length);
  var finalPassword = finalPassword + passwordCharacters[randomPassword];
  console.log (passcode); 
}

return finalPassword; 
};






//};






  













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