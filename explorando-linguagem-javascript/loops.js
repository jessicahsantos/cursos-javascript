console.log(`\n Trabalhando com  condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 15;
const estaAcompanhada = true;
let temPassagemComprada = false;

console.log("\n Destinos possiveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada
== true;

