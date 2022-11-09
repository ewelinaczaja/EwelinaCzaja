document.getElementById('entra').addEventListener('click',function(e){
    e.preventDefault();
    let utente = document.getElementById('utente').value;
    if(!localStorage.getItem(utente)){
    localStorage.setItem(utente,'');}
})
document.getElementById('delate').addEventListener('click',function(e){
    e.preventDefault();
    let utente = document.getElementById('utente').value;
    if(!localStorage.getItem(utente)){
        localStorage.removeItem(utente);}
})

var utente = localStorage.key(0);
document.getElementById('messaggio').innerHTML += `ciao ${utente}`;