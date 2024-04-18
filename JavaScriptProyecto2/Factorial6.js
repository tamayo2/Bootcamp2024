const prompt = require('prompt-sync')(); // Importa el módulo 'prompt-sync' para obtener entrada del usuario de manera síncrona

function factorial(numero) {
  if (numero === 0) { // Verifica si el número es cero
      return 1; // Devuelve 1 si el número es cero, ya que el factorial de 0 es 1
  } else {
    let resultado = 1; // Inicializa el resultado del factorial como 1
    for (let i = 2; i <= numero; i++) { // Bucle para calcular el factorial del número
      resultado *= i; // Calcula el factorial multiplicando el resultado por cada número desde 2 hasta el número dado
    }
    return resultado; // Devuelve el resultado del factorial
  }
}
  
let numero = parseFloat(prompt("Ingrese el número a calcular: ")); // Solicita al usuario que ingrese un número y lo convierte a punto flotante
  
const resultadoFactorial = factorial(numero); // Calcula el factorial del número ingresado

if (numero === 0) { // Verifica si el número ingresado es cero
  console.log('El factorial de', numero, 'es: 1'); // Muestra el factorial de 0 (que es 1)
} else {
  let factorialString = 'El factorial de ' + numero + ' es: '; // Inicializa una cadena para mostrar el factorial
  for (let i = 1; i <= numero; i++) { // Bucle para construir la representación en cadena del factorial
    factorialString += i; // Agrega el número actual al factorial
    if (i !== numero) { // Verifica si no es el último número en el factorial
      factorialString += ' x '; // Agrega 'x' para indicar la multiplicación entre los números
    }
  }
  console.log(factorialString); // Muestra la representación en cadena del factorial
}

/*Version del codigo: JavaScriptV1
Autores: Juan Sebastian Tamayo Cuadrado
Nombre del lenguaje utilizado: JavaScript 6.0
Version del lenguaje utilizado: ECMASCRIPT 6.0
Universidad tecnologica de pereira
Programa de Ingenieria de Sistemas y Computacion
Este código calcula el factorial de un número ingresado por el usuario utilizando una función recursiva. 
Luego, presenta el resultado del factorial como una expresión matemática, mostrando cada multiplicación en una cadena de texto.*/
