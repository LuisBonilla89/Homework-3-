//Asignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var passLength = prompt(
    "Please select character length. \nLength must be between 8 and 124 characters."
  );
  var lengthConfirmation = parseInt(passLength);

  //  selector for password length

  if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    alert(
      "Warning. The selected combination is not valid. Please enter a valid combination"
    );
    return;
  }

  var groupOfValids = [];
  var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz".split("");
  var numberChar = "0123456789".split("");
  var specialChar = "*&^%$#@!?><{}".split("");

  var confirmLowerCase = confirm(
    "Would you like your password to include lowercase letters?"
  );
  if (confirmLowerCase) {
    for (var i = 0; i < lowerCaseChar.length; i++) {
      groupOfValids.push(lowerCaseChar[i]);
    }
  }

  var confirmUpperCase = confirm(
    "Would you like your password to include uppercase letters?"
  );
  if (confirmUpperCase) {
    for (var i = 0; i < upperCaseChar.length; i++) {
      groupOfValids.push(upperCaseChar[i]);
    }
  }
  var confirmSpecialChar = confirm(
    "Would you like you password to include special characters?"
  );
  if (confirmSpecialChar) {
    for (var i = 0; i < specialChar.length; i++) {
      groupOfValids.push(specialChar[i]);
    }
  }

  var confirmNumberChar = confirm(
    "Would you like your password to include numbers?"
  );
  if (confirmNumberChar) {
    for (var i = 0; i < numberChar.length; i++) {
      groupOfValids.push(numberChar[i]);
    }
  }

  var randomPassword = "";
  for (var i = 0; i < lengthConfirmation; i++) {
    groupOfValids[Math.floor(Math.random() * groupOfValids.length)];
    randomPassword +=
      groupOfValids[Math.floor(Math.random() * groupOfValids.length)];
  }
  return randomPassword;
}

generateBtn.addEventListener("click", writePassword);
