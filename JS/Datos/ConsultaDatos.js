

//la crea array  
//lo -- crea objeto
//kv -- crea key : value 


export let Datos_LiNav = [

    {
        Id: 1,
        Nombre: "Inicio", 
        Detalle: "Proyecto",   
        Url: "Inicio.html",
        Activo: true
    },
    {   Id: 2,
        Nombre: "Calculadora",
        Detalle: "Practica",      
        Url: "/Practica_Calculadora.html",
        Activo: true
    },
    {   Id: 3,
        Nombre: "Listado Clientes", 
        Detalle: "Practica",     
        Url: "/Practica_Listado_Clientes.html",
        Activo: false
    },
    {   Id: 4,
        Nombre: "Tarea Pokemon",   
        Detalle: "Practica",  
        Url: "/Practica_TareaPokemon.html",
        Activo: true
    },
    {   Id: 5,
        Nombre: "Tarea Netflix",    
        Detalle: "Practica", 
        Url: "/Practica_TareaNetflix.html",
        Activo: false
    },
    {   Id: 7,
        Nombre: "API_TareaPokemon",    
        Detalle: "Proyecto", 
        Url: "/API_TareaPokemon.html",
        Activo: false
    },
    {   Id: 8,
        Nombre: "API_Listado_Cliente",    
        Detalle: "Proyecto", 
        Url: "/API_Listado_Clientes.html",
        Activo: false
    },
    {   Id: 9,
        Nombre: "API_VerUsuario",    
        Detalle: "Proyecto", 
        Url: "/API_VerUsuario.html",
        Activo: false
    },
    {   Id: 10,
        Nombre: "API_Contacto",    
        Detalle: "Proyecto", 
        Url: "/API_Contacto.html",
        Activo: false
    },
    {   Id: 11,
        Nombre: "Practica IF",    
        Detalle: "Practica ", 
        Url: "/Practica_IF.html",
        Activo: true
    },
    {   Id: 12,
        Nombre: "Practica CICLO",    
        Detalle: "Practica ", 
        Url: "/Practica_CICLO.html",
        Activo: true
    },
];

export let urlCompleta = window.location.href; // Obtiene la URL completa
export let nombrePagina = window.location.pathname.split("/").pop().replace(".html", ""); // Elimina ".html"




