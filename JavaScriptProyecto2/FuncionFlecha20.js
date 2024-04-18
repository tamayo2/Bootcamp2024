const rush = (x, y) => { // Declara una función llamada "rush" que toma dos parámetros, x e y.
  if (!Number.isInteger(x) || !Number.isInteger(y) || x <= 0 || y <= 0) { // Comprueba si x e y son enteros positivos.
    console.log("Los valores de x e y deben ser enteros positivos."); // Imprime un mensaje de error si x o y no son enteros positivos.
    return; // Retorna para finalizar la ejecución de la función.
  }
  const ancho = Math.max(x, 2); // Calcula el ancho máximo como el máximo entre x y 2.
  const topBottom = `/${'*'.repeat(ancho - 2)}\\`; // Crea una cadena que representa la parte superior e inferior del patrón.
  const middle = `*${' '.repeat(ancho - 2)}*`; // Crea una cadena que representa la parte media del patrón.
  console.log(topBottom); // Imprime la parte superior del patrón.
  for (let i = 0; i < y - 2; i++) { // Bucle para imprimir la parte media del patrón (si y es mayor que 1).
    console.log(middle); // Imprime la parte media del patrón.
  }
  if (y > 1) { // Comprueba si y es mayor que 1.
    console.log(topBottom); // Imprime la parte inferior del patrón.
  }
};
rush(5, 1); // Llama a la función "rush" con los valores de x = 5 e y = 1.

/*Version del codigo: JavaScriptV1
Autores: Juan Sebastian Tamayo Cuadrado
Nombre del lenguaje utilizado: JavaScript 6.0
Version del lenguaje utilizado: ECMASCRIPT 6.0
Universidad tecnologica de pereira
Programa de Ingenieria de Sistemas y Computacion

Este programa genera un patrón rectangular compuesto por caracteres '' y espacios. 
La función rush toma dos parámetros x y y, que representan el ancho y la altura del patrón respectivamente. 
Si x o y no son enteros positivos, el programa imprime un mensaje de error. 
Luego, construye el patrón utilizando caracteres '' y espacios, donde x determina el ancho mínimo del patrón y y determina el número de filas. 
El patrón consta de una línea superior e inferior formada por '' y una sección central de filas compuestas únicamente por espacios, excepto la primera y última fila que también contienen ''.*/

  