module.exports = {
    precoComDesconto(obj) {
        if (obj.desconto) {
            return obj.preco - (obj.preco * obj.desconto)
        }

        return obj.preco
    }
}