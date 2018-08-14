//Array of available words
const words = ["Patriots", "Bills", "Dolphins", "Jets", "Chiefs", "Chargers", "Raiders", "Broncos", "Steelers", "Ravens", "Bengals", "Browns", "Jaguars", "Titans", "Colts", "Texans", "Eagles", "Cowboys", "Redskins", "Giants", "Rams", "Seahawks", "Cardinals", "Niners", "Vikings", "Lions", "Packers", "Bears", "Saints", "Panthers", "Falcons", "Buccaneers"];

let currentWord;
let dashes = [];
let rightLetter = [];
let wrongLetter = [];

//Computer chooses a random word from the words array. The random choice becomes currentWord
function startGame(){
    currentWord = words[Math.floor(Math.random() * words.length)];

//Test
    console.log(currentWord);

 //Creates underscores depending on length of the currentWord; push underscores to dashes array 
    for ( let i = 0; i < currentWord.length; i++ ) {
        dashes.push(' _ ');
    }
    return dashes;
    
    let formattedDashes =  dashes.join(' ');
    document.getElementById('dashContainer').innerHTML = formattedDashes;  
}

//HTML document waits for key to be pressed; key is assiged Unicode value
    document.addEventListener('keypress', (event) => {
        let codes = event.keyCode;

//Convert a Unicode value into a character
        let characters = String.fromCharCode(codes);
//Test        
        console.log(characters)

//Search currentWord for the users correct guess; push character to rightLetter array
        if(currentWord.indexOf(characters) > -1)
        rightLetter.push(characters);
//Test
        console.log(rightLetter);

//Search currentWord for the users incorrect guess; push character to wrongLetter array
        if(currentWord.indexOf(characters) < 0)
        wrongLetter.push(characters);
//Test        
        console.log(wrongLetter);
    })

//Start game function
startGame()


//Test Example
document.getElementById("test").addEventListener("click",function(){
    alert("JavaScript is Working")
})