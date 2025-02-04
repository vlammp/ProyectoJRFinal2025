console.log(`Funcionando Archivo: Practica_IF`);


//Caso 1
function verificarEdad() {

    let edad = document.getElementById('edad').value;//gi
    let pais = document.getElementById('pais').value;

    console.log(edad)
    console.log(pais)

    //IFELSE
    
    if (edad >= 18) {

        alert(`Eres mayor de edad en ${pais} `)
    } else {
        
        alert(`No eres mayor de edad en ${pais}`)
    }
    
}

function verificarParImpar() {
    let numero3 = document.getElementById('numero3').value;

    let numeroconvertido = parseInt(numero3)

    if (numeroconvertido % 2 === 0) {
        
        alert(" Es par ")
    } else {
        alert(" No es  par ")
    }

    console.log(numeroconvertido)
}
