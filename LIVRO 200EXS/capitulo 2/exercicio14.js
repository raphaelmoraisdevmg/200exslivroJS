/*Escreva um programa que verifica se o ano e bissexto.*/

function AnoEBissexto(ano){
    // sera bissexto se for divido por 4, se terminar em 00, presicara ser divisivel por 400
    if(ano % 4 == 0 && ano%400 ==0){
        console.log('bissexto')
    }else{
        console.log('não é bissexto')
    }

}
AnoEBissexto(1996);
AnoEBissexto(2000);
AnoEBissexto(2004);
