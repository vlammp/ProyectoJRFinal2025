console.log(`Funcionando Archivo: Practica_IF`);


//Caso 1
function verificarEdad() {

    let edad = document.getElementById('edad').value;//gi
    let pais = document.getElementById('pais').value;

    console.log(edad)
    console.log(pais)

    //IFELSE
    
    if (edad >= 18) {

        alert(`Eres mayor de edad `)
    } else {
        
        alert(`No eres mayor de edad `)
    }
    
}