function inciar(){
    var comecar = Number(window.document.querySelector('input#txtn').value)
    var resultado = window.document.querySelector('div#resultado')
    if(comecar != 1 && comecar!=0){
        resultado.innerHTML = `Esse resultado não é valido, tente novamente`
    }
    else{
        if(comecar == 1){
            resultado.innerHTML = `inciar programa <br>`
            var tres = Number(3)
            for(multiplo = Number(3); multiplo <= 100; multiplo++){
                if(multiplo % tres == 0){
                    resultado.innerHTML += `${multiplo}<br>`
                }
            }
        }
        else{
            resultado.innerHTML = `fim do programa`
        }
    }
    
}

/*console.log('inciar')
for(m = 3; m <= 100; m++){
    var t = 3
    if((m % t) == 0){
        console.log(m)
    }
}*/

        