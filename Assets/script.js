var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {

  var passwordText = document.querySelector("#password");
  var password = generatePassword()
  passwordText.value = password;

}

function generatePassword(){

  var length = prompt ("Please select character length. \nLength must be between 8 and 124 characters.");
  var lengthCheck = parseInt(length);
  console.log(lengthCheck);

  //  selector for password length
  if (length < 8 || length > 128 || isNaN(length)) {
    alert ("Warning. The selected combination is not valid. Please enter a valid combination")
    return;
  }
 var groupofValids = [];
 var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split("");
 var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz" .split("");
 var specialChar = "*&^%$#@!?><{}" .split("");
 var numberChar = "0123456789" .split("");


 var confirmLowerCase = conf("Would you like your password to include lowercase letters?");
  if (confirmLowerCase === true) {
    for (var i = 0; i < lowerCaseChar.length; i++) {
      groupofValids.push(lowerCaseChar[i]);
    }
  }

 var confirmUpperCase = conf("Would you like your password to include uppercase letters?");
   if (confirmUpperCase === true) {
    for (var i = 0; i < lowerCaseChar.length; i++) {
      groupofValids.push(upperCaseChar[i]);
   }

 var confirmSpecialChar = conf("Would you like you password to include special characters?")
  if (confirmSpecialChar === true) {
     for (var i = 0; i < specialChar.length; i++);
     groupofValids,push(specialChar[i]);
  }

 var confirmNumberChar = conf("Would you like your password to include numbers?")
  if (confirmNumberChar ===true) {
    for (var i = 0; i < numberChar.length; i++)
    groupofValids.push(numberChar[i]);
  }

var random = "";
 for


}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

  
}
