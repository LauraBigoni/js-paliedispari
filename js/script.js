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
let parola = prompt('Inserisci una parola');

// # Creo delle variabili di appoggio
let parolaInversa = '';
let lettera = '';

// # Utilizzo while per creare il controllo della parola

let i = parola.length -1;

while (i > 0) {
    lettera = parola[i];
    parolaInversa += lettera;
    console.log(lettera);
    i--;
}

// # Stampo in pagina
// message = `la parola ${parola}`;
// display.innerHTML = `${message} è palindroma`;
// display.innerHTML = ` ${message} non è palindroma`;