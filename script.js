// Assignment Code
var numbers = "1234567890";
var hasNumbers = numbers.split("");
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var hasLowercaseLetters = lowercaseLetters.split("");
var upercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var hasUpercaseLetters = upercaseLetters.split("");
var symbols = "!@#$%^&*()_+";
var hasSymbols = symbols.split("");
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var prePassword = [];
  var postPassword = "";

  var passwordLength = prompt("How many characters do you want for your password?\n8-128")

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Your password must be 8-128 characters, Please restart.")
  } else {
    if (confirm("Do you want this password to include numbers?")) {
      Array.prototype.push.apply(prePassword, hasNumbers);
    }
    if (confirm("Do you want this password to include lowercase letters?")) {
      Array.prototype.push.apply(prePassword, hasLowercaseLetters);
    }
    if (confirm("Do you want this password to include upercase letters?")) {
      Array.prototype.push.apply(prePassword, hasUpercaseLetters);
    }
    if (confirm("Do you want this password to include symbols?")) {
      Array.prototype.push.apply(prePassword, hasSymbols);
    }
    if (prePassword.length === 0) {
      alert("You must include atleast one type of character in your password, Please restart.")
    } else {
      for (var i = 0; i < passwordLength; i++) {
        var random = Math.floor(Math.random() * prePassword.length);
        postPassword += prePassword[random]
      }
    }
  }
  document.getElementById("password").innerHTML = postPassword
}


// Add event listener to generate button`
generateBtn.addEventListener("click", writePassword);
