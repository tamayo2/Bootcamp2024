function makeSpaces(counter, limit) {
    if (counter < limit) { // Comprueba si el contador es menor que el límite proporcionado.
        process.stdout.write(" "); // Escribe un espacio en blanco en la salida estándar.
        makeSpaces(counter + 1, limit); // Llama recursivamente a la función para imprimir más espacios en blanco.
    }
}

function makeZ() {
    process.stdout.write("Z"); // Escribe la letra 'Z' en la salida estándar.
}

function makeJump() {
    console.log(); // Imprime un salto de línea en la consola.
}

function makeSequence(row, quantitySpaces) {
    if (row < 10) { // Comprueba si el número de filas generado no ha alcanzado el límite (10).
        makeSpaces(0, row); // Llama a la función para imprimir espacios en blanco antes de la primera letra 'Z' en la fila actual.
        makeZ(); // Llama a la función para imprimir la primera letra 'Z' en la fila actual.
        makeSpaces(0, quantitySpaces); // Llama a la función para imprimir espacios en blanco entre las letras 'Z' en la fila actual.
        if (row < 9)
            makeZ(); // Llama a la función para imprimir la segunda letra 'Z' en la fila actual si la fila no es la última.
        makeJump(); // Llama a la función para imprimir un salto de línea al final de la fila actual.
        makeSequence(row + 1, quantitySpaces - 2); // Llama recursivamente a la función para generar la siguiente fila con menos espacios entre las letras 'Z'.
    }
}

function main() {
    makeSequence(0, 17); // Inicia la generación del patrón con los parámetros iniciales.
}

main(); // Llama a la función principal para comenzar la ejecución del programa.

/*Version del codigo: JavaScriptV1
Autores: Juan Sebastian Tamayo Cuadrado
Nombre del lenguaje utilizado: JavaScript 6.0
Version del lenguaje utilizado: ECMASCRIPT 6.0
Universidad tecnologica de pereira
Programa de Ingenieria de Sistemas y Computacion
Este programa genera un patrón de letras 'Z' con espacios en blanco entre ellas, formando un patrón diagonal descendente. 
Cada fila del patrón tiene un número creciente de espacios en blanco antes de la letra 'Z', seguido de una letra 'Z', y opcionalmente otra letra 'Z' al final de la fila. 
Cada fila tiene menos espacios en blanco que la fila anterior. 
El patrón se imprime en la consola*/

