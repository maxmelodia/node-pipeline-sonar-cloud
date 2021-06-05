const soma = require('./soma')
const subtracao = require('./subtracao')
const multiplicacao = require('./multiplicacao')
const divisao = require('./divisao')

const a = 10
const b = 2

console.log(`${a} + ${b} = ${soma(a,b)}`)
console.log(`${a} - ${b} = ${subtracao(a,b)}`)
console.log(`${a} * ${b} = ${multiplicacao(a,b)}`)
console.log(`${a} / ${b} = ${divisao(a,b)}`)
