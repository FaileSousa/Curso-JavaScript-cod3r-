const soma = function(x, y){
    return x + y
}

const imprirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprirResultado(3, 4)
imprirResultado(3, 4, soma)
imprirResultado(3, 4, function (x, y){
    return x - y
})
imprirResultado(3, 4, (x, y) => x * y)

const pessoa = {
    falar: function () {
        console.log('Opa')
    }
}

pessoa.falar()