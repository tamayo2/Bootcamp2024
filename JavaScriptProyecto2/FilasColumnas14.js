function imprimirPatron(filas) { 
  for (let i = 0; i < filas; i++) {  // Bucle externo para iterar sobre cada fila del patrón
      for (let j = 0; j < i; j++) { // Bucle interno para agregar espacios en blanco antes de imprimir las letras en cada fila
          process.stdout.write("  "); // Escribe dos espacios en blanco en la salida estándar
      }
      for (let k = 0; k < (2 * (filas - i) - 1); k++) { // Bucle interno para imprimir las letras en cada fila
          process.stdout.write("P ");  // Escribe la letra 'P' seguida de un espacio en blanco en la salida estándar
      }
      console.log(); // Imprime una nueva línea después de escribir todas las letras en la fila actual
  }
}
imprimirPatron(7); // Llama a la función para imprimir el patrón con 7 filas

/*Version del codigo: JavaScriptV1
Autores: Juan Sebastian Tamayo Cuadrado
Nombre del lenguaje utilizado: JavaScript 6.0
Version del lenguaje utilizado: ECMASCRIPT 6.0
Universidad tecnologica de pereira
Programa de Ingenieria de Sistemas y Computacion
Este programa imprime un patrón en forma de pirámide invertida utilizando la letra 'P'. 
El número de filas de la pirámide está determinado por el parámetro filas pasado a la función imprimirPatron(). 
Cada fila de la pirámide contiene un número variable de letras 'P' separadas por espacios en blanco para formar la pirámide invertida.
La primera fila tiene una 'P', la segunda fila tiene tres 'P's, la tercera fila tiene cinco 'P's, y así sucesivamente, aumentando en dos 'P's por cada fila hacia abajo.*/
