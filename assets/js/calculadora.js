function insert(num){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean(){
    document.getElementById('resultado').innerHTML = "";
}

function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

function calcular() {
    let operacao = '';
    try {
        let result = eval(operacao);  // Usa a função eval para calcular a operação
        resultado.innerHTML = result.toFixed(2);  // Exibe o resultado com duas casas decimais
        operacao = result.toFixed(2);  // Atualiza a operação com o resultado para futuras operações
    } catch (error) {
        resultado.innerHTML = 'Erro';  // Exibe uma mensagem de erro se a avaliação falhar
    }
}

