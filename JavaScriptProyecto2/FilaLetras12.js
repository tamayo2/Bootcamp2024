function imprimir() { 
    const letras = ['P', 'N', 'L', 'J', 'H', 'F', 'D']; // Array que contiene las letras a imprimir en el patrón
    const tamano = 13; // Tamaño del patrón, es decir, el número de filas y columnas a imprimir
  
    for (let i = 0; i < tamano; i++) { // Bucle para iterar sobre cada fila del patrón
      let linea = ''; // Variable para construir la línea actual del patrón
      for (let j = 0; j < tamano; j++) { // Bucle para iterar sobre cada columna del patrón
        if (i < tamano - 1 && j >= i && j < tamano - i) { // Condición para determinar si se debe imprimir una letra en la posición actual
          linea += letras[i] + ' '; // Agrega la letra correspondiente seguida de un espacio en blanco a la línea
        } else if (i === tamano - 1) { // Condición para la última fila del patrón
          linea += letras[6] = ' '; // Agrega un espacio en blanco a la línea en la posición correspondiente al índice 6 del array 'letras'
        } else { // Caso contrario, cuando no se debe imprimir una letra en la posición actual
          linea += '  '; // Agrega dos espacios en blanco a la línea para mantener la estructura del patrón
        }
      }
      console.log(linea); // Muestra la línea construida en la consola
    }
  }
imprimir(); // Llama a la función para imprimir el patrón

/*Version del codigo: JavaScriptV1
Autores: Juan Sebastian Tamayo Cuadrado
Nombre del lenguaje utilizado: JavaScript 6.0
Version del lenguaje utilizado: ECMASCRIPT 6.0
Universidad tecnologica de pereira
Programa de Ingenieria de Sistemas y Computacion
El programa imprime un patrón de letras en forma de triángulo invertido. Utiliza un conjunto predefinido de letras ('P', 'N', 'L', 'J', 'H', 'F', 'D') y un tamaño específico (13). 
Cada línea del patrón contiene caracteres de las letras según ciertas condiciones. Al final, se imprime el patrón completo en la consola.*/
