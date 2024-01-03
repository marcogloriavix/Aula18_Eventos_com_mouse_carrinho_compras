//1ª - QUEM VAI PARTICIPAR DA INTERAÇÃO ( as variaveis) - captura de elementos do DOM (variáveis)
let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");
let btnAdicionarProduto01 = document.getElementById("btn-adicionar-produto-01")
let qtdProduto01 = document.getElementById("quantidade-produto-01")
let valorProduto  = 11.66


let subtotalInfo = {
    quantidade:1,
    valor:11.66,
};

//2º - Definir a Manipulação os elementos capturados (funções) - o que deve acontecer
function atualizarSubtotal(){
    quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
    valorSubtotal.innerText = subtotalInfo.valor.toFixed(2); 
    //Para restringir as casas decimais - tofixed()
}


//Para verificar o tipo de uma variavel, neste caso "qtdProduto01.value"
console.log(qtdProduto01.value)
console.log(typeof qtdProduto01.value)

atualizarSubtotal()

//função para adicionar produto:
function adicionarUm(){
     // Adicionar 1 à quantidade do produto
    qtdProduto01.value = Number(qtdProduto01.value) + 1
    // Number é para converter String para numero

    //Adicionar 1 à quantidade ao subtotal
    subtotalInfo.quantidade = subtotalInfo.quantidade + 1

    //Adicionar o valor do(s) produto(s) ao subtotal
    subtotalInfo.valor = subtotalInfo.valor + valorProduto

    //Para restringir as casas decimais
    

    //Atualizar o DOM
    atualizarSubtotal()
}
console.log(typeof qtdProduto01.value)



//3ª - Definir quando devem manipulados os elementos (EVENTOS) - quando a interação deve acontecer
// Para incrementar o valor do input com o botão.
//Logo preciso capturar o "botão" e "input" - linhas 4 e 5 do código

btnAdicionarProduto01.addEventListener("click", adicionarUm)
