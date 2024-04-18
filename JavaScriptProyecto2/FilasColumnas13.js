const letra = 'P'; // Define la letra que se va a imprimir en el patrón
const inicioColumna = 34; // Define el inicio de la columna donde se imprimirá la letra en cada fila del patrón
const finColumna = 46; // Define el final de la columna donde se imprimirá la letra en cada fila del patrón
const altura = 7; // Define la altura del patrón, es decir, el número de filas que se imprimirán

for (let fila = 1; fila <= altura; fila++) { // Bucle para iterar sobre cada fila del patrón
    let linea = '                                 '; // Inicializa una línea con espacios en blanco para ajustar la posición de la letra
    for (let espacio = 1; espacio <= (fila - 1) * 3; espacio++) { // Bucle para agregar espacios en blanco antes de la letra en cada fila
        linea += ' '; // Agrega un espacio en blanco a la línea
    }
    for (let columna = inicioColumna; columna <= finColumna - (fila - 1) * 3; columna++) { // Bucle para agregar la letra en cada fila
        linea += letra + ' '; // Agrega la letra seguida de un espacio en blanco a la línea
    }
    console.log(linea); // Muestra la línea construida en la consola
}

/*Version del codigo: JavaScriptV1
Autores: Juan Sebastian Tamayo Cuadrado
Nombre del lenguaje utilizado: JavaScript 6.0
Version del lenguaje utilizado: ECMASCRIPT 6.0
Universidad tecnologica de pereira
Programa de Ingenieria de Sistemas y Computacion
El programa imprime un patrón de la letra 'P' en la consola. La letra 'P' se forma con espacios y caracteres 'P' en posiciones específicas en cada fila, donde el número de caracteres 'P' y espacios varía según la fila. 
El tamaño y la posición del patrón están determinados por las constantes definidas al principio del código (letra, inicioColumna, finColumna y altura). 
La letra 'P' se imprime de arriba hacia abajo, con la altura especificada por la constante altura. 
Cada fila del patrón se construye mediante bucles que agregan espacios y caracteres 'P' según un patrón predefinido.*/
