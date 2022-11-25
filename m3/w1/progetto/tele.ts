interface Smartphone {
    credito: number;
    numeroChiamate: number;

    ricarica(tariffa:number): number;
    chiamata(minuti:number): number;
    numero404(): number;
    getNumeroChiamate(): number;
    azzeraChiamate(): number;
    
}

class utente_1 implements Smartphone{
    credito: number;
    numeroChiamate: number;

    constructor(_credito: number,_numeroChiamate: number) {
        this.credito=_credito;
        this.numeroChiamate=_numeroChiamate}

ricarica(tariffa:number){return this.credito = this.credito + (tariffa)};
chiamata(minuti:number){this.credito = this.credito - (minuti * 0.20);return this.numeroChiamate += 1};
numero404(){return this.credito};
getNumeroChiamate(){return this.numeroChiamate};
azzeraChiamate(){return this.numeroChiamate = 0};
}

class utente_2 extends utente_1{}
class utente_3 extends utente_1{}

let primo = new utente_1(10, 0);
primo.ricarica(10);
primo.chiamata(5);
console.log("Primo utente");
console.log("------------")
console.log(`Credito residuo:${primo.numero404()}`);
console.log(`Numero chiamate:${primo.getNumeroChiamate()}`);
console.log(`Chiamate azzerate:${primo.azzeraChiamate()}`);

console.log("")
let secondo = new utente_2(15, 1);
secondo.ricarica(10);
secondo.chiamata(5);
console.log("Secondo utente");
console.log("-------------");
console.log(`Credito residuo:${secondo.numero404()}`);
console.log(`Numero chiamate:${secondo.getNumeroChiamate()}`);
console.log(`Chiamate azzerate:${secondo.azzeraChiamate()}`);

console.log("")
let terzo = new utente_3(20, 2);
terzo.ricarica(10);
terzo.chiamata(5);
console.log("Terzo utente");
console.log("-------------");
console.log(`Credito residuo:${terzo.numero404()}`);
console.log(`Numero chiamate:${terzo.getNumeroChiamate()}`);
console.log(`Chiamate azzerate:${terzo.azzeraChiamate()}`);

