/*Escreva um programa que verifca se uma pessoa pode votar com base na idade*/
function verificaVoto(idade){
    if(idade){
        if(idade <16 || idade > 70){
            console.log('não vota')
        }else{
            if(idade == 16 || idade ==17){
                console.log('voto facultativo')
            }
            if(idade >= 18 && idade <=70){
                console.log('voto obrigatório')
            }
        }
    }
}
verificaVoto(16); //voto facultativo
verificaVoto(33);// está habilitado a votar
verificaVoto(94);// não vota;

