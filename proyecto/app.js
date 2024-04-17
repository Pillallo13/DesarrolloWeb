// Desafio 2 - Sebastian Quintero Jaimes 
const peliculas = require("./peliculas.js");


function run() {


        console.log("Bienvenido al catalogo de peliculas" + "\n" +
                "_____________________________________" + "\n");

        for (let i = 0; i < peliculas.length; i++) {

                console.table("NOMBBRE: " + peliculas[i].name + " ID: " + peliculas[i].id + " PREMIOS: " + peliculas[i].awards + " DURACION: " + peliculas[i].length + " minutos" + " PRECIO: $" + peliculas[i].price + "COP GENERO: " + peliculas[i].genre)

        }
};


run();

