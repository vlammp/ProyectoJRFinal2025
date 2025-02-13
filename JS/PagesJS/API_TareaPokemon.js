console.log('Funcionando Archivo: API_TareaPokemon');

const Api_Usuarios = "https://pokeapi.co/api/v2/pokemon/" //Entrar en el objeto results

let Datos_Locales = [];
//Variable para el contenedor
let Contenedor = document.getElementById('IdMostrarPokemon');  
let ContenedorTabla = document.getElementById('ttabla');
let DatosFiltrados = [];


document.addEventListener('DOMContentLoaded', (e) => {
    //ConsultarDatos(); // Se ejecuta primero la consulta de datos
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
                Datos_Locales = result.results; // Se almacena correctamente el usuario
                console.warn(Datos_Locales);
                Filtrar_Datos(); // Se ejecuta aquí para garantizar que los datos están disponibles
            }
        })
        .catch(error => {
            alert(`Error al obtener datos: ${error.message}`);
        });
        
}





function Filtrar_Datos() {    
    // Variables para filtrar
    let inputBusqueda = document.getElementById('IdBusqueda').value.trim().toLowerCase();
        // Validamos si Datos_Locales del API tiene datos
        if (Datos_Locales.length > 0) { //Si es mayor a 0 tiene datos 
    
            // Si hay texto en el input de búsqueda, filtrar los empleados
            if (inputBusqueda.length > 0) { //Si es mayor a 0 tiene datos 
                DatosFiltrados = Datos_Locales.filter(element => 
                    element.name.toLowerCase().includes(inputBusqueda)
                );
            } else {
                DatosFiltrados = Datos_Locales; // Si no hay búsqueda, mostramos todos del API
            }
        }
    
        // Si después del filtrado no hay empleados, mostrar un mensaje en la tabla
        if (DatosFiltrados.length === 0) {
            Contenedor.innerHTML = "<tr><td colspan='3'>No se encontraron datos</td></tr>";
            return;
        }
    
        Mostrar_CamposCard()
       
    }


function Mostrar_CamposCard() {
    let html = ""; // Aquí almacenamos el HTML que se mostrará en la tabla  
     // Construcción del HTML con los empleados filtrados
     DatosFiltrados.forEach(element => {
        html += `   
            <div class="col-md-4 mt-5">
                <div class="card ">
                    <div class="alert alert-primary" role="alert">
                        <strong>Enlace</strong> <a href="${element.url}" class="alert-link">${element.url}</a>
                     </div>
                    
                    <div class="card-body">
                        <h4 class="card-title">${element.name}</h4>
                        
                        <div class="d-flex justify-content-center">
                            <button onclick="" class="btn btn-danger">Ver Detalles</button>
                        </div>
                    </div>
                </div>
            </div>
            `;  
    });

    // Asignar todo el HTML al final
    Contenedor.innerHTML = html;
}