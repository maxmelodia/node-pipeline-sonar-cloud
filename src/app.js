const soma = require('./soma')
const subtracao = require('./subtracao')
const multiplicacao = require('./multiplicacao')
const divisao = require('./divisao')

function print(a,b) {
    console.log(`${a} + ${b} = ${soma(a,b)}`)
    console.log(`${a} - ${b} = ${subtracao(a,b)}`)
    console.log(`${a} * ${b} = ${multiplicacao(a,b)}`)
    console.log(`${a} / ${b} = ${divisao(a,b)}`)

    //testando bad smells
    if (1==1){
        if (2==2){
            if (3==3){
                if (4==4){
                    if (5==5){
                        if (6==6){
                            if (7==7){
                                if (8==8){
                                    if (9==9){
                                        if(10==10){
                                            console.log('Testando badsmells -> código hadouken!')
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

}

print(10,2);

module.exports = print