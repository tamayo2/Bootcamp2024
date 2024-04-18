function fibonacciRecursivo(n) {
  if (n === 0 || n === 1) { // Función recursiva para calcular el n-ésimo número de la serie de Fibonacci
      return n; // Retorna n si es 0 o 1
  } else {
      return fibonacciRecursivo(n - 1) + fibonacciRecursivo(n - 2); // Calcula el n-ésimo número de Fibonacci sumando los dos números anteriores
  }
}

function mostrarFibonacciYSuma() {
  let limite = 100; // Límite superior para los números de Fibonacci
  let suma = 0; // Almacena la suma de los números de Fibonacci
  let i = 0; // Contador para el índice de la serie de Fibonacci
  let numero = fibonacciRecursivo(i); // Calcula el primer número de Fibonacci

  console.log("Este programa presenta la suma de los elementos de la serie Fibonacci entre 0 y 100.");
  console.log("Los números a sumar son:");

  while (numero <= limite) { // Mientras el número de Fibonacci sea menor o igual al límite
      process.stdout.write(numero + " , "); // Imprime el número de Fibonacci
      suma += numero; // Suma el número de Fibonacci al total
      i++; // Incrementa el contador
      numero = fibonacciRecursivo(i); // Calcula el siguiente número de Fibonacci
  }
  console.log("Y su suma es : " + suma + "."); // Imprime la suma total de los números de Fibonacci
}

mostrarFibonacciYSuma(); // Llama a la función para mostrar la serie de Fibonacci y su suma

/*Version del codigo: JavaScriptV1
Autores: Juan Sebastian Tamayo Cuadrado
Nombre del lenguaje utilizado: JavaScript 6.0
Version del lenguaje utilizado: ECMASCRIPT 6.0
Universidad tecnologica de pereira
Programa de Ingenieria de Sistemas y Computacion
El programa calcula la serie de Fibonacci y luego suma los números de la serie hasta que alcanza o supera un límite de 100. La serie de Fibonacci es una secuencia de números en la que cada número es la suma de los dos anteriores, comenzando con 0 y 1. Por lo tanto, la serie comienza con 0, 1, 1, 2, 3, 5, 8, 13, 21, etc.
La función fibonacciRecursivo(n) calcula el n-ésimo número de Fibonacci de forma recursiva. Si n es 0 o 1, retorna n; de lo contrario, retorna la suma de los números de Fibonacci para n-1 y n-2.
La función mostrarFibonacciYSuma() muestra los números de la serie de Fibonacci y calcula su suma hasta que alcanza o supera el límite de 100. Inicializa un límite de 100, una variable para la suma, un contador i y calcula el primer número de Fibonacci (numero) llamando a fibonacciRecursivo(i).
Luego, entra en un bucle while que imprime cada número de Fibonacci y lo suma a suma mientras el número actual (numero) sea menor o igual al límite. Dentro del bucle, incrementa i, calcula el siguiente número de Fibonacci y actualiza numero.
Finalmente, el programa imprime la suma total de los números de Fibonacci que se han mostrado.*/

