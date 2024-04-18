function makeSpaces(counter, limit) {
    if (counter < limit) { // Parámetro 'counter' se utiliza para llevar un conteo de los espacios ya impresos.
                          // Parámetro 'limit' indica el número máximo de espacios que se deben imprimir.
        process.stdout.write(" "); // Imprime un espacio en blanco en la salida estándar.
        makeSpaces(counter + 1, limit); // Llama recursivamente a la función para imprimir el siguiente espacio en blanco.
    }
}

function makeA(counter, limit) {
    if (counter < limit) { // Parámetro 'counter' se utiliza para llevar un conteo de las letras 'A' ya impresas.
                          // Parámetro 'limit' indica el número máximo de letras 'A' que se deben imprimir.
        process.stdout.write("A"); // Imprime la letra 'A' en la salida estándar.
        makeA(counter + 1, limit); // Llama recursivamente a la función para imprimir la siguiente letra 'A'.
    }
}

function makeJump() {
    console.log(); // Imprime un salto de línea en la consola para pasar a la siguiente línea.
}

function makeSequence(row, quantityChar, quantitySpaces) {
    if (row < 8) { // Parámetro 'row' se utiliza para llevar un conteo de las filas en el patrón.
                   // Indica la fila actual del patrón que se está construyendo.
        makeSpaces(0, 27); // Llama a la función 'makeSpaces' para imprimir espacios en blanco antes de la secuencia de letras 'A'.
                           // Se asegura de que las letras 'A' se impriman en la posición correcta en cada fila.
        if (row === 4)
            makeA(0, quantityChar - 1); // Llama a la función 'makeA' para imprimir las letras 'A' en la secuencia central del patrón.
                                         // Se asegura de que la secuencia central tenga una letra 'A' menos que las otras secuencias.
        else
            makeA(0, quantityChar); // Llama a la función 'makeA' para imprimir las letras 'A' en la secuencia actual del patrón.
                                     // El parámetro 'quantityChar' indica cuántas letras 'A' se deben imprimir en la secuencia actual.
        makeSpaces(0, quantitySpaces); // Llama a la función 'makeSpaces' para imprimir espacios en blanco entre las secuencias de letras 'A'.
                                        // Se asegura de que las secuencias de letras 'A' estén separadas por espacios en blanco.
        makeA(0, quantityChar); // Llama a la función 'makeA' para imprimir las letras 'A' en la segunda parte de la secuencia del patrón.
                                 // El parámetro 'quantityChar' indica cuántas letras 'A' se deben imprimir en la segunda parte de la secuencia.
        makeJump(); // Llama a la función 'makeJump' para imprimir un salto de línea y pasar a la siguiente fila del patrón.
        if (row < 4)
            makeSequence(row + 1, quantityChar + 1, quantitySpaces - 2); // Llama recursivamente a la función 'makeSequence' para construir la siguiente fila del patrón.
                                                                          // En las primeras 4 filas, se incrementa la cantidad de letras 'A' y se decrementa la cantidad de espacios en blanco entre las secuencias.
        else
            makeSequence(row + 1, quantityChar - 1, quantitySpaces + 2); // Llama recursivamente a la función 'makeSequence' para construir la siguiente fila del patrón.
                                                                          // En las últimas 4 filas, se decrementa la cantidad de letras 'A' y se incrementa la cantidad de espacios en blanco entre las secuencias.
    }
}

function main() {
    makeSequence(1, 1, 5); // Llama a la función 'makeSequence' para construir el patrón comenzando desde la primera fila.
}

main(); // Llama a la función principal para iniciar la construcción del patrón.

/*Version del codigo: JavaScriptV1
Autores: Juan Sebastian Tamayo Cuadrado
Nombre del lenguaje utilizado: JavaScript 6.0
Version del lenguaje utilizado: ECMASCRIPT 6.0
Universidad tecnologica de pereira
Programa de Ingenieria de Sistemas y Computacion
Este programa genera un patrón de letras 'A' en forma de pirámide, donde la cantidad de letras 'A' en cada fila aumenta hasta la mitad del patrón y luego disminuye de nuevo. 
Cada fila tiene una cantidad variable de espacios en blanco para crear la forma de pirámide. El patrón se muestra en la consola.*/
