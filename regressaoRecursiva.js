function regressiva(num){
    if (num < 0){
        console.log("Seu numero deve ser maior que 0");
        return;
    }
    console.log(num);
    if(num === 0){
        return;
    }
    regressiva(num-1);
}

let numero = 1;
regressiva(numero);
