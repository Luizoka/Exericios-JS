function buscaBinaria(array, valor) {
    var inicio = 0;
    var fim = array.length - 1;
    var count = 0;
    
    while (inicio <= fim) {
        var meio = Math.trunc((inicio + fim) / 2);
        if (array[meio] == valor) {
            return ("O tempo de execução é O(log n). Número de iterações: " + count);
        }
        if (array[meio] < valor) {
            inicio = meio + 1;
        }
        if (array[meio] > valor) {
            fim = meio - 1;
        }
        count++;
    }
    return ("Seu número não está no array. O tempo de execução é O(log n). Número de iterações: " + count);
}

function gerarListaAleatoria(tamanho, maximo) {
    var array = [];
    for (var index = 0; index < tamanho; index++) {
        array.push(Math.floor(Math.random() * maximo));
    }
    return array;
}

// var array = gerarListaAleatoria(10000, 100000); // array aleatório
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]; // array de exemplo

// Ordena o array (caso necessário)
array.sort(function (a, b) { return a - b; });

console.log(array);
console.log(buscaBinaria(array, 0));
