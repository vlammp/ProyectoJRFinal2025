console.log('Archivo: Footer');
//aela
document.addEventListener('DOMContentLoaded', (e) => {
    
    Mostrar_Footer()
    
});

function Mostrar_Footer() {
    let Contenedor_IdFooter = document.getElementById('IdFooter'); //gi ls

     Contenedor_IdFooter.innerHTML
     = `

    <!-- Inicio: footer-informacion    -->
        <div class="container">
            <div class="row">
                <!-- Inicio: Contenedor 1 5 columnas  -->

                <div class="col-md-5 col-sm-6">
                    <!-- Fin: Contenedor 1 -->
                    <p class="text-muted"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quos
                        dolorum possimus facere laborum! Sapiente ad veritatis, laudantium itaque distinctio
                        necessitatibus vel molestias, omnis incidunt dolore in impedit sint totam?</p>
                </div>
                <!-- Fin: footer-mensaje -->

                <!-- Inicio: Contenedor 2 5 columnas  -->

                <div class="col-md-5 col-sm-6">

                    <!-- Fin: Contenedor 2 -->

                </div>
                <!-- Inicio: Contenedor 3 2 columnas  -->
                <div class="col-md-2 col-sm-6 iconos">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-youtube"></i>
                    <!-- Fin: Contenedor 3 -->
                </div>

            </div>
            <!-- Inicio: Contenedor 1 12 columnas  -->
            <div class="col-md-12 ">
                <p class="text-muted"> Copyright @2024 VLA| Front L-M</p>
            </div>
            <!-- Fin: footer-mensaje -->

        </div>
`;
    
}