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
    if (row > 0) { // Comprueba si el número de filas generado no ha alcanzado el límite (0).
        makeSpaces(0, row - 1); // Llama a la función para imprimir espacios en blanco antes de la primera letra 'Z' en la fila actual.
        makeZ(); // Llama a la función para imprimir la primera letra 'Z' en la fila actual.
        makeSpaces(0, quantitySpaces); // Llama a la función para imprimir espacios en blanco entre las letras 'Z' en la fila actual.
        if (row < 10)
            makeZ(); // Llama a la función para imprimir la segunda letra 'Z' en la fila actual si la fila no es la última.
        makeJump(); // Llama a la función para imprimir un salto de línea al final de la fila actual.
        makeSequence(row - 1, quantitySpaces + 2); // Llama recursivamente a la función para generar la siguiente fila con más espacios entre las letras 'Z'.
    }
}

function main() {
    makeSequence(10, -1); // Inicia la generación del patrón con los parámetros iniciales.
}

main(); // Llama a la función principal para comenzar la ejecución del programa.

/*Version del codigo: JavaScriptV1
Autores: Juan Sebastian Tamayo Cuadrado
Nombre del lenguaje utilizado: JavaScript 6.0
Version del lenguaje utilizado: ECMASCRIPT 6.0
Universidad tecnologica de pereira
Programa de Ingenieria de Sistemas y Computacion
Este programa genera un patrón de letras 'Z' con espacios en blanco intercalados. 
Comienza con una fila de 10 letras 'Z', luego disminuye una letra 'Z' en cada fila, y aumenta la cantidad de espacios en blanco entre las letras 'Z'. 
Termina cuando llega a una fila con una sola letra 'Z'. Cada fila se imprime en la consola.*/
