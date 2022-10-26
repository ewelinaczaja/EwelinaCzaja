var btn = document.getElementById("calcola");
var importo;
var max;

btn.addEventListener("click",function(){ 
    importo = document.getElementById("budget").value;
    max = document.getElementById("tetto").value;

    while(importo>=200){
        calcolo= Math.floor((Math.random()*max)+1);
        totale= importo-calcolo;
        document.getElementById("spese").innerHTML+=`<li>Ammontare della spesa: ${calcolo} <br> Nuovo budget aggiornato ${totale} </li>`;
        importo = totale;
}
document.getElementById("stop").innerHTML= `Fermati stai spendendo troppo.`;
});
