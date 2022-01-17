console.log('JS OK!');
/* 
TRACCIA: Pari e Dispari

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

BONUS:
Usiamo il DOM per stampare e chiedere le informazioni all'utente!
*/

// # FUNCTIONS
// # Genero numero random CPU
const numeroCpu = getRandomNumber(1, 5);

function getRandomNumber(min,max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}
console.log(numeroCpu);
console.log(numeroCpu);


// # Recupero gli elementi in pagina
const displayElement = document.getElementById('display');
const userNumber = document.getElementById('user-num');
const cpuNumber = document.getElementById('cpu-num');
const sommaNumbers = document.getElementById('sum');
const userChoice = document.getElementById('choice');

// # Faccio la domanda all'utente
let scelta = prompt('Scegli pari/dispari').toLowerCase().trim();
while (scelta !== 'pari' && scelta !== 'dispari') {
    scelta = prompt('Scegli pari/dispari').toLowerCase().trim();
}

let numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 5'));
while (isNaN(numeroUtente) || (numeroUtente > 5) || (numeroUtente < 1)) {
    numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 5'));
}

console.log(scelta);
console.log(numeroUtente);

// # Sommo i numeri 
const somma = numeroUtente + numeroCpu;
console.log(somma);

// # Controllo se la somma è pari o dispari
function isEven(number) {
    return number % 2 === 0 ? true : false;
}

let message = 'Hai vinto!';
if (isEven(somma) && scelta === 'pari' || (!isEven(somma) && scelta === 'dispari' )) {
    message;
    console.log('Hai vinto!');
} else {
    message = 'Ha vinto il PC, riprova!';
    console.log ('Ha vinto il PC, riprova!')
}

// # Stampo in pagina
displayElement.innerHTML = `${message}`; 
userChoice.innerHTML = `Hai scelto: ${scelta}`;
userNumber.innerHTML = `User number: ${numeroUtente}`;
cpuNumber.innerHTML = `CPU number: ${numeroCpu}`;
sommaNumbers.innerHTML = `La somma è: ${somma}`;