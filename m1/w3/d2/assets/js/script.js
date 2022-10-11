var nome = "Aldo";
let ruolo = "cliente";
const numero = 3.14;
document.getElementById("concatena").innerHTML = nome + "," + ruolo + ","+ numero;


var nome = "Aldo";
var ruolo1 = "cliente";
var numero1 = 3.14;
document.getElementById("concatena2").innerHTML = nome + "," + ruolo1 + ","+ numero1;


var nome3 = "Mario";
document.getElementById("var").innerHTML = nome3;
{
let nome3 = "Carla";
document.getElementById("let").innerHTML = nome3;
}
document.getElementById("final").innerHTML = nome3;


var nome4 = "Mario";
document.getElementById("let2").innerHTML = nome4;
{
let nome4 = "Carla";
document.getElementById("let3").innerHTML = nome4;
document.getElementById("final2").innerHTML = nome4;
}

var numero2 = 15;
document.getElementById("iniziale").innerHTML += numero2;

var risultato = numero2 + numero2;
document.getElementById("valore1").innerHTML += risultato+ "," + ++risultato;

var numero3= 10;
var risultato1 = numero2 - numero3;
document.getElementById("valore2").innerHTML += risultato1 + "," + --risultato1;

var numero4= 3;
var risultato2 = numero2 * numero4;
document.getElementById("valore3").innerHTML += risultato2;

var risultato3 = numero2 / numero4;
document.getElementById("valore4").innerHTML += risultato3;

var frase = "è un numero";
document.getElementById("valore5").innerHTML += numero2 + " " + frase;




