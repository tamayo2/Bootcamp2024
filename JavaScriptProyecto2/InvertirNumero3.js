const prompt = require('prompt-sync')(); // Módulo para leer la entrada del usuario desde la consola

function invertirNumero(numero) {
    let numeroString = numero.toString(); // Convierte el número a una cadena de texto
    let numeroInvertido = ''; // Almacena el número invertido
  
    for (let i = numeroString.length - 1; i >= 0; i--) { // Recorre la cadena de texto del número de atrás hacia adelante
      numeroInvertido += numeroString[i]; // Agrega cada dígito al número invertido
    }
  
    return numeroInvertido; // Retorna el número invertido como una cadena de texto
}
  
console.log('Este programa lee un numero entero y lo imprime al reves.'); // Mensaje de instrucción para el usuario
  
let numero1 = parseFloat(prompt("ingrese un numero para leerlo al reves: ")); // Lee el número ingresado por el usuario
console.log('Entre el numero:', invertirNumero(numero1)); // Imprime el número ingresado al revés usando la función invertirNumero

/*Version del codigo: JavaScriptV1
Autores: Juan Sebastian Tamayo Cuadrado
Nombre del lenguaje utilizado: JavaScript 6.0
Version del lenguaje utilizado: ECMASCRIPT 6.0
Universidad tecnologica de pereira
Programa de Ingenieria de Sistemas y Computacion
Función invertirNumero(numero):
Esta función toma un número entero como entrada y devuelve una cadena que representa el número invertido, es decir, los dígitos del número original se invierten en orden.
Convierte el número en una cadena utilizando el método toString() para poder manipular individualmente cada dígito.
Utiliza un bucle for que itera a través de la cadena de dígitos del número, comenzando desde el último dígito hasta el primero.
En cada iteración, agrega el dígito actual al inicio de una nueva cadena llamada numeroInvertido.
Finalmente, devuelve la cadena numeroInvertido, que representa el número original pero en orden invertido.
Mensaje de bienvenida:
El programa imprime un mensaje de bienvenida que indica su propósito, que es leer un número entero y mostrarlo en orden invertido.
Lectura del número:
Utiliza la función prompt() del módulo prompt-sync para solicitar al usuario que ingrese un número entero.
El número ingresado por el usuario se almacena en la variable numero1 después de convertirlo a un número de punto flotante (parseFloat) para manejar entradas decimales si las hubiera.
Inversión y presentación del número:
Llama a la función invertirNumero(numero1) para invertir el número ingresado por el usuario.
Imprime un mensaje indicando el número original ingresado por el usuario y luego muestra el número invertido utilizando console.log().
Este programa solicita al usuario que ingrese un número entero, invierte ese número y muestra el número invertido en la consola.*/

  