console.log(`Funcionando Archivo:  Practica_Listado_Clientes`);


function exportToExcel() {

    try {
        let table = ContenedorTabla; // Asegúrate de que tu tabla tenga este ID
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
