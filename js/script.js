// Funcion para convertir de binario a decimal
function BinToDec() {
    const InputBinario = document.getElementById('InputBinToDec').value;
    const ResultDecimal = document.getElementById('resultBinToDec');
    
    // Verificar si el input es un número binario válido
    if (!/^[01]+$/.test(InputBinario)) {
        ResultDecimal.textContent = 'Por favor, ingresa un número binario válido.';
        return;
    }
    
    // Convertir el número binario a decimal
    const ValorDec = parseInt(InputBinario, 2);
    
    // Mostrar el resultado
    ResultDecimal.innerHTML = `<b>El valor Decimal es: ${ValorDec}</b>`;
}
// Funcion para convertir de Binario a octal
function BinToOct() {
    const InputBinario = document.getElementById('InputBinToOct').value;
    const ResultOctal = document.getElementById('resultBinToOct');
    
    // Verificar si el input es un número binario válido
    if (!/^[01]+$/.test(InputBinario)) {
        ResultOctal.textContent = 'Por favor, ingresa un número binario válido.';
        return;
    }
    
    // Convertir el número binario a decimal
    const ValorDec = parseInt(InputBinario, 2);
    
    // Convertir el número decimal a octal
    const ValorOct = ValorDec.toString(8);
    
    // Mostrar el resultado
    ResultOctal.innerHTML = `<b>El valor Octal es: ${ValorOct}</b>`;
}
// Funcion para convertir de Binario a HExa
function BinToHex() {
    const InputBinario = document.getElementById('InputBinToHex').value;
    const ResultHexa = document.getElementById('resultBinToHex');
    
    // Verificar si el input es un número binario válido
    if (!/^[01]+$/.test(InputBinario)) {
        ResultHexa.textContent = 'Por favor, ingresa un número binario válido.';
        return;
    }
    
    // Convertir el número binario a decimal
    const ValorDec = parseInt(InputBinario, 2);
    
    // Convertir el número decimal a Hexadecimal y ademas convierte las letras en mayuscula
    const ValorHex = ValorDec.toString(16).toUpperCase();
    
    // Mostrar el resultado
    ResultHexa.innerHTML = `<b>El valor Hexadecimal es: ${ValorHex}</b>`;
}
// Funcion para convertir de Octal a binario
function OctToBin() {
    const InputOctal = document.getElementById('InputOctToBin').value;
    const ResultBinario = document.getElementById('resultOctToBIn');
    
     // Verificar si el input es un número Octal válido (solo dígitos del 0 al 7)
     if (!/^[0-7]+$/.test(InputOctal)) {
        ResultBinario.textContent = 'Por favor, ingresa un número Octal válido. (Digitos validos desde el 0 al 7)';
        return;
    }

    // Convertir el número octal a decimal
    const ValorDec = parseInt(InputOctal, 8);

    // Convertir el número decimal a binario
    const ValorBinario = parseInt(ValorDec).toString(2);
    
    // Mostrar el resultado en negrita
    ResultBinario.innerHTML = `<b>El valor binario es: ${ValorBinario}</b>`;
}
//Funcion para convertir de octal a Decimal
function OctToDec() {
    const InputOctal = document.getElementById('InputOctToDec').value;
    const ResultDecimal = document.getElementById('resultOctToDec');
    
     // Verificar si el input es un número Octal válido (solo dígitos del 0 al 7)
     if (!/^[0-7]+$/.test(InputOctal)) {
        ResultDecimal.textContent = 'Por favor, ingresa un número Octal válido. (Digitos validos desde el 0 al 7)';
        return;
    }

    // Convertir el número octal a decimal
    const ValorDec = parseInt(InputOctal, 8);

    // Mostrar el resultado en negrita
    ResultDecimal.innerHTML = `<b>El valor Decimal es: ${ValorDec}</b>`;
}
// Funcion para convertir de octal a Hexa
function OctToHex() {
    const InputOctal = document.getElementById('InputOctToHex').value;
    const ResultHexadecimal = document.getElementById('resultOctToHex');
    
     // Verificar si el input es un número Octal válido (solo dígitos del 0 al 7)
     if (!/^[0-7]+$/.test(InputOctal)) {
        ResultHexadecimal.textContent = 'Por favor, ingresa un número Octal válido. (Digitos validos desde el 0 al 7)';
        return;
    }

    // Convertir el número octal a decimal
    const ValorDec = parseInt(InputOctal, 8);

    // Convertir el número decimal a hexadecimal
    const ValorHex = parseInt(ValorDec).toString(16).toUpperCase();
    
    // Mostrar el resultado en negrita
    ResultHexadecimal.innerHTML = `<b>El valor Hexadecimal es: ${ValorHex}</b>`;
}
// Funcion para convertir de Hexa a Bin
function HexToBin() {
    const InputHexadecimal = document.getElementById('InputHexToBin').value;
    const ResultBinario = document.getElementById('resultHexToBIn');
    
     // Verificar si el input es un número hexa válido
     if (!/^[0-9A-Fa-f]+$/.test(InputHexadecimal)) {
        ResultBinario.innerHTML = 'Por favor, ingresa un número hexadecimal válido.';
        return;
    }
    // Convertir el número hexa a decimal
    const ValorDec = parseInt(InputHexadecimal, 16);

    // Convertir el número decimal a binario
    const ValorBinario = ValorDec.toString(2);
    
    // Mostrar el resultado en negrita
    ResultBinario.innerHTML = `<b>El valor binario es: ${ValorBinario}</b>`;
}
// Funcion para convertir de Hexa a Oct
function HexToOct() {
    const InputHexadecimal = document.getElementById('InputHexToOct').value;
    const ResultOctal = document.getElementById('resultHexToOct');
    
     // Verificar si el input es un número hexa válido
     if (!/^[0-9A-Fa-f]+$/.test(InputHexadecimal)) {
        ResultOctal.innerHTML = 'Por favor, ingresa un número hexadecimal válido.';
        return;
    }
    // Convertir el número hexa a decimal
    const ValorDec = parseInt(InputHexadecimal, 16);

    // Convertir el número decimal a octal
    const ValorOctal = ValorDec.toString(8);
    
    // Mostrar el resultado en negrita
    ResultOctal.innerHTML = `<b>El valor Octal es: ${ValorOctal}</b>`;
}
// Funcion para convertir de Hexa a Oct
function HexToDec() {
    const InputHexadecimal = document.getElementById('InputHexToDec').value;
    const ResultDecimal = document.getElementById('resultHexToDec');
    
     // Verificar si el input es un número hexa válido
     if (!/^[0-9A-Fa-f]+$/.test(InputHexadecimal)) {
        ResultDecimal.innerHTML = 'Por favor, ingresa un número hexadecimal válido.';
        return;
    }
    // Convertir el número hexa a decimal
    const ValorDec = parseInt(InputHexadecimal, 16);

    // Mostrar el resultado en negrita
    ResultDecimal.innerHTML = `<b>El valor Decimal es: ${ValorDec}</b>`;
}
// Funcion para convertir de decimal a binario
function DecToBin() {
    const InputDecimal = document.getElementById('InputDecToBin').value;
    const ResultBinario = document.getElementById('resultDecToBIn');
    
    // Verificar si el input es un número decimal válido
    if (isNaN(InputDecimal) || InputDecimal === '') {
        ResultBinario.textContent = 'Por favor, ingresa un número decimal válido.';
        return;
    }
    
    // Convertir el número decimal a binario
    const ValorBinario = parseInt(InputDecimal).toString(2);
    
    // Mostrar el resultado
    ResultBinario.innerHTML = `<b>El valor binario es: ${ValorBinario}</b>`;
}
// Funcion para convertir de Decimal a Oct
function DecToOct() {
    const InputDecimal = document.getElementById('InputDecToOct').value;
    const ResultOctal = document.getElementById('resultDecToOct');
    
    // Verificar si el input es un número decimal válido
    if (isNaN(InputDecimal) || InputDecimal === '') {
        ResultOctal.textContent = 'Por favor, ingresa un número decimal válido.';
        return;
    }
    // Convertir el número decimal a octal
    const ValorOctal = parseInt(InputDecimal).toString(8);
    
    // Mostrar el resultado
    ResultOctal.innerHTML = `<b>El valor Octal es: ${ValorOctal}</b>`;
}
// Funcion para convertir de Decimal a Hexadecimal
function DecToHex() {
    const InputDecimal = document.getElementById('InputDecToHex').value;
    const ResultHexadecimal = document.getElementById('resultDecToHex');
    
    // Verificar si el input es un número decimal válido
    if (isNaN(InputDecimal) || InputDecimal === '') {
        ResultHexadecimal.textContent = 'Por favor, ingresa un número decimal válido.';
        return;
    }
    // Convertir el número decimal a octal
    const ValorHex = parseInt(InputDecimal).toString(16).toUpperCase();
    
    // Mostrar el resultado
    ResultHexadecimal.innerHTML = `<b>El valor Octal es: ${ValorHex}</b>`;
}
// Funciones para suma Binaria
function SumaBinaria(binario1, binario2) {
    // Convertir los números binarios a enteros decimales
    const valor1 = parseInt(binario1, 2);
    const valor2 = parseInt(binario2, 2);

    // Sumar los valores decimales
    const sumaDecimal = valor1 + valor2;

    // Convertir el resultado de la suma a binario
    const sumaBinaria = sumaDecimal.toString(2);

    return sumaBinaria;
}
function EjectutarSumaBinaria() {
    const binario1 = document.getElementById('InputBinSum1').value;
    const binario2 = document.getElementById('InputBinSum2').value;
    const resultadoSum = document.getElementById('resultBinSum');

    // Verificar si los inputs son números binarios válidos
    if (!/^[01]+$/.test(binario1) || !/^[01]+$/.test(binario2)) {
        resultadoSum.innerHTML = 'Por favor, ingresa números binarios válidos.';
        return;
    }

    // Realizar la suma binaria
    const suma = SumaBinaria(binario1, binario2);

    // Mostrar el resultado en negrita
    resultadoSum.innerHTML = `El resultado de la suma binaria es: <b>${suma}</b>`;
}
// Funciones para resta Binaria
function RestaBinaria(binario1, binario2) {
    // Convertir los números binarios a enteros decimales
    const valor1 = parseInt(binario1, 2);
    const valor2 = parseInt(binario2, 2);

    // restar los valores decimales
    const restaDecimal = valor1 - valor2;

    // Convertir el resultado de la resta a binario
    const RestaBinaria = restaDecimal.toString(2);

    return RestaBinaria;
}
function EjectutarRestaBinaria() {
    const binario1 = document.getElementById('InputBinResta1').value;
    const binario2 = document.getElementById('InputBinResta2').value;
    const resultadoResta = document.getElementById('resultBinResta');

    // Verificar si los inputs son números binarios válidos
    if (!/^[01]+$/.test(binario1) || !/^[01]+$/.test(binario2)) {
        resultadoResta.innerHTML = 'Por favor, ingresa números binarios válidos.';
        return;
    }

    // Realizar la resta binaria
    const resta = RestaBinaria(binario1, binario2);

    // Mostrar el resultado en negrita
    resultadoResta.innerHTML = `El resultado de la resta binaria es: <b>${resta}</b>`;
}
// Funciones para suma Octal
function SumaOctal(Octal1, Octal2) {
    // Convertir los números Octales a enteros decimales
    const valor1 = parseInt(Octal1, 8);
    const valor2 = parseInt(Octal2, 8);

    // Sumar los valores decimales
    const sumaDecimal = valor1 + valor2;

    // Convertir el resultado de la suma a octal
    const sumaOctal = sumaDecimal.toString(8);

    return sumaOctal;
}
function EjectutarSumaOctal() { 
    const Octal1 = document.getElementById('InputOctSum1').value;
    const Octal2 = document.getElementById('InputOctSum2').value;
    const resultadoSum = document.getElementById('resultOctSum');

    // Verificar si los inputs son números Octales válidos
    if (!/^[0-7]+$/.test(Octal1) || !/^[0-7]+$/.test(Octal2)) {
        resultadoSum.innerHTML = 'Por favor, ingresa números Octales válidos.';
        return;
    }

    // Realizar la suma Octal
    const suma = SumaOctal(Octal1, Octal2);

    // Mostrar el resultado en negrita
    resultadoSum.innerHTML = `El resultado de la suma Octal es: <b>${suma}</b>`;
}
// Funciones para resta octal
function RestaOctal(Octal1, Octal2) {
    // Convertir los números Octales a enteros decimales
    const valor1 = parseInt(Octal1, 8);
    const valor2 = parseInt(Octal2, 8);

    // restar los valores decimales
    const restaDecimal = valor1 - valor2;

    // Convertir el resultado de la resta a Octal
    const RestaOct = restaDecimal.toString(8);

    return RestaOct;
}
function EjectutarRestaOctal() {
    const Octal1 = document.getElementById('InputOctResta1').value;
    const Octal2 = document.getElementById('InputOctResta2').value;
    const resultadoResta = document.getElementById('resultOctResta');

    // Verificar si los inputs son números Octals válidos
    if (!/^[0-7]+$/.test(Octal1) || !/^[0-7]+$/.test(Octal2)) {
        resultadoResta.innerHTML = 'Por favor, ingresa números Octals válidos.';
        return;
    }

    // Realizar la resta Octal
    const resta = RestaOctal(Octal1, Octal2);

    // Mostrar el resultado en negrita
    resultadoResta.innerHTML = `El resultado de la resta Octal es: <b>${resta}</b>`;
}
// Funciones para Suma Hexa
function SumaHexadecimal(Hexadecimal1, Hexadecimal2) {
    // Convertir los números Hexadecimales a enteros decimales
    const valor1 = parseInt(Hexadecimal1, 16);
    const valor2 = parseInt(Hexadecimal2, 16);

    // Sumar los valores decimales
    const sumaDecimal = valor1 + valor2;

    // Convertir el resultado de la suma a Hexadecimal
    const sumaHexa = sumaDecimal.toString(16).toUpperCase();

    return sumaHexa;
}
function EjectutarSumaHexadecimal() { 
    const Hexadecimal1 = document.getElementById('InputHexSum1').value;
    const Hexadecimal2 = document.getElementById('InputHexSum2').value;
    const resultadoSum = document.getElementById('resultHexSum');

    // Verificar si los inputs son números Hexadecimales válidos
    if (!/^[0-9A-Fa-f]+$/.test(Hexadecimal1) || !/^[0-9A-Fa-f]+$/.test(Hexadecimal2)) {
        resultadoSum.innerHTML = 'Por favor, ingresa números Hexadecimales válidos.';
        return;
    }

    // Realizar la suma Hexadecimal
    const suma = SumaHexadecimal(Hexadecimal1, Hexadecimal2);

    // Mostrar el resultado en negrita
    resultadoSum.innerHTML = `El resultado de la suma Hexadecimal es: <b>${suma}</b>`;
}
// funciones para resta hexa
function RestaHexadecimal(Hexadecimal1, Hexadecimal2) {
    // Convertir los números Hexadecimales a enteros decimales
    const valor1 = parseInt(Hexadecimal1, 16);
    const valor2 = parseInt(Hexadecimal2, 16);

    // restar los valores decimales
    const restaDecimal = valor1 - valor2;

    // Convertir el resultado de la resta a Hexadecimal
    const RestaHex = restaDecimal.toString(16).toUpperCase();

    return RestaHex;
}
function EjectutarRestaHexadecimal() {
    const Hexadecimal1 = document.getElementById('InputHexResta1').value;
    const Hexadecimal2 = document.getElementById('InputHexResta2').value;
    const resultadoResta = document.getElementById('resultHexResta');

    // Verificar si los inputs son números Hexadecimals válidos
    if (!/^[0-9A-Fa-f]+$/.test(Hexadecimal1) || !/^[0-9A-Fa-f]+$/.test(Hexadecimal2)) {
        resultadoResta.innerHTML = 'Por favor, ingresa números Hexadecimales válidos.';
        return;
    }

    // Realizar la resta Hexadecimal
    const resta = RestaHexadecimal(Hexadecimal1, Hexadecimal2);

    // Mostrar el resultado en negrita
    resultadoResta.innerHTML = `El resultado de la resta Hexadecimal es: <b>${resta}</b>`;
}