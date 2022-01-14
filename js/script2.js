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

// # Recupero gli elementi in pagina
const displayElement = document.getElementById('display');
const userNumber = document.getElementById('user-num');
const cpuNumber = document.getElementById('cpu-num');
const sommaNumbers = document.getElementById('sum');
const userChoice = document.getElementById('choice');

// # Faccio la domanda all'utente
let scelta = prompt('Scegli pari/dispari').trim();
let numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log(numeroUtente);
console.log(scelta);

// # Genero numero random CPU
let numeroCpu = Math.floor(Math.random() * 5) + 1;
console.log(numeroCpu);

// # Sommo i numeri 
let somma = numeroUtente + numeroCpu;
console.log(somma);

// # Controllo se la somma è pari o dispari
let message = 'Hai vinto!';
if (scelta.value = 'pari' && (somma % 2 === 0)) {
    message;
    console.log('Hai vinto!');
} else if (scelta.value = 'dispari' && (somma % 2 !== 0)) {
    message = 'Ha vinto il PC!';
    console.log('Ha vinto il PC!');
}

// # Stampo in pagina
displayElement.innerHTML = `${message}`; 
userChoice.innerHTML = `Hai scelto: ${scelta}`;
userNumber.innerHTML = `User number: ${numeroUtente}`;
cpuNumber.innerHTML = `CPU number: ${numeroCpu}`;
sommaNumbers.innerHTML = `La somma è: ${somma}`;