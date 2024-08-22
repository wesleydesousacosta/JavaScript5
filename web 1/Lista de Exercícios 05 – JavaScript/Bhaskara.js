function calcularBhaskara(a, b, c) {
    const delta = (b * b) - (4 * a * c);

    if (delta < 0) {
        return "A equação não possui raízes reais.";
    } else if (delta === 0) {
        const raizUnica = -b / (2 * a);
        return `A equação possui uma raiz real: x = ${raizUnica.toFixed(2)}`;
    } else {
        const raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
        const raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
        return `As raízes da equação são: x1 = ${raiz1.toFixed(2)}, x2 = ${raiz2.toFixed(2)}`;
    }
}

const a = parseFloat(prompt("Digite o valor de a:"));
const b = parseFloat(prompt("Digite o valor de b:"));
const c = parseFloat(prompt("Digite o valor de c:"));

const resultado = calcularBhaskara(a, b, c);

alert(resultado);
