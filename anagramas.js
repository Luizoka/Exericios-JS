function anagrama(palavra1, palavra2) {
    if(palavra1.length !== palavra2.length){
        return "Não é um anagrama";
    } else {
        let listaDaPalavra1 = (palavra1.toLowerCase().split("")).sort().join("");
        let listaDaPalavra2 = (palavra2.toLowerCase().split("")).sort().join("");

        if(listaDaPalavra1 === listaDaPalavra2){
            return "Suas palavras são anagramas!!"
        } else{
            return "Não é um anagrama";
        }
    }
}

primeiraPalavra = "Clara";
segundaPalavra = "Carla";

console.log(anagrama(primeiraPalavra, segundaPalavra));