// Desafio  - Sebastian Quintero Jaimes 

function pelicula(name, id, rating, awards, length, genre) {

        this.name = name;
        this.id = id;
        this.awards = awards;
        this.length = length;
        this.price = 5000;
        this.genre = genre;


}

let peli1 = new pelicula("Sexdrive", 1, 3.2, "    ", 109, "Comedia");
let peli2 = new pelicula("SPIDER-MAN: ACROSS THE SPIDER-VERSE", 2, 4.5, "Golden Trailer Awards - Mejor pelicula animada", 140, "Animación");
let peli3 = new pelicula("Oppenheimer", 3, 4.3, "OSCAR - Mejor actor", 180, "Suspenso");
let peli4 = new pelicula("Poor things", 4, 4.0, "OSCAR - Mejor actriz", 141, "Fantacia");
let peli5 = new pelicula("Puss in boots", 5, 4.0, "Saturn Awards - Mejor pelicula animada", 90, "Animación");
let peli6 = new pelicula("American Psycho", 6, 4.2, "Premio Chlotrudis - Mejor actor", 104, "Comedia");

let peliculas = [peli1, peli2, peli3, peli4, peli5, peli6];


module.exports = peliculas;

