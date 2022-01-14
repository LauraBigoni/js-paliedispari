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

// # Faccio la domanda all'utente
let numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log(numeroUtente);

// # Genero numero random CPU
let numeroCpu = Math.floor(Math.random() * 5) + 1;
console.log(numeroCpu);