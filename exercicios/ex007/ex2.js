/*2) Escrever um algoritmo para exibir os múltiplos de 11, a soma e a média dos múltiplos de 11, em ordem
decrescente (inversa), compreendidos entre o intervalo: [200 100].*/

function resultado(){
    var valor = Number(window.document.querySelector('input#number_txt').value)
    var result = window.document.querySelector('div#resultado')
    var soma = Number(0)
    var contador = Number(0)
    if(valor != 1 && valor != 0){
        result.innerHTML = 'valor invalido, tente novamente'
    }
    else{
        if(valor == 1){
            result.innerHTML += `multiplos de 11 entre 100 e 200:<br> `
            for(mult = Number(200); mult>=100; mult-- ){
                var onze = Number(11)
                if(mult % onze == 0){
                    result.innerHTML += `${mult} <br>`
                    soma += mult
                    contador++
                }
            }
            result.innerHTML += `soma dos multiplos de 11: ${soma} <br>`
            result.innerHTML += `média dos multiplos de 11: ${(soma/contador)}`
        }
        else{
            result.innerHTML = `fim do programa`
        }
    }
}