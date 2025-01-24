function fazerLogin() {
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    if (usuario && senha) {
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        carregarProdutos();
    } else {
        alert('Por favor, insira suas credenciais!');
    }
}

function carregarProdutos() {
    const produtos = [
        { id: 1, nome: 'Produto A', descricao: 'Descrição do Produto A', preco: 50.00, estoque: 10 },
        { id: 2, nome: 'Produto B', descricao: 'Descrição do Produto B', preco: 75.00, estoque: 5 },
        { id: 3, nome: 'Produto C', descricao: 'Descrição do Produto C', preco: 100.00, estoque: 3 }
    ];

    const produtosContainer = document.getElementById('produtos-container');
    produtosContainer.innerHTML = '';

    produtos.forEach(produto => {
        const produtoDiv = document.createElement('div');
        produtoDiv.classList.add('produto');
        produtoDiv.innerHTML = `
            <h2>${produto.nome}</h2>
            <p>${produto.descricao}</p>
            <span>R$ ${produto.preco.toFixed(2)}</span><br>
            <span>Estoque: ${produto.estoque}</span>
        `;
        produtosContainer.appendChild(produtoDiv);
    });
}

function mostrarProdutos() {
    carregarProdutos();
}
