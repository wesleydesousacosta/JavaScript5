function saoAnagramas(palavra1, palavra2) {
    const formatarPalavra = (palavra) => palavra.toLowerCase().replace(/\s+/g, '');

    palavra1 = formatarPalavra(palavra1);
    palavra2 = formatarPalavra(palavra2);

    if (palavra1.length !== palavra2.length) {
        return false;
    }

    const ordenarLetras = (palavra) => palavra.split('').sort().join('');
    return ordenarLetras(palavra1) === ordenarLetras(palavra2);
}

const palavra1 = prompt("Digite a primeira palavra:");
const palavra2 = prompt("Digite a segunda palavra:");

if (saoAnagramas(palavra1, palavra2)) {
    alert("As palavras são anagramas.");
} else {
    alert("As palavras não são anagramas.");
}
