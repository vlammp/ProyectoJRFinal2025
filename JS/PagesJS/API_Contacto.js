console.log(`Funcionando Archivo: API_Contacto`);

// Función global para enviar el correo, accesible desde onclick
function enviarCorreo() {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let asunto = document.getElementById("asunto").value;
    let comentario = document.getElementById("comentario").value;

    // Validar que los campos no estén vacíos
    if (!nombre || !email || !asunto || !comentario) {
        alert("Todos los campos son obligatorios.");
        return;
    }else{

        alert("Correo enviado con éxito 🚀");
        alert("Limpiando campos")
        document.getElementById("contact-form").reset(); // Limpiar formulario
    }

   
       
  
}