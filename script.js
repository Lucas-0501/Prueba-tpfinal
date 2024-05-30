function convertToDecimal() {
    const InputBinario = document.getElementById('InputBinario').value;
    const ResultDecimal = document.getElementById('resultado');
    
    // Verificar si el input es un número binario válido
    if (!/^[01]+$/.test(InputBinario)) {
        ResultDecimal.textContent = 'Por favor, ingresa un número binario válido.';
        return;
    }
    
    // Convertir el número binario a decimal
    const decimalValue = parseInt(InputBinario, 2);
    
    // Mostrar el resultado
    ResultDecimal.textContent = `El valor decimal es: ${decimalValue}`;
}