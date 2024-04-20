let codigoQr = 'a'.repeat(900);

function construirCodigoQr(contador, final) {
    if (contador <= final) {
        codigoQr = codigoQr.substring(0, contador) +
            (Math.random() < 0.25 ? '█' : ' ') +
            codigoQr.substring(contador + 1);
        construirCodigoQr(contador + 1, final);
    }
}

function construirPeriferia(contador, final) {
    if (contador <= final) {
        if (contador <= 30 || contador >= 870) {
            codigoQr = codigoQr.substring(0, contador) + ' ' + codigoQr.substring(contador + 1);
        }
        construirPeriferia(contador + 1, final);
    }
}

function construirPeriferiaIzquierda(contador, final) {
    if (contador <= final) {
        codigoQr = codigoQr.substring(0, contador) + ' ' + codigoQr.substring(contador + 1);
        construirPeriferiaIzquierda(contador + 30, final);
    }
}

function construirPeriferiaDerecha(contador, final) {
    if (contador <= final) {
        codigoQr = codigoQr.substring(0, contador) + ' ' + codigoQr.substring(contador + 1);
        construirPeriferiaDerecha(contador + 30, final);
    }
}

function imprimirCodigoQr(contador, final, numeroFila) {
    if (contador <= final) {
        if (contador <= 270) {
            console.log(` ${numeroFila}          |${codigoQr.substring(contador, contador + 30)}|${numeroFila}`);
        } else {
            console.log(` ${numeroFila}         |${codigoQr.substring(contador, contador + 30)}|${numeroFila}`);
        }
        imprimirCodigoQr(contador + 30, final, numeroFila + 1);
    }
}

function verificarCondicionB(contador, pixeles) {
    if (contador >= 52 && contador <= 262) {
        if ((contador >= 52 && contador <= 60) || (contador >= 82 && contador <= 90) || (contador >= 112 && contador <= 120) || (contador >= 142 && contador <= 150) || (contador >= 172 && contador <= 180) || (contador >= 202 && contador <= 210) || (contador >= 232 && contador <= 240)) {
            if (codigoQr.charAt(contador) === '█') {
                return verificarCondicionB(contador + 1, pixeles + 1);
            }
            return verificarCondicionB(contador + 1, pixeles);
        }
        return verificarCondicionB(contador + 1, pixeles);
    }
    return pixeles;
}

function verificarCondicionC(contador, pixeles) {
    if (contador >= 213 && contador <= 235) {
        if (contador === 213 || contador === 215 || contador === 235) {
            if (codigoQr.charAt(contador) === '█') {
                return verificarCondicionC(contador + 1, pixeles + 1);
            }
            return verificarCondicionC(contador + 1, pixeles);
        }
        return verificarCondicionC(contador + 1, pixeles);
    }
    return pixeles;
}

construirCodigoQr(0, 899);
construirPeriferia(0, 899);
construirPeriferiaIzquierda(30, 840);
construirPeriferiaDerecha(59, 869);
console.log("             012345678901234567890123456789 ");
console.log("            +------------------------------+");
imprimirCodigoQr(0, 899, 0);
console.log("            +------------------------------+");
console.log("             012345678901234567890123456789 ");
console.log("\n");

function imprimirCodigoQr2(contador, final, numeroFila) {
    let linea = "";
    numeroFila = -1
    for (let i = contador; i <= final; i++) {
        numeroFila++ 
        if (i % 30 === 0) {  
            if (i < 1) {
                linea += `${Math.floor(numeroFila )}            `;
            } else if (i <= 270) {
                linea += `|${Math.floor(numeroFila / 30)}`;
                linea += "\n             +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n";
                linea += `${Math.floor(numeroFila / 30)}            `;
            } else {
                linea += `|${Math.floor(numeroFila / 30)}`;
                linea += "\n             +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n";
                linea += `${Math.floor(numeroFila / 30)}           `;
            }
        }
        linea += `|${codigoQr.charAt(i)}`;
    }
    linea += "|29";
    console.log(linea);
}

console.log("             |0|1|2|3|4|5|6|7|8|9|0|1|2|3|4|5|6|7|8|9|0|1|2|3|4|5|6|7|8|9| ");
console.log("             +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+");
imprimirCodigoQr2(0, 899, 0);
console.log("             +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+");
console.log("             |0|1|2|3|4|5|6|7|8|9|0|1|2|3|4|5|6|7|8|9|0|1|2|3|4|5|6|7|8|9| ");

const pixelesNegros = verificarCondicionB(52, 0);
const pixelesNegros2 = verificarCondicionC(213, 0);
console.log("Requisitos:");
console.log("a) Los píxeles de la periferia están siempre en blanco");
console.log("b) El código tiene reservados un cuadrado de 7x7 píxeles encajado en la parte más externa superior derecha (sin incluir la periferia), que debe estar formado por al menos 25 píxeles negros, con cualquier disposición");
console.log("c) En la séptima fila (subíndice 6 de la figura), las columnas en la figura 2, 4, y 25 del arreglo son píxeles de color negro.");
console.log(`Condicion a: se cumple`);
console.log(`Condicion b: ${pixelesNegros >= 25 ? "Se cumple." : "NO se cumple."}   Número de pixeles negros: ${pixelesNegros}`);
console.log(`Condicion c: ${pixelesNegros2 >= 3 ? "Se cumple." : "NO se cumple."}`);
console.log(`Errores: ${pixelesNegros2 >= 3 && pixelesNegros >= 25 ? "0 Es Original" : "1 No es original."}`);