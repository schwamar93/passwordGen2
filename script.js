function generatePassword(){
    var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var numbers = [0,1,2,3,4,5,6,7,8,9];
    var characters = ["#", "!", "$", "%", "&", "*", "+", ",", "-"]
    
    var numCharacter = prompt ("How many characters do you want? Please choose between 8-128.");
    var numbers1 = confirm ("Do you want your password to contain numbers?");
    var uppercase1 = confirm ("Do you want your password to contain uppercase letters?");
    var lowercase1 = confirm ("Do you want your password to contain lowercase letters?");
    var characters1 = confirm ("Do you want special characters in your password?");
    var resultArray = [];
    var userArray = [];
    if (numbers1){
        resultArray = resultArray.concat(numbers);
      }
      if (uppercase1){
        resultArray = resultArray.concat(uppercase);
      }
      if (lowercase1){
        resultArray = resultArray.concat(lowercase);
      }
      if (characters1){
        resultArray = resultArray.concat(characters);
      }
      for (var i = 0; i < numCharacter; i++) {
        userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]);
        }
        console.log(resultArray)
        return userArray.join("") ;
    }
      // Assignment Code, DO NOT EDIT ANTHING  BELOW THIS LINE
      var generateBtn = document.querySelector("#generate");
      function writePassword() {
        var password = generatePassword();
        var passwordText = document.querySelector("#password");
        passwordText.value = password;
      }
      generateBtn.addEventListener("click", writePassword);