console.log('Funcionando Archivo: API_VerUsuario');

const Api_Usuarios = "https://randomuser.me/api/";

let Datos_Locales = [];
//Variable para el contenedor
let Contenedor = document.getElementById('IdMostrarUsuario');  
let ContenedorTabla = document.getElementById('ttabla');
let ContenedorModal = document.getElementById('modal-body');
let ContenedorModalID = document.getElementById('modalusuario');
let DatosFiltrados = [];

document.addEventListener('DOMContentLoaded', (e) => {
    ConsultarDatos(); // Se ejecuta primero la consulta de datos
});

//fetchget/fg 
function ConsultarDatos() {
    fetch(Api_Usuarios)
        .then(response => {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            return Promise.reject(new Error(response.statusText));
        })
        .then(result => {
            if (result.results.length > 0) {
                Datos_Locales = result.results[0]; // Se almacena correctamente el usuario
                console.warn(Datos_Locales);
                Mostrar_Usuario(); // Se ejecuta aquí para garantizar que los datos están disponibles
            }
        })
        .catch(error => {
            alert("Error al obtener datos:", error)
           
        });
}



function Filtrar_Datos() {  
    if (!Datos_Locales.name || !Datos_Locales.picture) {
        alert("Datos_Locales no están listos");
        return;
    }else{

        DatosFiltrados=  Datos_Locales
    }
    Mostrar_Usuario()
}

function Mostrar_Usuario() {


    Contenedor.innerHTML = `
        <div class="col-md-4 mt-5 offset-4">
            <div class="card">
                <img class="card-img-top img-fluid" src="${Datos_Locales.picture.large}" alt="Imagen de usuario">
                <div class="card-body">
                    <h4 class="card-title">${Datos_Locales.name.title} ${Datos_Locales.name.first} ${Datos_Locales.name.last}</h4>
                    <button type="button" class="btn btn-primary btn-lg" onclick="Mostrar_modal()" >
                    Ver Detalles
                    </button>
                </div>
            </div>
        </div>
    `;
}


function Mostrar_modal() {
    if (!Datos_Locales.name || !Datos_Locales.picture) {
        console.error("Datos_Locales no están listos");
        return;
    }

    ContenedorModal.innerHTML = `
        
                   <img class="card-img-top img-thumbnail w-25" src="${Datos_Locales.picture.thumbnail}" alt="Imagen de usuario">
                
                    <h4 class="card-title">${Datos_Locales.name.title} ${Datos_Locales.name.first} ${Datos_Locales.name.last}</h4>
                    <p class="card-text">${Datos_Locales.cell}</p>
                     <p class="card-text">${Datos_Locales.email}</p>
                    
                 
              
    `;
    // Mostrar el modal (compatibilidad con Bootstrap 4 y 5)
    let myModal = new bootstrap.Modal(ContenedorModalID, {});
    myModal.show();
}

