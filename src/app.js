const soma = require('./soma')
const subtracao = require('./subtracao')
const multiplicacao = require('./multiplicacao')
const divisao = require('./divisao')

function print(a,b) {
    console.log(`${a} + ${b} = ${soma(a,b)}`)
    console.log(`${a} - ${b} = ${subtracao(a,b)}`)
    console.log(`${a} * ${b} = ${multiplicacao(a,b)}`)
    console.log(`${a} / ${b} = ${divisao(a,b)}`)
}

print(10,2);

module.exports = print