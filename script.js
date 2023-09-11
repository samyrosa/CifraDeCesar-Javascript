var alph = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var keyInput = document.querySelector("#InputKey");
var TextoInput = document.querySelector("#InputTexto");
var ResultadoInpult = document.querySelector("#InputResult");

function encry() {
    let resultado
    let str = TextoInput.value;
    let key = parseInt(keyInput.value);
    str = str.toUpperCase();

    for (let caractere of str) {
        if (caractere === ' ') {
            if (resultado === null || resultado === undefined) {
                resultado = caractere
            } else {
                resultado = resultado + caractere
            }
        } else {
            let index = alph.findIndex(objeto => objeto === caractere) + key
            if (index > 25) {
                index = index - alph.length
            }
            if (resultado === null || resultado === undefined) {
                resultado = alph[index]
            } else {
                resultado = resultado + alph[index]
            }
        }
    }
    // console.log(resultado);
    ResultadoInpult.value = resultado;
}

function descry() {
    let resultado
    let str = TextoInput.value;
    let key = parseInt(keyInput.value);
    str = str.toUpperCase();

    for (let caractere of str) {
        if (caractere === ' ') {
            if (resultado === null || resultado === undefined) {
                resultado = caractere
            } else {
                resultado = resultado + caractere
            }
        } else {
            let index = alph.findIndex(objeto => objeto === caractere) - key
            if (index < 0) {
                index = index + alph.length
            }
            if (resultado === null || resultado === undefined) {
                resultado = alph[index]
            } else {
                resultado = resultado + alph[index]
            }
        }
    }
    // console.log(resultado);
    ResultadoInpult.value = resultado;

}