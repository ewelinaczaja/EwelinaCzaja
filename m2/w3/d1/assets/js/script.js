var tabella="";
function dati(_nome, _cognome, _anni){
this.nome =_nome;
this.cognome =_cognome;
this.anni =_anni;
}

document.getElementById('add').addEventListener('click',function(){
    let name = document.getElementById('nome').value;
    let surname = document.getElementById('cognome').value;
    let agg = document.getElementById('anni').value;

    creaTabella(name, surname, agg);
});

function creaTabella(newName, newSurname, newAgg){
    let myDati = new dati(newName, newSurname, newAgg);
    tabella = `<tr><td class="px-5">${myDati.nome}&nbsp${myDati.cognome}</td><td class="px-5">${myDati.anni}</td></tr>`;
    document.getElementById("table").innerHTML += tabella;
}
