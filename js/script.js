const dolar = 5.70;
function convertReal(){
    let valor_real = parseFloat(document.getElementById('convert_real').value);
    let texto = document.getElementById('resultado');
    let result = valor_real / dolar;
    texto.innerHTML = 'O seu valor em R$ convertido para dolar é = ' + result.toFixed(2);
}

function convertDolar(){
    let valor_dolar = parseFloat(document.getElementById('convert_dolar').value);
    let texto = document.getElementById('resultado2');
    let result = valor_dolar * dolar;
    texto.innerHTML = 'O seu valor em $ convertido para real é = ' + result.toFixed(2);
}