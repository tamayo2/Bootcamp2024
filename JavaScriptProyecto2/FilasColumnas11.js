const maxFilas = 25; // Define el número máximo de filas para el patrón
const maxColumnas = 80; // Define el número máximo de columnas para ajustar el formato de salida en la consola

for (let fila = 1; fila <= maxFilas; fila++) {  // Bucle para iterar sobre cada fila del patrón
  let output = '';  // Variable para construir la salida de cada fila
  for (let columna = 1; columna <= fila; columna++) { // Bucle para agregar caracteres a la fila actual
    output += 'A '; // Agrega el carácter 'A' seguido de un espacio en blanco a la salida
  }
  console.log(output.padStart(maxColumnas)); // Muestra la salida en la consola, con relleno a la izquierda para ajustar el formato
}

/*Version del codigo: JavaScriptV1
Autores: Juan Sebastian Tamayo Cuadrado
Nombre del lenguaje utilizado: JavaScript 6.0
Version del lenguaje utilizado: ECMASCRIPT 6.0
Universidad tecnologica de pereira
Programa de Ingenieria de Sistemas y Computacion
El programa imprime un patrón de letras 'A' en forma de triángulo, donde cada fila contiene un número creciente de letras 'A'. 
El triángulo tiene un máximo de 25 filas y 80 columnas de ancho. 
Cada fila comienza con una letra 'A' y se incrementa el número de 'A' en cada fila hasta alcanzar el número de fila correspondiente. 
El patrón se alinea a la derecha en un rectángulo de 80 columnas de ancho, utilizando espacios en blanco para alinear correctamente cada fila.*/
