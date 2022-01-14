console.log('JS OK!');
/* 
TRACCIA: Palidroma

Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

BONUS:
Usiamo il DOM per stampare e chiedere le informazioni all'utente!
*/

// # Recupero gli elementi in pagina
const displayElement = document.getElementById('display');

// # Faccio la domanda
let word = prompt('Inserisci una parola');

// # Creo delle variabili di appoggio
let parolaInversa = '';

// # Utilizzo while per creare il controllo della parola