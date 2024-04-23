// Desafio 1 - Sebastian Quintero Jaimes 

let nequi = [50, -20000, 6000, -18000];

function banco(nequi) {
    //El metodo filter nos da dos sub arrays para saber cuales son depositos y cuales son depositos
    let retiros = nequi.filter((valor) => valor < 0);
    let deposito = nequi.filter((valor) => valor > 0);
    //La funcion reduce nos permite sumar los valores dentro del array
    let valor_retiros = retiros.reduce(function (acumulador, valorActual) {
        return acumulador + valorActual;
    }, 0);

    let valor_depositos = deposito.reduce(function (acumulador, valorActual) {
        return acumulador + valorActual;
    }, 0);

    let valor_actual = valor_depositos + valor_retiros;

    return { valor_actual, valor_depositos, valor_retiros };
}

function generador(nombre, apellido, nequi) {
    let { valor_actual, valor_depositos, valor_retiros } = banco(nequi);
    let texto = "Estimado/a " + nombre + " " + apellido + "\n" +
        "El monto total de los retiros es de: $" + -valor_retiros + "\n" +
        "El monto total de los depósitos es de: $" + valor_depositos + "\n" +
        "Por lo tanto, su saldo actual en la cuenta es de: $" + valor_actual;

    console.log(texto);
}

generador("Sebastian", "Quintero", nequi);
