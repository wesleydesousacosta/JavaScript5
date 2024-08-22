const entrada = require('prompt-sync')({sigint: true});

function calcularVolumeEsfera(raio) {
    if (raio <= 0 || isNaN(raio)) {
        return "Por favor, insira um valor válido para o raio.";
    }

    const volume = (4 / 3) * Math.PI * Math.pow(raio, 3);
    return `O volume da esfera com raio ${raio} é ${volume.toFixed(2)} unidades cúbicas.`;
}

const raio = parseFloat(prompt("Digite o valor do raio da esfera:"));

const resultado = calcularVolumeEsfera(raio);
alert(resultado);
