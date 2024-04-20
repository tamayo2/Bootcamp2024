const prompt = require('prompt-sync')();

function inicializarTablero() {
    return [
        ['1', '2', '3'],
        ['4', '5', '6'],
        ['7', '8', '9']
    ];
}

function imprimirTablero(tablero) {
    for (let fila of tablero) {
        console.log(fila.join(' | '));
        console.log('---+---+---');
    }
}

function hayGanador(tablero) {
    // Verificar filas
    for (let fila of tablero) {
        if (fila[0] === fila[1] && fila[1] === fila[2]) {
            return fila[0];
        }
    }

    for (let i = 0; i < 3; i++) {
        if (tablero[0][i] === tablero[1][i] && tablero[1][i] === tablero[2][i]) {
            return tablero[0][i];
        }
    }

    if ((tablero[0][0] === tablero[1][1] && tablero[1][1] === tablero[2][2]) ||
        (tablero[0][2] === tablero[1][1] && tablero[1][1] === tablero[2][0])) {
        return tablero[1][1];
    }

    return null;
}

function realizarMovimiento(tablero, jugador, casilla) {
    for (let i = 0; i < tablero.length; i++) {
        for (let j = 0; j < tablero[i].length; j++) {
            if (tablero[i][j] === casilla) {
                tablero[i][j] = jugador;
                return true;
            }
        }
    }
    return false;
}

function todasCasillasOcupadas(tablero) {
    for (let fila of tablero) {
        for (let casilla of fila) {
            if (casilla !== 'X' && casilla !== 'O') {
                return false;
            }
        }
    }
    return true;
}

function jugarTriqui() {
    let tablero = inicializarTablero();
    let jugadorActual = 'X';

    console.log('¡Bienvenido al Triqui!');
    console.log('Jugador 1: X | Jugador 2: O');
    console.log('Para jugar, introduce el número de casilla en la que deseas colocar tu ficha.');
    console.log('¡Que comience el juego!\n');

    while (true) {
        imprimirTablero(tablero);

        let casilla = prompt(`Jugador ${jugadorActual}, introduce número de casilla:`);

        if (isNaN(casilla) || casilla < 1 || casilla > 9) {
            console.log('Por favor, introduce un número válido de casilla (1-9).');
            continue;
        }

        if (!realizarMovimiento(tablero, jugadorActual, casilla)) {
            console.log('Casilla ya jugada. Por favor, elige otra.');
            continue;
        }

        let ganador = hayGanador(tablero);
        if (ganador) {
            imprimirTablero(tablero);
            console.log(`¡El jugador ${jugadorActual} ha ganado!`);
            break;
        } else if (todasCasillasOcupadas(tablero)) {
            imprimirTablero(tablero);
            console.log('¡Empate!');
            break;
        }

        jugadorActual = jugadorActual === 'X' ? 'O' : 'X';
    }
}
jugarTriqui();
