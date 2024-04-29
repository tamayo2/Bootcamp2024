const prompt = require('prompt-sync')();

let palabraSecreta = "";
let longitudPalabra = 0;
let letrasAdivinadas = "";
let partesCuerpo = 0;
let letrasJugadas = [];

// Fun
function generarPalabraAleatoria() {
    let palabras = ["ola", "pollito", "murcielago", "universidad", "pereira"];
    return palabras[Math.floor(Math.random() * palabras.length)];
}

function imprimirAhorcado(partesCuerpo) {
    let muñeco = [
        "+----+",
        "|    " + (partesCuerpo >= 1 ? "0" : ""),
        "|    " + (partesCuerpo >= 2 ? "/|\\" : ""),
        "|    " + (partesCuerpo >= 3 ? "|" : ""),
        "|    " + (partesCuerpo >= 4 ? "/ \\" : ""),
        "----"
    ];
    console.log(muñeco.join("\n"));
}

palabraSecreta = generarPalabraAleatoria();
longitudPalabra = palabraSecreta.length;

console.log("JUEGO AHORCADO");
console.log("+----+");
console.log("|" +  "     " + "_ ".repeat(longitudPalabra));
console.log("|");
console.log("|      Letras Jugadas:");
console.log("|");
console.log("-----");

while (partesCuerpo < 6) {
    let letra = prompt("Entre una letra: ").toLowerCase(); 

    if (letrasJugadas.includes(letra)) {
        console.log("¡Ya has jugado esa letra! Intenta con otra.");
         continue; 
    }

    letrasJugadas.push(letra);

    if (palabraSecreta.includes(letra)) {
        letrasAdivinadas += letra;

        let representacionPalabra = "";
        for (let i = 0; i < longitudPalabra; i++) {
            if (letrasAdivinadas.includes(palabraSecreta[i])) {
                representacionPalabra += palabraSecreta[i] + " ";
            } else {
                representacionPalabra += "_ ";
            }
        }

        if (!representacionPalabra.includes("_")) {
            console.log("¡Felicidades! Has adivinado la palabra:", palabraSecreta);
            break;
        } else {
            console.log("JUEGO AHORCADO");
            imprimirAhorcado(partesCuerpo);
            console.log("|      " + representacionPalabra);
            console.log("|");
            console.log(`|      Letras Jugadas: ${letrasJugadas.join(", ")}`);
            console.log("|");
            console.log("-----");
        }
    } else {
        partesCuerpo++;
        console.log("JUEGO AHORCADO");
        imprimirAhorcado(partesCuerpo);
        console.log(`|      ${"_ ".repeat(longitudPalabra)}`);
        console.log("|");
        console.log(`|      Letras Jugadas: ${letrasJugadas.join(", ")}`);
        console.log("|");
        console.log("-----");
    }
}

if (partesCuerpo === 6) {
    console.log("¡Oh no! Te has quedado ahorcado. La palabra era:", palabraSecreta);
}
