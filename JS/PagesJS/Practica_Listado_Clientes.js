console.log(`Funcionando Archivo:  Practica_Listado_Clientes`);


// Datos locales simulando la API
let Datos_Locales = [
    { id: 1, name: "Juan Pérez", email: "juan.perez@example.com" },
    { id: 2, name: "María Gómez", email: "maria.gomez@example.com" },
    { id: 3, name: "Carlos Rodríguez", email: "carlos.rodriguez@example.com" },
    { id: 4, name: "Ana Fernández", email: "ana.fernandez@example.com" }
];


let DatosFiltrados = []
let contenedor = document.getElementById('tbody');


DatosFiltrados = Datos_Locales

//aela Visualizar al ejecutar la pagina DOM
document.addEventListener('DOMContentLoaded', () => {
    Mostrar_CampoTabla()

});




function Mostrar_CampoTabla() {
    
    let html = ""
    
    DatosFiltrados.forEach(element => {
        
        console.log(element)

        html += `
        
         <tr>
            <td> ${element.id} </td>
            <td> ${element.name} </td>
            <td> ${element.email} </td>
        
        </tr>
        
        
        `

    });

    contenedor.innerHTML = html

}




function exportToExcel() {

    try {
        let table = document.getElementById('ttabla'); // Asegúrate de que tu tabla tenga este ID
        let wb = XLSX.utils.table_to_book(table);
        XLSX.writeFile(wb, "empleados.xlsx");
    } catch (error) {
        alert("Error al exportar a Excel: " + error.message);

    }
       
    }


function exportToPDF() {
    try {
        // Cargar jsPDF desde window
        let { jsPDF } = window.jspdf;
        let doc = new jsPDF();

        // Cargar el plugin autoTable manualmente
        if (typeof doc.autoTable !== "function") {
            alert("jsPDF-AutoTable no está cargado correctamente.");
            return;
        }

        // Obtener la tabla
        let table = document.getElementById("ttabla"); // Asegúrate de que el ID sea correcto
        
        if (!table) {
            alert("No se encontró la tabla.");
            return;
        }

        // Convertir la tabla a PDF
        doc.autoTable({ html: table });

        // Guardar el PDF
        doc.save("empleados.pdf");

    } catch (error) {
        alert("Error al exportar a PDF: " + error.message);
    }
}
