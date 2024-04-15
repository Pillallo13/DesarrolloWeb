//def 3
let n = 10;


for (let i = n + 1; i < n + 11; i++) {
    console.log(i);

}


console.log("\n" + "----------------------------------------------------" + "\n")

//def 4
console.log(1);

for (let i = 1; i < 58; i++) {

    if (i % 3 == 0) {
        console.log(i);

    };

};


console.log("\n" + "----------------------------------------------------" + "\n")
//def 5

function sumatoria() {

    let sum = [];

    for (let i = 0; i < 101; i++) {

        sum.push(i);


    }

    let sumado = sum.reduce(function (acumulador, valor) {
        return acumulador + valor;
    }, 0);

    console.log(sumado);

}

sumatoria();

console.log("\n" + "----------------------------------------------------" + "\n")
// def 6

let text = "Practicando el uso de los ciclos o bucles";
let texta = text.toUpperCase();
console.log(texta);


console.log("\n" + "----------------------------------------------------" + "\n")

//def 7

let i = -20;
let punta = [];

while (i < 31) {

    punta.push(i);

    i++
};

function filtro(array) {


    let result = punta.filter((valor) => valor % 2 == 0);



    return console.log(result);

};

filtro(punta);