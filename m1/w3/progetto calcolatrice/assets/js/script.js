//MOSTRA 
function tasto(valore) {
    document.getElementById("scrivi").value += valore;


}
//OPERAZIONE
function risultato() {

    var result = eval(document.getElementById("scrivi").value);
    document.getElementById("scrivi").value = result
    //RISULTATO 36
    if (result == 36) {
        document.getElementById("img-container").style.display = "block";
        document.getElementById("title").innerHTML = "Asino che sei!";
    }

}

// BOTTONE CHIUDI
function hideImage() {
    document.getElementById("img-container").style.display = "none";
    document.getElementById("title").innerHTML = "La mia calcolatrice in JS";
}


//CANCELLA INPUT

function cancel() {
    document.getElementById("scrivi").value = "";
}

//BOTTONE ON/OFF

const article = document.querySelector("#content");
const button = document.querySelector("#first");

button.addEventListener("click", readMore);

function readMore() {
    if (article.className == "open") {
        article.className = "";
        button.innerHTML = "ON";
    } else {
        article.className = "open";
        button.innerHTML = "OFF";
    }
}