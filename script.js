//VARIABILI PER DATI PERSONALI
//Richiesta Nome
var nomeUtente = prompt("Secure Password Generator, please enter your Name:")

//Richiesta Cognome
var cognomeUtente = prompt("Enter your Surname:")

//Richiesta Colore
var colorePref = prompt("enter your favorite color")

//VARIABILI GENERATORE PASSWORD
var title = "Your new password will appear here:"
var passwordGen = nomeUtente + cognomeUtente + colorePref + 19

//OUTPUT VARIABILI IN HTML
//titolo
document.getElementById('finaltitle').innerHTML = title

//password
document.getElementById('finalpass').innerHTML = passwordGen
