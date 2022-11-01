function tratrErroElancar(erro){
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        name: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratrErroElancar(e)
    } finally {
        console.log('final')
    }
    
}

const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)