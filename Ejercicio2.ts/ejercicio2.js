"use strict";
// 1. Definición de la enumeración para los Géneros de Películas.
// Al asignarle un string a cada clave, nos aseguramos de que el valor real a mostrar 
// contenga la ortografía correcta (espacios, tildes) en lugar de un índice numérico.
var GeneroPelicula;
(function (GeneroPelicula) {
    GeneroPelicula["Accion"] = "Acci\u00F3n";
    GeneroPelicula["CienciaFiccion"] = "Ciencia Ficci\u00F3n";
    GeneroPelicula["Drama"] = "Drama";
    GeneroPelicula["Documental"] = "Documental";
    GeneroPelicula["Comedia"] = "Comedia";
})(GeneroPelicula || (GeneroPelicula = {}));
// 2. Definición de la enumeración para los Países de origen.
var PaisPelicula;
(function (PaisPelicula) {
    PaisPelicula["Venezuela"] = "Venezuela";
    PaisPelicula["Japon"] = "Jap\u00F3n";
    PaisPelicula["EstadosUnidos"] = "Estados Unidos";
    PaisPelicula["Espana"] = "Espa\u00F1a";
    PaisPelicula["Mexico"] = "M\u00E9xico";
})(PaisPelicula || (PaisPelicula = {}));
// ==========================================
// LÓGICA PARA MOSTRAR LOS DATOS
// ==========================================
console.log("=== SISTEMA DE CLASIFICACIÓN CINEMATOGRÁFICA ===");
// Mostrar los géneros
console.log("\n Géneros de películas disponibles:");
Object.values(GeneroPelicula).forEach(genero => {
    console.log(` - ${genero}`);
});
// Mostrar los países
console.log("\n Países de origen registrados:");
Object.values(PaisPelicula).forEach(pais => {
    console.log(` - ${pais}`);
});
console.log("\n=== SIMULACIÓN DE REGISTRO DE PELÍCULAS ===");
// Exigimos a TypeScript que 'genero' y 'pais' DEBEN pertenecer a las enumeraciones.
function registrarPelicula(titulo, genero, pais) {
    console.log(` Registro exitoso: La película "${titulo}" (${genero}) proveniente de ${pais} ha sido guardada en el sistema.`);
}
// Hacemos los envíos usando las constantes
registrarPelicula("El Libertador", GeneroPelicula.Drama, PaisPelicula.Venezuela);
registrarPelicula("Godzilla Minus One", GeneroPelicula.CienciaFiccion, PaisPelicula.Japon);
registrarPelicula("Spiderman", GeneroPelicula.Accion, PaisPelicula.EstadosUnidos);
