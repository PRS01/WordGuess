
  //variables  
//   var moviesQuotes = ["Frankly, my dear, I don't give a damn", "May the Force be with you", "Titanic", "After all this time? Always.", "Life is like a box of chocolates", "To infinity and beyond", "I'll be back", "Wax on, wax off", "Team Edward", "Do or do not. There is no try.", "Do you want to build a snowman?", "Hakuna Matata","You're going to need a bigger boat", "The hills are alive!", "Run Forest Run!"];
  var movieQuotes= ["Frozen", "Star Wars", "Forrest Gump", "Gone with The Window", "The Sound Of Music", "Harry Potter", "Titanic", "Toy Story", "Terminator", "Jaws", "Karate Kid" ] 
  var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var wins = 0;
  var counter = 12;
  var tries = [];
  var dash = "-"
  var gamePlay = ture;

 //load page
 window.onload = function() {
  var quote = movieQuotes[Math.floor(Math.random()* moiveQuotes.length)];
   //make it all uppers
   quote = quote.toUpperCase();
   //make individuals
  var quoteLetters = quote.split()  
  console.log (quoteLetters); 


function randomQuote() {
    quote = movieQuotes[Math.floor(Math.random() * movieQuotes.length)];
    quote = quote.toUpperCase();
    quoteLetters = quote.split("");
    randomQuote.textContent = quoteLetters.join("");
    console.log(quoteLetters);
};

function dashQuote(){
    var dashes=dash.repeat(movieQuotes.length);
    randomQuote.textContent = dashes;
    return dashes.split("");
};

dashes=dashQuote();
letterNumber.textContent = quoteLetters.length;

document.onkeyup=funtion (event) {
   var userGuess = event.key.toUpperCase();

funtion replaceLetters(quoteLetters) {
    for (var i =0; i < quoteLetters.length; i++){
        if(quoteLetters[i]=== userGuess){
            dashes.splice(i, 1, userGuess);
            randomQuote.textContent = dashes.join("");
        }
    };
  };
  replaceLetters(quoteLetters);
  //reduce counter
  if(counter>0 && !quoteLetters.includes(userGuess)&& !tries.includes(userGuess)&& letters.includes(userGuess.toLowerCase())) {
      counter--;
      guessCounter.textContent = counter;
  }
  else if (counter === 0) {
      quoteLetters.length=0;
      randomQuote();
      dashes=dashQuote();
      counter=12;
      guessCounter.textContent=counter;
      lettersNumber.textContent= quoteLetters.length;
      guesses.textContent="";
      tries.length=0;
  };
  function guessList() {
    if (!tries.includes(userGuess) && letters.includes(userGuess.toLowerCase())) {
        tries.push(userGuess);
    };
    var printThis = "";
    for (var i = 0; i < tries.length; i++) {
        printThis += tries[i] + ", ";
    }
    return printThis;
};

document.querySelector("#guesses").innerHTML = guessList();


if (gamePlay) {
    
    if (quoteLetters.toString() === dashes.toString()) {
        wins++;
        document.querySelector("#wins").innerHTML = wins;
       
        afterWin.textContent = "Good job. Hit any key to play again.";
        
        document.querySelector("#pic").innerHTML = '<img src="assets/images/' + quoteLetters.join("").toLowerCase() + '.jpg" height="300px" width="225px">';
        
        gamePlaying = false;
       
    }
   
} else {
    
    quoteLetters.length = 0;
    randomQuote();
    dashes = dashQuote();
    
    Counter = 12;
    guessCounter.textContent = counter;
    
    gamePlaying = true;
  
    letterNumber.textContent = quoteLetters.length;
   
    guesses.textContent = "";
    tries.length = 0;
    afterWin.textContent = "";
    
    document.querySelector("#pic").innerHTML = '<img src="assets/images/Where.jpg" height="300px" width="225px">';
    
   
}
}
}
};





