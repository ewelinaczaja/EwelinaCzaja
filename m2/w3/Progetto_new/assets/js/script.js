var nome;
var cognome;
var addBtn;
var elencoHTML;
var errore;
var erroreElenco;
var elenco = [];
var modificato = -1 ; // valore modificato array

window.addEventListener('DOMContentLoaded', init);

function init() {
	nome = document.getElementById('nome');
	cognome = document.getElementById('cognome');
	addBtn = document.getElementById('scrivi');
	elencoHTML = document.getElementById('elenco');
	errore = document.getElementById('errore');
	erroreElenco = document.getElementById('erroreElenco');
	printData();
	eventHandler();
}

function eventHandler() {
	addBtn.addEventListener('click', function () {
		controlla();
	});
}

function printData() {
	fetch('http://localhost:3000/elenco')
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			elenco = data;
			if (elenco.length > 0) {
				errore.innerHTML = '';
				elencoHTML.innerHTML = '';
				elenco.map(function (element, index) {
					elencoHTML.innerHTML += `<li><button type="button" class="btn btn-danger me-1" onClick="elimina(${element.id})">X</button><button type="button" class="btn btn-success m-1" onClick="iniziaModifica(${index})">change</button>${element.nome} ${element.cognome}</li>`;
				});
			} else {
				erroreElenco.innerHTML = 'Nessun elemento presente in elenco';
			}
		});
}

function controlla() {
	if (nome.value != '' && cognome.value != '') {
		var data = {
			nome: nome.value,
			cognome: cognome.value,
		};
		if(modificato != -1) modifica(data) // se esiste chiama la funzione modifica //////////////////////////////////
		else addData(data);
	} else {
		errore.innerHTML = 'Compilare correttamente i campi!';
		return;
	}
}

async function addData(data) {
	let response = await fetch('http://localhost:3000/elenco', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify(data),
	});
	clearForm();
}
 //ELIMINO I DATI ///////////////////////////////////////////////////////////////////////////////////////////////
function elimina(data) {
	if (confirm('Sei sicuro di voler eliminare questo utente?')) {
		eliminaDefinitivo(data)
	} 
}

async function eliminaDefinitivo(data) {
	let response = await fetch('http://localhost:3000/elenco/' + data, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		}
	});
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// MODIFICO I DATI /////////////////////////////////////////////////////////////////////////////////////////////////
function iniziaModifica(index) { 
	nome.value = elenco[index].nome;
	cognome.value = elenco[index].cognome;
	modificato = index;
}

 async function modifica(data) {
	let response = await fetch('http://localhost:3000/elenco/' + elenco[modificato].id, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify(data),
		
	});
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////

function clearForm() {
	nome.value = '';
	cognome.value = '';
}

   