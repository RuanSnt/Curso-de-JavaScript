/*
 * ordem -> acessar o div, criar uma string que intereja com ele;
 *          modificar a string com os valores do calculo;
 *          enviar a string modificada para o div.
*/

function dive() {
   let div = document.getElementById("resultado").innerHTML;
   div = `Seu imc eh ${calcular().toFixed(2)} (${tamanho()}) `;
   document.getElementById("resultado").innerHTML = div;
}
// Seu imc eh 17,78 (abaixo do peso)
function calcular() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    return peso / (altura * altura);
}

function tamanho() {
    let imc = calcular();
    if(imc < 18.5){
        return 'Abaixo do peso';
    }
    if(imc >= 18.5 && imc < 24.9 ){
        return 'Peso Normal';
    }
    if(imc >= 24.9 && imc < 29.9 ){
        return 'Sobre peso';
    }
    if(imc >= 29.9 && imc < 34.9 ){
        return 'Obesidade!';
    }
    if(imc >= 34.9 && imc < 39.9 ){
        return 'Obesidade tipo II ';
    }
    if(imc >= 39.9){
        return 'Obesidade Grave!';
    }
}
