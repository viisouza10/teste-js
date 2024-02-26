function bankLevel2 (items){ 
    let amountTotal = 0;
    //escreva seu código aqui

    amountTotal = items.reduce((acc,item) => acc + item.value,0)


    return {
        amount:"retorne o valor total dos items ",
        debitExpensive:"retorne a descricao da compra mais cara",
        lenghtItems:"retorne o total de compras"
    }
}

module.exports = bankLevel2;