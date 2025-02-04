console.log(`Funcionando Archivo: Inicio`);



document.addEventListener('DOMContentLoaded', (e) => {
    
    Mostrar_Testimonios()
    Mostrar_Articulos()
    
});




function Mostrar_Testimonios() {
    let Contenedor_IdFooter = document.getElementById('Testimonios'); //gi ls

     Contenedor_IdFooter.innerHTML
     = `

   <div class="container">
        <p class="h2 mb-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta atque explicabo non iste deserunt, ad odit earum debitis id illum laudantium sapiente aperiam saepe nostrum beatae blanditiis. Assumenda, molestiae quod?  
        </p>
        <p class="h4 lead">- Autor </p>
    </div>
                


`;
    
}

function Mostrar_Articulos() {
    let Contenedor_IdFooter = document.getElementById('Articulos'); //gi ls

     Contenedor_IdFooter.innerHTML
     = `

                <div class="container">

                    <div class="row">

                        <!-- Inicio: Contenedor 1  -->
                        <div class="col-md-6 col-sm-6">
                           <img src="Assets/image2.png" class="w-100" alt="">
                        </div>
                        <!-- Fin: Contenedor 1 -->

                        <!-- Inicio: Contenedor 2  -->
                        <div class="col-md-6 col-sm-6">
                            <h2>Lorem ipsum</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt magnam autem quidem dolor in nostrum ex, illo, animi cumque earum dicta quibusdam optio sapiente reprehenderit tempore aperiam repellendus soluta reiciendis.
                            </p>
                            <a class="btn btn-danger btn-lg" href="#">Read More</a>
                        </div>
                        <!-- Fin: Contenedor  2-->
                    </div>

                </div>

`;
    
}