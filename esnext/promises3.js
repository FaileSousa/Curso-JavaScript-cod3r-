function gerarNumerosEntre(min, max) {
    if(min > max) {
        [max, min] = [min, max]        
    }
    return new Promise(resolve => {
        const fator = max - min +1
        const aletario = parseInt(Math.random() * (max - min + fator))
        resolve(aletario)
    })
}

gerarNumerosEntre(1, 60)
    .then(num => num * 10)
    .then(numX10 => `O numero gerado foi ${numX10}`)
    .then(console.log)