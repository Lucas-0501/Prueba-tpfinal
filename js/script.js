// Funcio para convertir de binario a decimal
function BinToDec() {
    const InputBinario = document.getElementById('InputBinario').value;
    const ResultDecimal = document.getElementById('resultado');
    
    // Verificar si el input es un número binario válido
    if (!/^[01]+$/.test(InputBinario)) {
        ResultDecimal.textContent = 'Por favor, ingresa un número binario válido.';
        return;
    }
    
    // Convertir el número binario a decimal
    const ValorDec = parseInt(InputBinario, 2);
    
    // Mostrar el resultado
    ResultDecimal.textContent = `El valor decimal es: ${ValorDec}`;
}
// Funcion para convertir de decimal a binario
function DecToBin() {
    const InputDecimal = document.getElementById('InputDecimal').value;
    const ResultBinario = document.getElementById('resultado');
    
    // Verificar si el input es un número decimal válido
    if (isNaN(InputDecimal) || InputDecimal === '') {
        ResultBinario.textContent = 'Por favor, ingresa un número decimal válido.';
        return;
    }
    
    // Convertir el número decimal a binario
    const ValorBinario = parseInt(InputDecimal).toString(2);
    
    // Mostrar el resultado
    ResultBinario.textContent = `El valor binario es: ${ValorBinario}`;
}