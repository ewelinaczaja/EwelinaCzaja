class Person{
    constructor(_nome, _eta){
    this.nome = _nome;
    this.eta = _eta;
  }
  confronto(altro){
    if (this.eta < altro.eta){
        console.log(`${this.nome} è più giovane di ${altro.nome}`)
    }if(this.eta> altro.eta){
        console.log(`${this.nome} è più vecchio di ${altro.nome}`)
    }
  }
}
let p1 = new Person ("Francesco", 27);
let p2 = new Person ("Mario", 32);
let p3 = new Person ("Claudio", 24);
p1.confronto(p2);
p2.confronto(p3);
p3.confronto(p1);