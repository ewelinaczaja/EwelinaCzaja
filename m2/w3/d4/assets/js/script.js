var elenco = [];
var dati = document.getElementById('dati');
window.addEventListener('DOMContentLoaded', init);
function init() {

    printData();

}

function printData() {
    fetch('http://localhost:3000/utenti').then((response) => {
        return response.json();
    }).then((data) => {
        elenco = data;
        elenco.map(function(element) {
dati.innerHTML += `<tr><td class="px-3 border border-dark">${element.name}</td><td class="px-3 border border-dark">${element.username}</td><td class="px-3 border border-dark">${element.email}</td></tr>`;
});
    });
}