let words = ["cat", "dog", "horse", "elephant"];
let currentWord;
var dashes = [];

//start game
function startGame(){
    currentWord = words[Math.floor(Math.random() * 4)];
    console.log(currentWord);

    for ( var i = 0; i < currentWord.length; i++ ) {
        dashes.push(' _ ');
    }

    var formattedDashes =  dashes.join(' ');
    
    document.getElementById('dashContainer').innerHTML = formattedDashes;
    
}


startGame()



document.getElementById("test").addEventListener("click",function(){
    alert("JavaScript is Working")
})