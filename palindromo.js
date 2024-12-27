function palindromo(palavra){;
    let comparacao = palavra.split("").reverse().join("")

    if (palavra === comparacao) {
        return ("É um palíndromo");
    } else {
        return ("Não é um palíndromo");
    }
}

let palavra = "())(";

console.log(palindromo(palavra.toLowerCase()));