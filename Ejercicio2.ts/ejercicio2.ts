
// 1. Definición de la enumeración para los Géneros de Películas.
// Al asignarle un string a cada clave, nos aseguramos de que el valor real a mostrar 
// contenga la ortografía correcta (espacios, tildes) en lugar de un índice numérico.
enum GeneroPelicula {
    Accion = "Acción",
    CienciaFiccion = "Ciencia Ficción",
    Drama = "Drama",
    Documental = "Documental",
    Comedia = "Comedia"
}

// 2. Definición de la enumeración para los Países de origen.
enum PaisPelicula {
    Venezuela = "Venezuela",
    Japon = "Japón",
    EstadosUnidos = "Estados Unidos",
    Espana = "España",
    Mexico = "México"
}

// ==========================================
// LÓGICA PARA MOSTRAR LOS DATOS
// ==========================================

console.log("=== SISTEMA DE CLASIFICACIÓN CINEMATOGRÁFICA ===");

// Mostrar los géneros
console.log("\n🎬 Géneros de películas disponibles:");
// Utilizamos Object.values() SIN COMILLAS para extraer los valores del Enum.
Object.values(GeneroPelicula).forEach(genero => {
    console.log(` - ${genero}`);
});

// Mostrar los países
console.log("\n Países de origen registrados:");

Object.values(PaisPelicula).forEach(pais => {
    console.log(` - ${pais}`);
});

console.log("\n=== SIMULACIÓN DE REGISTRO DE PELÍCULAS ===");

// Creamos una función que simula guardar una película.
// Exigimos a TypeScript que 'genero' y 'pais' DEBEN pertenecer a las enumeraciones.
function registrarPelicula(titulo: string, genero: GeneroPelicula, pais: PaisPelicula) {
    console.log(` Registro exitoso: La película "${titulo}" (${genero}) proveniente de ${pais} ha sido guardada en el sistema.`);
}

// Hacemos los envíos usando las constantes
registrarPelicula("El Libertador", GeneroPelicula.Drama, PaisPelicula.Venezuela);
registrarPelicula("Godzilla Minus One", GeneroPelicula.CienciaFiccion, PaisPelicula.Japon);
registrarPelicula("Spiderman", GeneroPelicula.Accion, PaisPelicula.EstadosUnidos);
