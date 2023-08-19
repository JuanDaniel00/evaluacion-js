// Escriba un programa para simular un campeonato de tenis.
// Primero, debe pedir al usuario que ingrese los nombres de ocho tenistas. A continuación,
// debe pedir los resultados de los partidos juntando los jugadores de dos en dos. El ganador
// de cada partido avanza a la ronda siguiente.
// El programa debe continuar preguntando ganadores de partidos hasta que quede un único
// jugador, que es el campeón del torneo

let jugadores = [];
let ganadores = [];
let cantidad = 8;

for (let i = 0; i < cantidad; i++) {
    jugadores.push(prompt("Ingrese el nombre del jugador " + (i + 1)));
}

for (let i = 0; i < cantidad; i += 2) {
    let jugador1 = jugadores[i];
    let jugador2 = jugadores[i + 1];
    let resultado = prompt(`Ingrese el ganador del partido entre ${jugador1} y ${jugador2}`);
    ganadores.push(resultado);
}

while (ganadores.length > 1) {
    let ganadoresAnteriores = ganadores;
    ganadores = [];
    for (let i = 0; i < ganadoresAnteriores.length; i += 2) {
        let jugador1 = ganadoresAnteriores[i];
        let jugador2 = ganadoresAnteriores[i + 1];
        let resultado = prompt(`Ingrese el ganador del partido entre ${jugador1} y ${jugador2}`);
        ganadores.push(resultado);
    }
}

console.log(`El ganador del torneo es: ${ganadores[0]}`);
