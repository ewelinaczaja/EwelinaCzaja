var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var utente_1 = /** @class */ (function () {
    function utente_1(_credito, _numeroChiamate) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    utente_1.prototype.ricarica = function (tariffa) { return this.credito = this.credito + (tariffa); };
    ;
    utente_1.prototype.chiamata = function (minuti) { this.credito = this.credito - (minuti * 0.20); return this.numeroChiamate += 1; };
    ;
    utente_1.prototype.numero404 = function () { return this.credito; };
    ;
    utente_1.prototype.getNumeroChiamate = function () { return this.numeroChiamate; };
    ;
    utente_1.prototype.azzeraChiamate = function () { return this.numeroChiamate = 0; };
    ;
    return utente_1;
}());
var utente_2 = /** @class */ (function (_super) {
    __extends(utente_2, _super);
    function utente_2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return utente_2;
}(utente_1));
var utente_3 = /** @class */ (function (_super) {
    __extends(utente_3, _super);
    function utente_3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return utente_3;
}(utente_1));
var primo = new utente_1(10, 0);
primo.ricarica(10);
primo.chiamata(5);
console.log("Primo utente");
console.log("------------");
console.log("Credito residuo:".concat(primo.numero404()));
console.log("Numero chiamate:".concat(primo.getNumeroChiamate()));
console.log("Chiamate azzerate:".concat(primo.azzeraChiamate()));
console.log("");
var secondo = new utente_2(15, 1);
secondo.ricarica(10);
secondo.chiamata(5);
console.log("Secondo utente");
console.log("-------------");
console.log("Credito residuo:".concat(secondo.numero404()));
console.log("Numero chiamate:".concat(secondo.getNumeroChiamate()));
console.log("Chiamate azzerate:".concat(secondo.azzeraChiamate()));
console.log("");
var terzo = new utente_3(20, 2);
terzo.ricarica(10);
terzo.chiamata(5);
console.log("Terzo utente");
console.log("-------------");
console.log("Credito residuo:".concat(terzo.numero404()));
console.log("Numero chiamate:".concat(terzo.getNumeroChiamate()));
console.log("Chiamate azzerate:".concat(terzo.azzeraChiamate()));
