function continueGame() {
    // step -1: generate a random alphabet
    const alphabet =getARandomAlphabet();
    console.log('Your random alphabet', alphabet);


    // set randomly generated alphabet to the screen (show it)
const currentAlphabetElement =document.getElementById('current-alphabet');
currentAlphabetElement.innerText = alphabet;

    // set background color
setBackgroundColorById(alphabet);
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}