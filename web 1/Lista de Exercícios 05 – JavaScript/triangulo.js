function calcularPerimetro(a, b, c) {
    return a + b + c;
}

function calcularArea(b, h) {
    return (b * h) / 2;
}

const a = parseFloat(prompt("Digite o valor do lado a do triângulo:"));
const b = parseFloat(prompt("Digite o valor do lado b do triângulo:"));
const c = parseFloat(prompt("Digite o valor do lado c do triângulo:"));
const h = parseFloat(prompt("Digite o valor da altura h relativa ao lado b:"));

const perimetro = calcularPerimetro(a, b, c);
const area = calcularArea(b, h);

alert(`O perímetro do triângulo é ${perimetro.toFixed(2)} unidades.`);
alert(`A área do triângulo é ${area.toFixed(2)} unidades quadradas.`);
