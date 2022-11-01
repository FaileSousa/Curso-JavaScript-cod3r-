function gerarNumerosEntre(min, max, tempo) {
    if(min > max) [max, min] = [min, max]
    return new Promise(resolve => {
        setTimeout(function() {
            const fator = max - min + 1
        const aletario = parseInt(Math.random() * fator) + min
        resolve(aletario)
        }, tempo)        
    })
}

function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 500),
    ])
}

console.time('promise')

gerarVariosNumeros()
    .then(console.log)
    .then(() => {
        console.timeEnd('promise')
    })
