console.log(`Trabalhando com  condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 15;
const estaAcompanhada = true;


console.log("Destinos possiveis:");
console.log(listaDeDestinos);

if(idadeComprador >= 18){
    console.log("Comprador maior de idade")
    listaDeDestinos.splice(1,1); //removendo item
} else if(estaAcompanhada){
    console.log("Comprador está acompanhado");
    listaDeDestinos.splice(1,1); //removendo item
}else{
    console.log("Não é maior de Idade e não posso vender.")
}
console.log(listaDeDestinos)


//console.log(idadeComprador > 18);
//console.log(idadeComprador < 18);
//console.log(idadeComprador <= 18);
//console.log(idadeComprador >= 18);
//console.log(idadeComprador == 18);


