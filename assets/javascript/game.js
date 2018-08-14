//Array of available words
const words = ["Patriots", "Bills", "Dolphins", "Jets", "Chiefs", "Chargers", "Raiders", "Broncos", "Steelers", "Ravens", "Bengals", "Browns", "Jaguars", "Titans", "Colts", "Texans", "Eagles", "Cowboys", "Redskins", "Giants", "Rams", "Seahawks", "Cardinals", "Niners", "Vikings", "Lions", "Packers", "Bears", "Saints", "Panthers", "Falcons", "Buccaneers"];

let currentWord;
let dashes = [];

//Computer chooses a random word
function startGame(){
    currentWord = words[Math.floor(Math.random() * 32)];
    console.log(currentWord);

 //Creates dashes depending on length of the word chosen  
    for ( let i = 0; i < currentWord.length; i++ ) {
        dashes.push(' _ ');
    }
    return dashes;
    
    let formattedDashes =  dashes.join(' ');
    document.getElementById('dashContainer').innerHTML = formattedDashes;   
}

//Guessed letter gets Unicode value
    document.addEventListener('keypress', (event) => {
        let codes = event.keyCode;
//Convert a Unicode number into a character
        let characters = String.fromCharCode(codes);
        console.log(characters)
    })

//Start game function
startGame()


//Test Example
document.getElementById("test").addEventListener("click",function(){
    alert("JavaScript is Working")
})