var data =new Date();

const mesi = ['Gennaio' , 'Febbraio' , 'Marzo' , 'Aprile' , 'Maggio' , 'Giugno' , 'Luglio' , 'Agosto' , 'Settembre' , 'Ottobre' , 'Novembre' , 'Dicembre' ];

var gg = data.getDate();
var mm = data.getMonth() + 1 ;
var aaaa = data.getFullYear();
var mese = mesi[data.getMonth()];

document.getElementById('data').innerHTML += `${gg} / ${mese} / ${aaaa}`;
document.getElementById('intera').innerHTML = data;
document.getElementById('giorno').innerHTML += data.getDate();
document.getElementById('mese').innerHTML += mese;
document.getElementById('anno').innerHTML =`Oggi è il ${gg}/${mm}/${aaaa}`;


 