// Selection Sort Algorithm

function OrdenacaoporSelecao(array){
    var menor;
    var auxiliar;

    for (var i = 0; i < array.length; i++){
        menor = i; // 5
        for (var j = i + 1; j < array.length; j++){
            if (array[j] < array[menor]){
                menor = j;
            }
        }
        if (i != menor){
            auxiliar = array[i];
            array[i] = array[menor];
            array[menor] = auxiliar;
        }
    }
    return array;
}

function gerarListaAleatoria(tamanho, maximo) {
    var array = [];
    for (var index = 0; index < tamanho; index++) {
        array.push(Math.floor(Math.random() * maximo));
    }
    return array;
}


var array = gerarListaAleatoria(10, 100); // array aleatório
// var array = [5, 3, 6, 2, 10]; // array de exemplo
console.log("Array desordenado: " + array);
console.log("Array ordenado: " + OrdenacaoporSelecao(array));
