/*Escreva um programa que recebe um número e verifica se ele é positivo,negativo ou zero. */

function defineNumero(numero){
    if(numero > 0){
        retorno = "Positivo"
        
      
    }if(numero < 0){
        retorno = "Negativo"
        
    }
    if(numero == 0){
        retorno = 'Zero';
    }
    console.log(retorno)
}