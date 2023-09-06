//window.alert('Olá, mundo!') // mensagem de alerta 
//window.confirm('Eu sou lindo?') // mensagem com pedido de confirmação
//var nome = window.prompt('Qula o seu nome?') // pede alguma escrita
//window.alert('é um prazer te conhecer ' + nome) // + em string tem função de concatenação
var n1 = Number.parseFloat(window.prompt('digite um numero: ')) // Number.parseFloat - força a variavel a ser do tipo real
var n2 = Number.parseInt(window.prompt('digite outro numero: ')) //Number.parseInt - força a variavel a ser do tipo inteira
var n3 = Number(window.prompt('digite outro numero: ')) // O JS descobre sozinho qaul o tipo da variavel.
var soma = n1 + n2
window.alert(soma)
// resulta numa concatenação pois por via das duvidas o js trata uma variavel como string. (string + string = concatenação)
// para resolver esse problema é preciso transformar as variaveis em numeros. (number + number = soma)
// templete string - node js ${} é como o pritn formatado:  olhar se naõ existe uma forma mais facil de fazer como no pythion que é só formatar o print 