// Este archivo contiene la lógica de JavaScript para el proyecto. 
// Incluye funciones que manejan la entrada del usuario, realizan la suma de los números ingresados y actualizan la interfaz de usuario con el resultado.

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('sumForm');
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const resultDisplay = document.getElementById('result');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        const sum = num1 + num2;
        resultDisplay.textContent = `Resultado: ${sum}`;
    });
});