const botaoComprar = document.getElementById("btnComprar")
const containerResultado = document.getElementById("resultado")

const produtos = [
    {
        nome: "Cachorro Quente",
        quantidade: 0,
        preco: 1.70
    },
    {
        nome: "Bauru Simples",
        quantidade: 0,
        preco: 2.30
    },
    {
        nome: "Bauru Com Ovos",
        quantidade: 0,
        preco: 2.60
    },
    {
        nome: "Hamburguer",
        quantidade: 0,
        preco: 2.40
    },
    {
        nome: "Cheeseburguer",
        quantidade: 0,
        preco: 2.50
    },
    {
        nome: "Refrigerante",
        quantidade: 0,
        preco: 1
    }
]
let valorFinal = 0

botaoComprar.addEventListener('click',function(){
   let quantidadeElementos = document.querySelectorAll(".quantInput")
    
   ;[...quantidadeElementos].forEach(elemento => {
        let quant

        if (elemento.value == 0) return

        switch(elemento.id) {
            case "prod1":
                setQuantidade(elemento.id, elemento.value)
                quant = produtos[0].quantidade

                valorFinal += (quant * produtos[0].preco)
            case "prod2":
                setQuantidade(elemento.id, elemento.value)
                quant = produtos[1].quantidade

                valorFinal += (quant * produtos[1].preco)

            case "prod3":
                setQuantidade(elemento.id, elemento.value)
                quant = produtos[2].quantidade

                valorFinal += (quant * produtos[2].preco)

            case "prod4":
                setQuantidade(elemento.id, elemento.value)
                quant = produtos[3].quantidade

                valorFinal += (quant * produtos[3].preco)

            case "prod5":
                setQuantidade(elemento.id, elemento.value)
                quant = produtos[4].quantidade

                valorFinal += (quant * produtos[4].preco)

            case "prod6":
                setQuantidade(elemento.id, elemento.value)
                quant = produtos[5].quantidade

                valorFinal += (quant * produtos[5].preco)

                break
        }
   })

   mostrarValor()
})

function setQuantidade(prodId, quantidade) {
    switch(prodId) {
        case "prod1":
            produtos[0].quantidade = quantidade

            break
        case "prod2":
            produtos[1].quantidade = quantidade

                break
        case "prod3":
            produtos[2].quantidade = quantidade

                break
        case "prod4":
            produtos[3].quantidade = quantidade

                    break
        case "prod5":
            produtos[4].quantidade = quantidade

            break
        case "prod6":
            produtos[5].quantidade = quantidade

            break
    }
}

function mostrarValor() {

    
    containerResultado.innerHTML = `
        <h2>Nota</h2>
        <span class='sub-container-result'>
        ${produtos[0].nome} | Quantidade: ${produtos[0].quantidade} | Valor: ${(produtos[0].quantidade * produtos[0].preco).toFixed(2)}
        </span><br><br>

        <span class='sub-container-result'>
        ${produtos[1].nome} | Quantidade: ${produtos[1].quantidade} | Valor: ${(produtos[1].quantidade * produtos[1].preco).toFixed(2)}
        </span><br><br>

        <span class='sub-container-result'>
        ${produtos[2].nome} | Quantidade:${produtos[2].quantidade} | Valor: ${(produtos[2].quantidade * produtos[2].preco).toFixed(2)}
        </span><br><br>

        <span class='sub-container-result'>
        ${produtos[3].nome} | Quantidade: ${produtos[3].quantidade} | Valor: ${(produtos[3].quantidade * produtos[3].preco).toFixed(2)}
        </span><br><br>

        <span class='sub-container-result'>
        ${produtos[4].nome} | Quantidade: ${produtos[4].quantidade} | Valor: ${(produtos[4].quantidade * produtos[4].preco).toFixed(2)}<br><br>
        </span>

        <span class='sub-container-result'>
        ${produtos[5].nome} | Quantidade: ${produtos[5].quantidade} | Valor: ${(produtos[5].quantidade * produtos[5].preco).toFixed(2)}<br><br>
        </span>

        <span id='totalPag'>
            Total a pagar: R$${valorFinal.toFixed(2)}
        </span>
        
    `

    const sub_container_resp = document.querySelectorAll(".sub-container-result")
    let index = 0

    ;[...sub_container_resp].forEach(container => {

        if (produtos[index].quantidade === 0) {
            container.style.textDecoration = 'line-through'
        }
        index++

    })
    containerResultado.style.display = "block"
}