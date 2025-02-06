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

    if (element.activo === true) {

        console.log(element.nombre,element.activo)

    }

});

//Contar Cantidad de elementos de un array 
console.log(personas.length)

//Filtrar por una propiedad 
let buscarnombre = personas.find(x =>x.nombre === "Ana" )

console.log(buscarnombre)

let buscaractivo = personas.find(x =>x.activo === true )

console.log(buscaractivo)

function Filtrar() {
    let valor = document.getElementById('sensitivo').value; //gi
    console.log(valor)
}


function buscarDesdeInput() {
  let input1 = document.getElementById('buscarNombre').value;  //Metio el valor pepe
  let resultado = document.getElementById('resultadoBusqueda');

  //Busca en el arreglo 
  let busqueda = personas.find(x=> x.nombre === input1) //nombre == pepe


  //Aqui le indicamos si el resultado es verdadero o falso 
  if (busqueda) {
    
    resultado.innerHTML = `encontrado a la persona ${busqueda.nombre}`

  } else {
    resultado.innerHTML = `No encontrado a la persona`
  }
}
