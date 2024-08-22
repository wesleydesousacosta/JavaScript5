function exibirSobrenomePrimeiro(nomeCompleto) {
    const partesDoNome = nomeCompleto.trim().split(' ');
    const sobrenome = partesDoNome.pop();
    const primeiroNome = partesDoNome.join(' ');
    return `${sobrenome} ${primeiroNome}`;
}

const nomeCompleto = prompt("Digite o nome completo:");
const nomeInvertido = exibirSobrenomePrimeiro(nomeCompleto);
alert(nomeInvertido);
