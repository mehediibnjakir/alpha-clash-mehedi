// f1: hideElementByID
function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hiddem');
}

// function showElementById
function showElementById(elementId)
{
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

// function setBackgroundColorById
function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
// function removeBackgroundColorById
function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove    ('bg-orange-400');
}

// function getARandomAlphabet
function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    return alphabet;
}