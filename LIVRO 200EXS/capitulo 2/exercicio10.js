/**Escreva um programa que recebe duas notas de um aluno, 
 * calcula a média e imprime se o aluno foi aprovado ou reprovado
 *
 */
function calculaResultado(notaA,notaB){
    let media = (notaA+notaB)/2
    let resultado = '';
    if( media < 7){
        resultado = 'Reprovado';
    }else{
        resultado = 'Aprovado'
    }
    console.log("essa foi a média de notas do aluno: "+media);
    console.log(resultado)
}