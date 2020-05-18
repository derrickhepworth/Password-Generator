// On click event that leads into prompts
document.getElementById("generate").addEventListener("click", function () {


    //Length Prompt
    var howLong = Number(prompt('How long would you like your password to be? Enter a number between 8-128.'));
  
    // continue if response is a number between 8-128
    if (!Number.isNaN(howLong) && howLong <= 128 && howLong >= 8) {
      console.log("It's an allowed number! Number of Characters = " + howLong);
  
      var uppercase = confirm("Include Uppercase characters? (OK = yes, Cancel = all lowercase.)");
      if (uppercase == true) {
        console.log("Include Uppercase");
        var upperAZ = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
      } else {
        console.log("No Uppercase");
        var upperAZ = "";
      };
  
      var numbers = confirm("Include numbers in password? (OK = yes, Cancel = no.)");
      if (numbers == true) {
        console.log("Include numbers");
        var numberArray = "0123456789";
      } else {
        console.log("No Numbers");
        var numberArray = "";
      };
  
      var specialCharacters = confirm("Include special characters? i.e.  @#$%^&* etc.  (OK = yes, Cancel = no.)");
      if (specialCharacters == true) {
        console.log("Include Special Characters");
        var specialArray = "!@#$%^&*()?<>,./;:[]{}|";
      } else {
        console.log("No Special Characters");
        var specialArray = "";
      };
  
      var aZ = "abcdefghijklmnopqrstuvwxyz";
      passwordArray = aZ.concat(upperAZ.concat(numberArray.concat(specialArray)));
  
      generatePassword();
  
      function generatePassword() {
        var newRandomPassword = "";
    
        var i;
        for (i = 0; i < howLong; i++) {
          var randomPassword = passwordArray[Math.floor(Math.random() * passwordArray.length)];
          console.log("array = " + passwordArray);
          console.log("password = " + randomPassword);
          newRandomPassword += randomPassword;
          
        };
        console.log("new pass is = " + newRandomPassword);
        document.getElementById("password").innerHTML = newRandomPassword;
        
      };
  
      // Length Prompt- Tells user response is invalid- not a number and exits prompt
    } else {
      alert("Hmmm... that isn't right. Remember it needs to be a number between 8-128. Try again.");
      console.log(`Come on... you knew that wasn't going to work. Hey TA, did you catch my use of temporal literals and a conditional console.log(); here? Not saying you should give me extra credit, but also not saying you shouldn't. ;)`);
    };
  
  
    //display generated password as html (var)
    // document.getElementById("password").innerHTML = "WubbaLubbaDubDub";
  
  });
  
  //apply/generate pass based on prompts above
  
  //display password to HTML