/*Escreva um programa que calcula o IMC de uma pessoa e imprime uma mensagem */
//todo exercicio contem uma descrição que mostra os detalhes que são necessários.
// nos proxímos dias estarei corrigindo a ordem dos exercicios.
function calculaImc(altura,peso){
    alturaQuadrada=altura * altura;
    console.log(alturaQuadrada);
    let imcCalculado  = peso/alturaQuadrada;
    if(imcCalculado < 18.5){
        console.log("Abaixo do peso: ",imcCalculado);
    }else if(imcCalculado == 18.5 && imcCalculado<25){
        console.log("Peso normal: ",imcCalculado);
    }else if(imcCalculado == 25 && imcCalculado <30){
        console.log("Sobre peso: ",imcCalculado);
    }else if(imcCalculado > 30){
        console.log('Obesidade: ',imcCalculado);
    }
}

