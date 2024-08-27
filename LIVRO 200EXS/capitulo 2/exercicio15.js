/*Escreva um programa que verifica se uma palavra e palíndromo ou não */
function ePalindromo(palavra){
    let  palavraInvertida = palavra.split(" ").reverse().join(" "); //o split transforma em array, 
    //o reverse reverte a ordem da plavra e o join junta tudo em uma string
    if(palavra == palavraInvertida){
        console.log("é palindromo , "+palavraInvertida);
    }else{
        console.log("não é palindromo, "+palavraInvertida);
    }
}
ePalindromo('arara');
ePalindromo('gato')