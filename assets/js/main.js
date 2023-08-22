const userName = prompt('Inserisci il tuo nome');

const userSurname = prompt('Inserisci il tuo cognome');

const userColor = prompt('Qual è il tuo colore preferito?');

let userNumber = prompt('Digita un numero');

let passNumber = Number(userNumber) + 14;

const userPassword = `${userName}${userSurname}${userColor}${passNumber}`;



document.getElementById('password').innerHTML="La tua password è: " +userPassword