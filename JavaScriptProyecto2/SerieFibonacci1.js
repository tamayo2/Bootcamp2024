function fibonacciRecursivo(n) {
    if (n === 0 || n === 1) {
      return n; // Retorna directamente n si es 0 o 1
    } else {
      return fibonacciRecursivo(n - 1) + fibonacciRecursivo(n - 2); // Llamada recursiva para calcular el número Fibonacci
    }
}
  
function mostrarFibonacci() {
    let limite = 10000; // Límite superior para la serie de Fibonacci
    let i = 0;  // Contador para el índice de la serie de Fibonacci
    let numero = 0; // Almacena el valor de Fibonacci generado en cada iteración

    console.log("Este programa presenta la serie de Fibonacci comenzando con los digitos 1 y 0, y progresivamente suma los dos ultimos elementos de la serie.");
    console.log("Para este programa, se presentara la serie Fibonacci sin sobrepasar el numero 10,000.");
  
    while (numero <= limite) {
      numero = fibonacciRecursivo(i); // Calcula el siguiente número Fibonacci usando el enfoque recursivo
      if(numero <= limite) {
        process.stdout.write(numero.toString() + ","); // Imprime el número Fibonacci generado

      }
      i++; // Incrementa el contador para avanzar al siguiente índice de la serie de Fibonacci
    }
}
  
mostrarFibonacci();
/*Version del codigo: JavaScriptV1
Autores: Juan Sebastian Tamayo Cuadrado
Nombre del lenguaje utilizado: JavaScript 6.0
Version del lenguaje utilizado: ECMASCRIPT 6.0
Universidad tecnologica de pereira
Programa de Ingenieria de Sistemas y Computacion
fibonacciRecursivo(n): Esta función calcula el n-ésimo término de la serie de Fibonacci de forma recursiva. Si n es 0 o 1, devuelve n. De lo contrario, calcula el término sumando los dos términos anteriores de la serie de Fibonacci recursivamente.
fibonacciIterativo(n): Esta función calcula el n-ésimo término de la serie de Fibonacci de forma iterativa. Utiliza un bucle for para iterar desde 2 hasta n, calculando cada término de Fibonacci sumando los dos términos anteriores.
mostrarFibonacci(): Esta función muestra la serie de Fibonacci utilizando la función fibonacciRecursivo hasta que el número generado supere o igual al límite de 10000. Imprime una descripción del programa y luego itera a través de los términos de la serie de Fibonacci generados por fibonacciRecursivo, imprimiendo cada término separado por comas hasta alcanzar el límite.
El programa genera la serie de Fibonacci utilizando dos enfoques diferentes y muestra los términos generados hasta que superan el límite de 10000.*/

