// STRINGA

var comando = "Sto imparando JavaScript";

var maiuscol = comando.toUpperCase();
document.getElementById("maiuscola").innerHTML = maiuscol;

var minuscol = comando.toLowerCase();
document.getElementById("minuscola").innerHTML = minuscol;

var myArray = comando.split("");
document.getElementById("strArray").innerHTML = myArray;

var result1 = comando.substr(14,1);
var result2 = comando.substr(18,1);
var result3 = comando.substr(2,1);
var result4 = comando.substr(1,1);
document.getElementById("estraiCaratteri").innerHTML = result3 + result4 + result1 +result2;

var catena = comando.concat(" JS");
document.getElementById("concatena").innerHTML = catena;

var estratto = comando.substring(5,9);
document.getElementById("estraiStringa").innerHTML = estratto;

//ARRAY

var arrayNomi = ["Giovanni", "Carla", "Piero", "Mirtilla"];
document.getElementById('array').innerHTML += arrayNomi;

//arrayNomi.length("");
//document.getElementById('lunghezza').innerHTML += arrayNomi;


document.getElementById('elemento').innerHTML += arrayNomi[2];
document.getElementById('ultimo').innerHTML += arrayNomi[3];

arrayNomi.splice(2,1, "Massimo");
document.getElementById('modificato').innerHTML += arrayNomi;

//ARRAY ANIMALI

var arrayAnimali = ["coniglio", "cane", "gatto", "criceto"];
document.getElementById('intero').innerHTML += arrayAnimali;

arrayAnimali.push("leone");
document.getElementById('aggiunto').innerHTML += arrayAnimali;

arrayAnimali.pop("leone");
document.getElementById('estratto').innerHTML += arrayAnimali;

//arrayAnimali.includes("coniglio");
//document.getElementById('verifica1').innerHTML += arrayAnimali;

//arrayAnimali.includes("lepre");
//document.getElementById('verifica2').innerHTML += arrayAnimali;