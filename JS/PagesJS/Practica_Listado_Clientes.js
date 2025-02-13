console.log(`Funcionando Archivo:  Practica_Listado_Clientes`);
console.log('Funcionando Archivo: API_Listado_Clientes');

// Datos locales simulando la API
let Datos_Locales = [
    { id: 1, name: "Juan Pérez", email: "juan.perez@example.com" },
    { id: 2, name: "María Gómez", email: "maria.gomez@example.com" },
    { id: 3, name: "Carlos Rodríguez", email: "carlos.rodriguez@example.com" },
    { id: 4, name: "Ana Fernández", email: "ana.fernandez@example.com" }
];

// Variable para el contenedor
let Contenedor = document.getElementById('tbody');  
let ContenedorTabla = document.getElementById('ttabla');
let DatosFiltrados = [];

document.addEventListener('DOMContentLoaded', () => {
});

function ConsultarDatos() {
    Filtrar_Datos()
}

function Filtrar_Datos() {    
    let inputBusqueda = document.getElementById('IdBusqueda').value.trim().toLowerCase();
    
    if (Datos_Locales.length > 0) {
        DatosFiltrados = inputBusqueda.length > 0 
            ? Datos_Locales.filter(element => element.name.toLowerCase().includes(inputBusqueda))
            : Datos_Locales;
    }
    
    if (DatosFiltrados.length === 0) {
        Contenedor.innerHTML = "<tr><td colspan='3'>No se encontraron datos</td></tr>";
        return;
    }

    Mostrar_CamposTabla();
}

function Mostrar_CamposTabla() {
    let html = "";  
    DatosFiltrados.forEach(element => {
        html += `   
            <tr>
                <td>${element.id} </td>
                <td>${element.name}</td>
                <td>${element.email}</td>
            </tr>`;  
    });
    Contenedor.innerHTML = html;
}

function exportToExcel() {
    try {
        let table = ContenedorTabla;
        let wb = XLSX.utils.table_to_book(table);
        XLSX.writeFile(wb, "empleados.xlsx");
    } catch (error) {
        alert("Error al exportar a Excel: " + error.message);
    }
}

function exportToPDF() {
    try {
        let { jsPDF } = window.jspdf;
        let doc = new jsPDF();

        if (typeof doc.autoTable !== "function") {
            alert("jsPDF-AutoTable no está cargado correctamente.");
            return;
        }

        let table = document.getElementById("ttabla");
        if (!table) {
            alert("No se encontró la tabla.");
            return;
        }

        doc.autoTable({ html: table });
        doc.save("empleados.pdf");
    } catch (error) {
        alert("Error al exportar a PDF: " + error.message);
    }
}
