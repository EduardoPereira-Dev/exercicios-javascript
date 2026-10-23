console.log("aula de JavaScript");
const listaDeViagem = new Array(
    "Japão",
    "Brasil",
    "Portugal",
    "Cuba"
);

let Destino = "curitiba";

for (let contador = 0; contador < 3; contador++) {
    if (listaDeViagem[contador] == Destino){
        console.log("Destino existe");
        break;
    }
    else {
        console.log("Destino não existe");
    }
}