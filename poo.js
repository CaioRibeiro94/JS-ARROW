//
//
const objTeste = {
    prop01: 42,
    prop02: 'Verde',
    func01:function(){
        return this.prop01;
     },
     func02: function(){
         return this.prop02;
     }
}
console.log(objTeste.prop01);
console.log(objTeste.prop02);
console.log(objTeste.func01());
console.log(objTeste.func02());

//transformando function em arrow function
//js não consegue referenciar o proprio objeto usando a palavra reservada
//thus -- tenho de usar a referencia proprio objetvo 'ObjTeste1'
const objTeste1 = {
    prop01: 42,
    prop02: 'Verde',
    func01: () => objTeste1.prop01,
    func02: () => objTeste1.prop02
}
console.log(objTeste1.prop01);
console.log(objTeste1.prop02);
console.log(objTeste1.func01());
console.log(objTeste1.func02());

const objCalculo ={
    numero: 2,
    multiplicar: function(num){//funcao JS tradicional
        return this.numero * num;
    },
    newMultiplicar: (num) => objCalculo.numero * num,
    newProduto(num){//nova forma de funcao JS
        return this.numero * num;
    }
}

console.log(objCalculo.numero);
console.log(objCalculo.multiplicar(2));
console.log(objCalculo.newMultiplicar(2));
console.log(objCalculo.newProduto(5));

const objCarro = {
    modelo:'GOLF',
    marca: 'VW',
    informacao: function(){
        return `${this.marca} ${this.modelo}`;
    },
    newInformacao: () => `${objCarro.marca} ${objCarro.modelo}`
    
}
//chamada da funcao informacao
//console.log(objCarro.modelo);
//console.log(objCarro.marca);
console.log(objCarro.informacao());
console.log(objCarro.newInformacao());