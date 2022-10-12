
function succo(mele, arance) {
    var somma = `succo con ${mele} mele e ${arance} arance`;
    return somma;
}

document.getElementById("corretta").innerHTML = succo(4, 5);


document.getElementById("sbagliata").innerHTML = succo(6);



var val3 = 2022;
var val4 = 1999;

sottrazione ( val3, val4);

function sottrazione(valore3, valore4) {
    let differenza = valore3 -valore4;
    stampa(differenza);
}

function stampa(risultato){
    document.getElementById("eta").innerHTML = `Attualmente hai: ${risultato} anni`;
}


calcoloAnno = (eta1) => {
    var Anna = 2022 - eta1;
    return Anna
}
document.getElementById("persona1").innerHTML = `L'anno di nascita di Anna è il ${calcoloAnno(30)}`;

calcoloAnno = (eta2) => {
    var Maria = 2022 - eta2;
    return Maria
}
document.getElementById("persona2").innerHTML = `L'anno di nascita di Maria è il ${calcoloAnno(24)}`;



torta(9,15)
function torta (fetteMela, fetteArancia) {
    function ricetta(){
        document.getElementById("torta").innerHTML =`Torta con ${fetteMela} fette di mele e ${fetteArancia} fette di arancia.`;

    }
    ricetta()
}




var cibo;
var detersivi;
var abiti;
btn = document.getElementById('calcola');

btn.addEventListener('click' , function() {
    cibo = Number(document.getElementById('cibo').value);
    detersivi = Number(document.getElementById('detersivi').value);
    abiti = Number(document.getElementById('abiti').value);
   totaleSpesa();
});

function totaleSpesa() {
let somma = cibo + detersivi + abiti;
document.getElementById("totale").innerHTML += somma;
cancellaForm();
}

function cancellaForm() {
    document.getElementById("cibo").value = "";
    document.getElementById("detersivi").value = "";
    document.getElementById("abiti").value = "";
}