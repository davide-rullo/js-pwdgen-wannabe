const userName = prompt('Inserisci il tuo nome');

const userSurname = prompt('Inserisci il tuo cognome');

const userColor = prompt('Qual è il tuo colore preferito?');

const userPassword = `${userName}${userSurname}${userColor}23`;



document.getElementById('password').innerHTML="La tua password è: " +userPassword