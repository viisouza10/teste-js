
const bankLevel1 = require("./src/bank-level1")
const bankLevel2 = require("./src/bank-level2")
const bankLevel3 = require("./src/bank-level3")

// NÃO MECHER NESTE ARQUIVO

describe("BankLevel1", function() {
    test("ser possivel adicionar e remover  dinheiro na minha carteira",function(){
        const result = bankLevel1([-70,40,10])
        expect(result).toBe(-20)
    })
})

describe("BankLevel2", function() {
    test("ser possivel adicionar e remover  dinheiro na minha carteira",function(){
        const result = bankLevel2([
            {value:-70,description:"livro"},
            {value:-40,description:"almoço"},
            {value:10,description:"mesada"}
        ])
        expect(result.amount).toBe(-100)
        expect(result.debitExpensive).toBe("livro")
        expect(result.lenghtItems).toBe(2)
    })
})
describe("BankLevel3", function() {
    test("ser possivel adicionar e remover  dinheiro na minha carteira brasileira",function(){
        const wallet = new bankLevel3("Vinicius",10,'pt-br')

        wallet.addMoney(100)
        wallet.addMoney(177)
        wallet.addMoney(1277)
        wallet.removeMoney(400)

        expect(wallet.getMoney()).toBe(1164)
        expect(wallet.getWelcome()).toBe("Olá Vinicius seu saldo atual é de R$ 1.164,00")

    })
})


