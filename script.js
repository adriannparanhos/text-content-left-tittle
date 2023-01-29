function alterarTexto() {
    var textoNovo = document.getElementById('card_number').value
    document.getElementsByClassName('number').innerHTML = textoNovo
}