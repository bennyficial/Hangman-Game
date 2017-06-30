
	var wins = 0;
	var guessesLeft = 10;
	var badGuessesSoFar = []; 
	// var userGuess = null;
	var goodGuess = [];
	var lettersGuessed = lettersMatched = '';
	var numLettersMatched = 0;
    
	var words = ["bae", "nochill", "hipster", "memes", "twerk", "dandy"]

	var wordChoice = words[Math.floor
		(Math.random() * words.length)];
	
    var letters = document.getElementById("letters");

 	letters.innerHTML = '<li class="current-word"></li>';
      // console.log(letters);

  	var wordLetter;
      var i;
      for (i = 0; i < wordChoice.length; i++) {
          wordLetter = '<li class="letter letter' + wordChoice.charAt(i).toLowerCase() + '">' + wordChoice.charAt(i).toLowerCase() + '</li>';
      letters.insertAdjacentHTML('beforeend', wordLetter);
          console.log(wordLetter);
      }

      var element3 = document.getElementById("p3");
          element3.innerHTML = wins;

	// 1

	var player = document.onkeyup = function(event){
        var userGuess = event.key.toLowerCase();
        var element1 = document.getElementById("p2");
            element1.innerHTML = userGuess;

	if (wordChoice.indexOf(userGuess) === -1) {
          badGuessesSoFar.push(userGuess);
          guessesLeft--;
          var element2 = document.getElementById("p1");
              element2.innerHTML = guessesLeft;

		  var element1 = document.getElementById("p2");
              element1.innerHTML = badGuessesSoFar;
      		// console.log("nice try");
         
        }

	else {
          console.log("good job")
          if (wordChoice.indexOf(userGuess) > -1) {
              var lettersToShow;
             
              lettersToShow = document.querySelectorAll(".letter" + userGuess.toLowerCase());
              for (var i = 0; i < lettersToShow.length; i++) {
                  lettersToShow[i].classList.add("correct");
                  }
                 
                  for (var j = 0; j < wordChoice.length; j++) {
                      if (wordChoice.charAt(j) === userGuess) {
                          numLettersMatched = numLettersMatched + 1;
                        }
                    }
              }
        }

		// Once you reach 0
		if (guessesLeft <= 0) {
      		console.log("You Lose!!");
      		wordChoice = words[Math.floor(Math.random() * words.length)];
			letters.innerHTML = '<li class="current-word"></li>';
          // console.log(letters);
          for (i = 0; i < wordChoice.length; i++) {
              wordLetter = '<li class="letter letter' + wordChoice.charAt(i).toLowerCase() + '">' + wordChoice.charAt(i).toLowerCase() + '</li>';
              letters.insertAdjacentHTML('beforeend', wordLetter);
              console.log(wordLetter);
          }
			guessesLeft = 10;	
				
			userGuess = badGuessesSoFar;
			badGuessesSoFar = [];
			

		}
}

