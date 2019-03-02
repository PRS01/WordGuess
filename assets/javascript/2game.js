var movies = ["karate kid","jaws","terminator", "toy story", "frozen", "titantic", "harry potter", "forrest gump", "gone with the wind", "lion king", "twilight", "the sound of music"];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//global variables
var wins = 0;
var Counter = 12;
var tries = [];
var dash = "-";
var gameInPlay = true;

window.onload = function () {
   
    var movie = movies[Math.floor(Math.random() * movies.length)];
    movie = movie.toUpperCase();
    var movieLetters = movie.split("");
    console.log(movieLetters);
    function randomMovie() {
        movie = movies[Math.floor(Math.random() * movies.length)];
        movie = movie.toUpperCase();
        movieLetters = movie.split("");
        
        randomWord.textContent = movieLetters.join("");
        console.log(movieLetters);
    };
        function dashWord() {
        var dash = "–";
        var dashes = dash.repeat(movieLetters.length);
        randomWord.textContent = dashes;
        return dashes.split("");
    };
    dashes = dashWord();
    letterNumber.textContent = movieLetters.length;
    document.onkeyup = function (event) {
        var userGuess = event.key.toUpperCase();
        function replaceLetters(movieLetters) {
            for (var i = 0; i < movieLetters.length; i++) {
                if (movieLetters[i] === userGuess) {
                    dashes.splice(i, 1, userGuess);
                    console.log(dashes);
                    randomWord.textContent = dashes.join("");
                }
            };
        };
    
        replaceLetters(movieLetters);
            if (Counter > 0 && !movieLetters.includes(userGuess) && !tries.includes(userGuess) && letters.includes(userGuess.toLowerCase())) {
            Counter--;
            guessCounter.textContent = Counter;
        } else if (Counter === 0) {
            movieLetters.length = 0;
            randomMovie();
            dashes = dashWord();
            Counter = 12;
            guessCounter.textContent = Counter;
            letterNumber.textContent = movieLetters.length;
            guesses.textContent = "";
            tries.length = 0;
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
        if (gameInPlay) {
             if (movieLetters.toString() === dashes.toString()) {
                wins++;
                document.querySelector("#wins").innerHTML = wins;
                afterWin.textContent = "Win! Hit any key to play again.";
                document.querySelector("#pic").innerHTML = '<img src="assets/images/' + movieLetters.join("").toLowerCase() + '.jpg" height="300px" width="225px">';
                gameInPlay = false;
                 }
        } else {
            
            movieLetters.length = 0;
            randomMovie();
            dashes = dashWord();
            Counter = 12;
            guessCounter.textContent = Counter;
            gameInPlay = true;
            letterNumber.textContent = movieLetters.length;
            guesses.textContent = "";
            tries.length = 0;
            afterWin.textContent = "";
            document.querySelector("#pic").innerHTML = '<img src="assets/images/Where.jpg" height=400px; width=400px;>';
            }
    };
};
