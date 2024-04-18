function makeSpaces(counter, limit) {
    if (counter < limit) { // Comprueba si el contador es menor que el límite proporcionado.
        process.stdout.write(" "); // Escribe un espacio en blanco en la salida estándar.
        makeSpaces(counter + 1, limit); // Llama recursivamente a la función para imprimir más espacios en blanco.
    }
}

function makeA(counter, limit) {
    if (counter < limit) { // Comprueba si el contador es menor que el límite proporcionado.
        process.stdout.write("A"); // Escribe la letra 'A' en la salida estándar.
        makeA(counter + 1, limit); // Llama recursivamente a la función para imprimir más letras 'A'.
    }
}

function makeJump() {
    console.log(); // Imprime un salto de línea en la consola.
}

function makeSequence(row, quantityChar, quantitySpaces) {
    if (row < 11) { // Comprueba si el número de filas generado no ha alcanzado el límite (11).
        makeSpaces(0, quantitySpaces); // Llama a la función para imprimir espacios en blanco antes de la secuencia de letras 'A'.
        makeA(0, quantityChar); // Llama a la función para imprimir la secuencia de letras 'A'.
        makeJump(); // Llama a la función para imprimir un salto de línea al final de la fila actual.
        if (row < 5)
            makeSequence(row + 1, quantityChar + 1, quantitySpaces - 1); // Llama recursivamente a la función para generar la siguiente fila con más letras 'A' y menos espacios.
        else
            makeSequence(row + 1, quantityChar - 1, quantitySpaces + 1); // Llama recursivamente a la función para generar la siguiente fila con menos letras 'A' y más espacios.
    }
}

function main() {
    makeSequence(0, 1, 39); // Inicia la generación del patrón con los parámetros iniciales.
}

main(); // Llama a la función principal para comenzar la ejecución del programa.

/*Version del codigo: JavaScriptV1
Autores: Juan Sebastian Tamayo Cuadrado
Nombre del lenguaje utilizado: JavaScript 6.0
Version del lenguaje utilizado: ECMASCRIPT 6.0
Universidad tecnologica de pereira
Programa de Ingenieria de Sistemas y Computacion
Este programa genera un patrón de letras 'A' con un número variable de espacios entre cada línea. 
El patrón comienza con una línea de un solo 'A' seguida de una cantidad especificada de espacios en blanco. 
Luego, el número de 'A's aumenta gradualmente en las primeras cinco líneas, mientras que la cantidad de espacios disminuye. 
Después de la quinta línea, el número de 'A's disminuye gradualmente y la cantidad de espacios aumenta. 
El patrón finaliza después de once líneas. Cada línea se imprime en la consola con un salto de línea entre ellas.*/
