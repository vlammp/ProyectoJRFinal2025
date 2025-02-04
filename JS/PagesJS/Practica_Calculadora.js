
console.log(`Funcionando Archivo: Practica_Calculadora`);

 function enviarDatos() {
    debugger
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;

    //Mostrar
    //Alert , Console log /Inner 
    //cl
    console.log('Mostrar Nombre:',nombre);
    console.log('Mostrar Edad:',edad);
    alert(`Nombre ${nombre} edad ${edad}`)
}

function realizarSuma() {
   console.log("Funcionando realizarSuma")

   let numero1 = document.getElementById('numero1').value;//gi
   let numero2 = document.getElementById('numero2').value;

   console.log(numero1)
   console.log(numero2)
}
