console.log(`Funcionando Archivo:  Practica_TareaNetflix`);

// 1- Zona de Declaración de Variables Globales
console.log('Ejercicios Temáticos de Netflix');

// 2- Zona para Llamar Funciones
// Las funciones se ejecutan al hacer clic en los botones del HTML.

// 3- Zona de Funciones

// 1. Saludo de Bienvenida
function BienvenidaNetflix() {
  alert('¡Bienvenido a Netflix!');
}

// 2. Recomendación de Serie
function RecomendarSerie(serie = 'Stranger Things') {
  alert(`Te recomendamos ver "${serie}".`);
}

// 3. Mostrar Perfil del Usuario
function MostrarPerfil(nombre, email) {
  alert(`Perfil de Usuario: ${nombre}\nEmail: ${email}`);
}

// 4. Activar Modo Oscuro (Netflix Night Mode)
function NetflixNightMode() {
  document.body.style.backgroundColor = '#141414';
  document.body.style.color = '#e50914';
}

// 5. Activar Modo Claro (Netflix Day Mode)
function NetflixDayMode() {
    document.body.style.backgroundColor = '#ffffff'; // Fondo blanco
    document.body.style.color = '#000000'; // Texto negro
}

// 6. Calcular Tiempo de Maratón
function CalcularMaraton(episodios, duracion) {
  const tiempoTotal = episodios * duracion;
  alert(`Tiempo total: ${tiempoTotal} minutos.`);
}

// 7. Dividir Episodios en Días
function DividirEpisodios(episodios, dias) {
  const episodiosPorDia = episodios / dias;
  alert(`Episodios por día: ${episodiosPorDia}.`);
}

// 8. Crear Perfil de Usuario
function CrearPerfil() {
  const nombre = document.getElementById('nombreUsuario').value;
  const email = document.getElementById('emailUsuario').value;
  const edad = document.getElementById('edadUsuario').value;

  if (nombre && email && edad) {
    console.log({ nombre, email, edad });
    alert(`Perfil creado:\nNombre: ${nombre}\nEmail: ${email}\nEdad: ${edad}`);
  } else {
    alert('Por favor, completa todos los campos.');
  }
}
