function generarTernas() {
    let contador = 1;  // Variable para llevar un conteo incremental de las ternas generadas
    for (let i = 1; i <= 3; i++) { // Bucle externo para el primer valor de la terna (1, 2, 3)
        for (let j = 1; j <= 3; j++) {  // Bucle interno para el segundo y tercer valor de la terna (1, 2, 3)
            console.log(contador, i, j);  // Muestra el contador, el primer valor de la terna y el segundo valor de la terna
            contador++; // Incrementa el contador para la próxima terna
        }
    }
}

generarTernas(); // Llama a la función para generar las ternas

/*Version del codigo: JavaScriptV1
Autores: Juan Sebastian Tamayo Cuadrado
Nombre del lenguaje utilizado: JavaScript 6.0
Version del lenguaje utilizado: ECMASCRIPT 6.0
Universidad tecnologica de pereira
Programa de Ingenieria de Sistemas y Computacion
Este programa genera ternas de números en un patrón predecible y los muestra en la consola. 
La función generarTernas utiliza dos bucles for anidados para generar todas las combinaciones posibles de números del 1 al 3 en ternas. 
Cada terna consiste en un contador general que aumenta en cada iteración del bucle exterior y dos números, uno del primer bucle for y otro del segundo bucle for. 
Por lo tanto, el programa mostrará todas las ternas posibles de números del 1 al 3, enumeradas secuencialmente a través del contador.*/

