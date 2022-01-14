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
let parola = prompt('Inserisci una parola').trim();

// # Creo delle variabili di appoggio
let parolaInversa = '';
let lettera = '';

// # Utilizzo while per creare il controllo della parola

let i = parola.length -1;

while (i >= 0) {
    lettera = parola[i];
    parolaInversa += lettera;
    console.log(lettera);
    i--;
}

console.log(parolaInversa);

// # Validazione
message = `la parola ${parolaInversa}`;

if (parola === parolaInversa) {
    // # Stampo in pagina
    display.innerHTML = `${message} è palindroma`;
    console.log('Bravo! La parola è palindroma!');
} else {
    display.innerHTML = ` ${message} non è palindroma`;
    console.log('Ops! La parola non è palindroma!');
}