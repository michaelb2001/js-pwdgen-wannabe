let userName = prompt("inseririsci il tuo nome : ");
let userSurname = prompt("inseririsci il tuo conome : ");
let userColor = prompt("inserisci il tuo colore preferito : ");
let number = Math.floor(Math.random() * 100);

let pwd = userName + userSurname + userColor + number;

document.getElementById("pwd").innerHTML= pwd;