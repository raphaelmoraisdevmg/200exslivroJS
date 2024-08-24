/*escreva um programa que verifica a situação de um estudante de acordo com sua média final. 
 se a media for igual o superior a 7 Aprovado se ficar entre 5 e 6.9 recuperação
 e menor que 5 reprovado*/

 function calculaMedia(notaA,notaB){
    let media = 0;
    media = (notaA + notaB) / 2
    if(media >= 7 ){
        console.log('Aprovado');
    }else if(media >=5 && media <=6.9){
        console.log('Recuperação')
    }else{
        console.log('Reprovado')
    }
 }