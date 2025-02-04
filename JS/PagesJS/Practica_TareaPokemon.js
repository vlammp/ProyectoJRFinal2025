// import {nombrePagina,Datos_Pokemon} from '../Datos/ConsultaDatos.js'
console.log(`Funcionando Archivo:  Practica_TareaPokemon`);


//aela
document.addEventListener('DOMContentLoaded', (e) => {
   
    
});



 const Datos_Pokemon = [
    {
      Nombre: "Bulbasaur",
      Imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      Descripcion: "Bulbasaur es un Pokémon tipo Planta/Veneno conocido por la semilla en su espalda, la cual crece conforme evoluciona. Es un Pokémon leal, ideal para entrenadores principiantes, ya que posee una combinación equilibrada de ataques ofensivos y defensivos. Su movimiento característico, Drenadoras, le permite recuperar energía mientras debilita a sus oponentes."
    },
    {
      Nombre: "Ivysaur",
      Imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
      Descripcion: "Ivysaur es la evolución de Bulbasaur, y la planta en su espalda comienza a florecer, acumulando energía solar. Es un Pokémon más fuerte y resistente, capaz de usar poderosos ataques como Rayo Solar. Ivysaur suele ser más agresivo que su preevolución y tiene una gran capacidad de adaptación en combate."
    },
    {
      Nombre: "Venusaur",
      Imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
      Descripcion: "Venusaur es la evolución final de Bulbasaur y es un Pokémon imponente con una gran flor en su espalda. Esta flor absorbe la luz del sol y le otorga energía para realizar ataques devastadores como Rayo Solar. Además, es capaz de liberar esporas que pueden paralizar o dormir a sus rivales, haciéndolo un oponente formidable en batalla."
    },
    {
      Nombre: "Charmander",
      Imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      Descripcion: "Charmander es un Pokémon tipo Fuego con una llama en la punta de su cola, la cual indica su estado de salud y emociones. Es un Pokémon enérgico y amistoso, pero si es desafiado en combate, mostrará su verdadera fuerza con ataques como Ascuas y Lanzallamas. Es una elección popular entre entrenadores que buscan un Pokémon ágil y ofensivo."
    },
    {
      Nombre: "Charmeleon",
      Imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
      Descripcion: "Charmeleon es la evolución de Charmander y ha desarrollado una personalidad más feroz. Su cuerpo es más fuerte, y su llama arde con mayor intensidad cuando está enojado. Puede lanzar potentes llamaradas y es un combatiente agresivo en la batalla, destacando por su rapidez y ataques de fuego intensos."
    },
    {
      Nombre: "Charizard",
      Imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
      Descripcion: "Charizard es la evolución final de Charmander y es un Pokémon tipo Fuego/Volador. Posee grandes alas que le permiten volar a altas velocidades y lanzar potentes llamas desde su boca. Su aliento es lo suficientemente caliente como para derretir rocas y su furia en combate es legendaria. Charizard es uno de los Pokémon más icónicos y poderosos de la franquicia."
    },
    {
      Nombre: "Squirtle",
      Imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      Descripcion: "Squirtle es un Pokémon tipo Agua con una resistente concha en su espalda que lo protege de los ataques enemigos. Es un nadador ágil y puede lanzar potentes chorros de agua con su ataque Pistola Agua. Su personalidad juguetona y leal lo convierten en una excelente opción para entrenadores que buscan un compañero confiable."
    },
    {
      Nombre: "Wartortle",
      Imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
      Descripcion: "Wartortle es la evolución de Squirtle y ha desarrollado orejas y una cola peluda que le ayudan a nadar más rápido. Su caparazón es más duro y resistente, y en combate usa su cola como un indicador de su fuerza. Es un Pokémon que demuestra gran determinación y es capaz de enfrentar oponentes más fuertes con técnicas avanzadas de agua."
    },
    {
      Nombre: "Blastoise",
      Imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
      Descripcion: "Blastoise es la evolución final de Squirtle y se distingue por los poderosos cañones de agua en su caparazón. Puede disparar agua a alta presión con una fuerza devastadora, capaz de perforar acero. Es un Pokémon muy resistente y su estrategia en combate se basa en la combinación de su gran defensa y ataques de agua a larga distancia."
    }
];
