console.log(`Funcionando Archivo: Practica_CICLO`);
let personas = [
    { nombre: "Juan", edad: 25, activo: true },//0
    { nombre: "Ana", edad: 17, activo: false },//1
    { nombre: "Carlos", edad: 30, activo: true },//2
    { nombre: "Laura", edad: 16, activo: true },//3
    { nombre: "Pedro", edad: 40, activo: false }//4


];

let Clientes = [
    { nombre: "Juan", edad: 25, activo: true },//0
    { nombre: "Ana", edad: 17, activo: false },//1
    { nombre: "Carlos", edad: 30, activo: true },//2
    { nombre: "Laura", edad: 16, activo: true },//3
    { nombre: "Pedro", edad: 40, activo: false }//4


];

console.log(personas[4].nombre)

console.log(personas[1].nombre)
//array [x]
//objeto .

//bucles o ciclos 

//Foreach

// array quitelo y coloque su array :) 
//element serian las posiciones 0 1,2
personas.forEach(element => {

    console.log(element)

});

Clientes.forEach(element => {

    console.log(element.nombre,element.activo)

});