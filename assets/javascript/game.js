//Array of available words
const words = ["patriots", "bills", "dolphins", "jets", "chiefs", "chargers", "raiders", "broncos", "steelers", "ravens", "bengals", "browns", "jaguars", "titans", "colts", "texans", "eagles", "cowboys", "redskins", "giants", "rams", "seahawks", "cardinals", "niners", "vikings", "lions", "packers", "bears", "saints", "panthers", "falcons", "buccaneers"];

let currentWord;
let dashes = [];
let rightLetter = [];
let wrongLetter = [];

//Computer chooses a random word from the words array. The random choice becomes currentWord
function startGame(){
    currentWord = words[Math.floor(Math.random() * words.length)];

//test
console.log(currentWord)

 //Creates underscores depending on length of the currentWord; push underscores to dashes array 
    for ( let i = 0; i < currentWord.length; i++ ) {
        dashes.push(' _ ');
    }
    return dashes;
  
    let formattedDashes =  dashes.join(' ');
    document.getElementByClassName('dashContainer').innerHTML = formattedDashes;  
}

//test
console.log(startGame());

//HTML document waits for key to be pressed; key is assiged Unicode value (a/A are diff)
    document.addEventListener('keypress', (event) => {
        let codes = event.keyCode;
        
//Convert a Unicode value into a character
        let characters = String.fromCharCode(codes);

//Search currentWord for the users correct guess; push character to rightLetter array
        if(currentWord.indexOf(characters) > -1)
        rightLetter.push(characters);

//Replace dashes with correctly choosen characters
        dashes[currentWord.indexOf(characters)] = characters;
        console.log(dashes);

        

//Search currentWord for the users incorrect guess; push character to wrongLetter array
        if(currentWord.indexOf(characters) < 0)
        wrongLetter.push(characters);
//Test        
        console.log(wrongLetter);
    

        document.querySelector(".wrong").innerHTML = wrongLetter;       
    })

//Test Example
//document.getElementById("start").addEventListener("click",function(){
//    alert("Good Luck!")//

