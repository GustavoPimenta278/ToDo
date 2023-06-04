const produtos = [
    {
        nome: 'Teclado',
        valor: 250,
        estoque: 10
    },
    {
        nome: 'Mouse',
        valor: 150,
        estoque: 20
    }
];
const clientes = [
    {
        nome: 'Kelwin',
        saldo: 1500,
        produtos: []
    },
    {
        nome: 'Karla',
        saldo: 400,
        produtos: []
    }
];


// Criar produto (Create)
function createProduct(nome, preco, estoque) {
    const obj = {
        nome: nome,
        preco: preco,
        estoque: estoque
    }

    produtos.push(obj)
}


// Ver produto (Read)
function viewProduct() {
    console.log(produtos)
    return produtos
}


// Atualiza produto (Update)
function updateProduct(nome, novoValor, novoEstoque) {
    const index = produtos.findIndex(item => item.nome == nome)
    
    if (novoValor) {
        produtos[index].valor = novoValor
        
    }

    if (novoEstoque) {
        produtos[index].estoque = novoEstoque
    }
}

// Deletar produto (Delete)
function deleteProduct(nome) {
    const index = produtos.findIndex(item => item.nome == nome)
    produtos.splice(index, 1)
}


// Venda produto (Extra)
function buyProduct(nomeProduto, cliente, quantidade) {
    const indexProduto = produtos.findIndex(item => item.nome == nomeProduto)
    const indexCliente = clientes.findIndex(item => item.nome == cliente)
    const valorCompra = produtos[indexProduto].valor * quantidade

    if (clientes[indexCliente].saldo >= valorCompra) {
        clientes[indexCliente].saldo = clientes[indexCliente].saldo - valorCompra
        produtos[indexProduto].estoque = clientes[indexCliente].saldo - quantidade

        for (let i = 0; i <= quantidade; i++) {
            clientes[indexCliente].produtos.push(nomeProduto)
    
        }

        console.log(clientes[indexCliente]);
        console.log(produtos[indexProduto]);

    } else {
        throw new Error('Não foi possivel concluir a compra. Saldo insuficiente!');
    }


}

