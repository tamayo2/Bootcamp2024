function generarParejas() {
    let contador = 0;  // Variable para llevar un conteo de las parejas generadas
    for (let i = 1; i < 11; i++) {   // Bucle para iterar sobre los valores del 1 al 10
        let segundoValor = Math.min(Math.floor((i - 1) / 2) + 1, 5); // Variable para calcular el segundo valor en cada pareja
        console.log(contador, segundoValor);  // Muestra el contador y el segundo valor
        contador++;  // Incrementa el contador para la próxima pareja
    }
}

generarParejas(); // Llama a la función para generar las parejas

/*Version del codigo: JavaScriptV1
Autores: Juan Sebastian Tamayo Cuadrado
Nombre del lenguaje utilizado: JavaScript 6.0
Version del lenguaje utilizado: ECMASCRIPT 6.0
Universidad tecnologica de pereira
Programa de Ingenieria de Sistemas y Computacion
El programa generarParejas() genera pares de valores a partir de un bucle for. 
Declara una variable contador e inicializa su valor en 0.
Inicia un bucle for que comienza en 1 y termina en 10, iterando sobre los valores del 1 al 10 (inclusive).
Dentro del bucle for, calcula el valor del segundo componente del par (segundoValor) utilizando la función Math.min junto con Math.floor. 
Este cálculo se basa en la fórmula (i - 1) / 2 + 1, donde i es el valor actual del bucle. El resultado se limita a un máximo de 5.
Imprime en la consola los valores del contador y segundoValor.
Incrementa el valor del contador.
Repite los pasos 3-5 hasta que el bucle for haya iterado sobre todos los valores del 1 al 10.
El programa genera pares de valores donde el primer valor es un contador que incrementa en cada iteración del bucle, y el segundo valor se calcula utilizando una fórmula basada en el índice del bucle, limitado a un máximo de 5. 
Luego, imprime estos pares de valores en la consola.*/



