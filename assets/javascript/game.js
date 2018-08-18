  //Array of available words
  const words = ["patriots", "bills", "dolphins", "jets", "chiefs", "chargers", "raiders", "broncos", "steelers", "ravens", "bengals", "browns", "jaguars", "titans", "colts", "texans", "eagles", "cowboys", "redskins", "giants", "rams", "seahawks", "cardinals", "niners", "vikings", "lions", "packers", "bears", "saints", "panthers", "falcons", "buccaneers"];

  let currentWord;
  let dashes = [];
  let rightLetter = [];
  let wrongLetter = [];
  let gameActive = false;

  // Creating variables to hold the number of wins and guesses remaining
  let wins = 0;
  let guesses = 10;

  // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
  function render() {
    document.querySelector('#wins').textContent = wins;
    document.querySelector('#guesses').textContent = guesses;
  }
  render();


  //Click button to start game
  document.getElementById("start").addEventListener("click", function() {
    startGame("")

  })

  function checkWin() {
    if (!gameActive) return;

    if (dashes.indexOf(' _ ') < 0) {
      gameActive = false;
      wins += 1;

   } 
  }

  //Computer chooses a random word from the words array. The random choice becomes currentWord
  function startGame() {
    gameActive = true;
    currentWord = words[Math.floor(Math.random() * words.length)];
    wrongLetter = [];
    rightLetter = [];
    guesses = 10;
    dashes = [];
    //Creates underscores depending on length of the currentWord; push underscores to dashes array
    for (let i = 0; i < currentWord.length; i++) {
      dashes.push(' _ ');
    }

    writeWordDashes(dashes.join(' '))
  }

  function writeWordDashes(str) {
    document.querySelector("#dashContainer").innerHTML = str;
  }


  //HTML document waits for key to be pressed; key is assiged Unicode value (a/A are diff)
  document.addEventListener('keypress', (event) => {
    if (!gameActive) return;
    let codes = event.keyCode;

    //Convert a Unicode value into a character
    let characters = String.fromCharCode(codes);

    //Search currentWord for the users correct guess; push character to rightLetter array
    if (currentWord.indexOf(characters) > -1)
      rightLetter.push(characters);


    //Replace dashes with correctly choosen characters
    dashes[currentWord.indexOf(characters)] = characters;

    //Loop over word and replace dashes
    for (let i = 0; i < currentWord.length; i++) {
      let currentLetter = currentWord[i];
      if (currentLetter === characters) {
        dashes[i] = characters;
      }
    }

    //Write words to dashes
    writeWordDashes(dashes.join(''))


    //Search currentWord for the users incorrect guess; push character to wrongLetter array
    if (currentWord.indexOf(characters) < 0) {
      if (wrongLetter.indexOf(characters) < 0) {
        wrongLetter.push(characters);
        guesses -= 1;
      }
    }
    document.querySelector(".wrong").innerHTML = wrongLetter;
    checkWin();
    render();
  })
