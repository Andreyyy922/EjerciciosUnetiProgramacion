const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

const servidor = http.createServer((peticion, respuesta) => {
    
    if (peticion.url === '/' && peticion.method === 'GET') {
        fs.readFile('vista1.html', 'utf8', (error, contenido) => {
            if (error) {
                respuesta.writeHead(500);
                return respuesta.end('Error en Vista 1');
            }
            respuesta.writeHead(200, { 'Content-Type': 'text/html' });
            respuesta.end(contenido);
        });
    } 
    
    else if (peticion.url === '/interceptar' && peticion.method === 'POST') {
        let cuerpoPeticion = '';

        peticion.on('data', pedazo => {
            cuerpoPeticion += pedazo.toString();
        });

        peticion.on('end', () => {
            // Analizamos los datos del formulario
            const datosProcesados = querystring.parse(cuerpoPeticion);
            
            const animalCapturado = datosProcesados.animal || "No recibido";

            console.log("Tu animal Favorito es:", animalCapturado);

            fs.readFile('vista2.html', 'utf8', (error, contenido) => {
                if (error) {
                    respuesta.writeHead(500);
                    return respuesta.end('Error en Vista 2');
                }

                const htmlFinal = contenido.replace(/{{ANIMAL_AQUI}}/g, animalCapturado);
                
                respuesta.writeHead(200, { 'Content-Type': 'text/html' });
                respuesta.end(htmlFinal); 
            });
        });
    } 
    else {
        respuesta.writeHead(404);
        respuesta.end('No encontrado');
    }
});

servidor.listen(3000, () => {
    console.log('Servidor activo en http://localhost:3000');
});