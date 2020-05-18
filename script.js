// On click event that leads into prompts
document.getElementById("generate").addEventListener("click", function () {


    //Length Prompt
    var howLong = Number(prompt('How many characters? Enter a number between 8-128.'));
  
    // continue if response is a number between 8-128
    if (!Number.isNaN(howLong) && howLong <= 128 && howLong >= 8) {
      console.log("It's an allowed number! Number of Characters = " + howLong);

  //uppercase prompt & array
      var uppercase = confirm("Include Uppercase characters? (OK = yes. Cancel = No.)");
      if (uppercase == true) {
        console.log("Include Uppercase");
        var upperAZ = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
      } else {
        console.log("No Uppercase");
        var upperAZ = "";
      };
  
      // numbers prompt and array 
      var numbers = confirm("Include numbers in password? (OK = Yes. Cancel = No.)");
      if (numbers == true) {
        console.log("Include Numbers");
        var numberArray = "0123456789";
      } else {
        console.log("No Numbers");
        var numberArray = "";
      };
  
      // special characters prompt and array 
      var specialCharacters = confirm("Include special characters? (OK = Yes. Cancel = No.)");
      if (specialCharacters == true) {
        console.log("Include Special Characters");
        var specialArray = ` !"#$%&'()*+,-./:;<=>?@[]^_{|}~`;
      } else {
        console.log("No Special Characters");
        var specialArray = "";
      };
  
      // lower case (permanent) array 
      var aZ = "abcdefghijklmnopqrstuvwxyz";

      //concats all 4 arrays (array vars are defined in prompts)
      passwordArray = aZ.concat(upperAZ.concat(numberArray.concat(specialArray)));

      // Password Generator function
      generatePassword();
      function generatePassword() {
        var randomPassword = "";
    
        // iterates and updates password from combined array 
        var i;
        for (i = 0; i < howLong; i++) {
          var randomSelect = passwordArray[Math.floor(Math.random() * passwordArray.length)];
          randomPassword += randomSelect;
        };

        // Displays generated password
        console.log("Your new passwor is " + randomPassword);
        document.getElementById("password").innerHTML = randomPassword;

        
      };
  
      // Length Prompt- Tells user response is invalid and exits prompt
    } else {
      alert("Hmmm... that isn't right. Remember it needs to be a number between 8-128. Try again.");
      console.log(`Come on... you knew that wasn't going to work. `);
    };
  });