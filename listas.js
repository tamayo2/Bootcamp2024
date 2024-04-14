const readline = require('readline'); // La variable readline importa el módulo 'readline' de Node.js para manejar la entrada y salida de la consola.

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// La variable rl crea una interfaz de lectura y escritura para interactuar con el usuario a través de la consola.

function encontrarMayorYMenor(lista) { // La función encontrarMayorYMenor recibe una lista de números como argumento.
    let mayor = lista[0]; // La variable mayor se inicializa con el primer elemento de la lista.
    let menor = lista[0]; // La variable menor se inicializa con el primer elemento de la lista.
    for (let i = 1; i < lista.length; i++) { // Se itera sobre la lista desde el segundo elemento.
        if (lista[i] > mayor) {
            mayor = lista[i]; // Si se encuentra un número mayor que el actual, se actualiza la variable mayor.
        }
        if (lista[i] < menor) {
            menor = lista[i]; // Si se encuentra un número menor que el actual, se actualiza la variable menor.
        }
    }
    return [mayor, menor]; // Se retorna un array con el número mayor y el número menor encontrados en la lista.
}

function concatenarYOrdenar(lista1, lista2) { // La función concatenarYOrdenar recibe dos listas como argumentos.
    return lista1.concat(lista2).sort((a, b) => a - b); // Se concatenan ambas listas, se ordenan de forma ascendente y se retorna el resultado.
}

function invertirLista(lista) { // La función invertirLista recibe una lista como argumento.
    return lista.reverse(); // Se invierte el orden de los elementos en la lista y se retorna el resultado.
}

function preguntarLista(mensaje, callback) { // La función preguntarLista recibe un mensaje y una función de retorno como argumentos.
    rl.question(mensaje, (input) => { // Utiliza rl.question para mostrar el mensaje y esperar la respuesta del usuario.
        const lista = input.split(',').map(Number); // Se convierte la entrada del usuario (una cadena de números separados por comas) en un array de números.
        callback(lista); // Se llama a la función de retorno pasándole la lista como argumento.
    });
}

preguntarLista('Ingrese la lista de números separados por comas para encontrar el mayor y el menor: ', (numeros) => { // Se llama a preguntarLista para pedir al usuario la lista de números.
    const [mayor, menor] = encontrarMayorYMenor(numeros); // Se llama a encontrarMayorYMenor para encontrar el número mayor y el menor en la lista ingresada.
    console.log("El número más grande es:", mayor);
    console.log("El número más pequeño es:", menor); // Se imprime por consola el número más grande y el más pequeño.
    preguntarLista('Ingrese la primera lista de números separados por comas: ', (lista1) => { // Se pide al usuario que ingrese la primera lista de números.
        preguntarLista('Ingrese la segunda lista de números separados por comas: ', (lista2) => { // Se pide al usuario que ingrese la segunda lista de números.
            const listaOrdenada = concatenarYOrdenar(lista1, lista2); // Se llama a concatenarYOrdenar para combinar y ordenar ambas listas.
            console.log("Lista combinada y ordenada:", listaOrdenada); // Se imprime por consola la lista combinada y ordenada.
            preguntarLista('Ingrese la lista de números separados por comas para invertir: ', (listaOriginal) => { // Se pide al usuario que ingrese la lista de números para invertir.
                const listaInvertida = invertirLista(listaOriginal); // Se llama a invertirLista para invertir la lista ingresada.
                console.log("Lista invertida:", listaInvertida); // Se imprime por consola la lista invertida.
                rl.close(); // Se cierra la interfaz de lectura y escritura.
            });
        });
    });
});

//Version del codigo: JavaScriptV1
//Autores: Juan Sebastian Tamayo Cuadrado y David Patiño
//Nombre del lenguaje utilizado: JavaScript 6.0
//Version del lenguaje utilizado: ECMASCRIPT 6.0
//Universidad tecnologica de pereira
//Programa de Ingenieria de Sistemas y Computacion
//Este programa en JavaScript realiza varias operaciones sobre listas de números ingresadas por el usuario a través de la consola.
//Encontrar el mayor y el menor número: El programa solicita al usuario ingresar una lista de números separados por comas.
//Luego, encuentra el número más grande y el más pequeño de la lista utilizando la función encontrarMayorYMenor.
//Muestra por consola el número más grande y el más pequeño.
//Concatenar y ordenar dos listas de números:
//Pide al usuario ingresar dos listas de números separados por comas.
//Luego, concatena estas dos listas utilizando la función concatenarYOrdenar.
//Ordena la lista resultante de manera ascendente.
//Imprime por consola la lista combinada y ordenada.
//Invertir una lista de números:
//Solicita al usuario ingresar una lista de números separados por comas.
//Utiliza la función invertirLista para invertir la lista ingresada.
//Muestra por consola la lista invertida.

