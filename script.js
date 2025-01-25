function login() {
    const nomeUsuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    if (nomeUsuario.trim() === '' || senha.trim() === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    document.getElementById('overlay').style.display = 'none';
    document.getElementById('store-container').style.display = 'block';
}

function mostrarProdutos(categoria) {
    const produtosContainer = document.getElementById('produtos-container');
    produtosContainer.innerHTML = `<h2>Produtos da categoria: ${categoria}</h2>`;

    const produtos = {
        streaming: [
            { nome: 'Produto 1', preco: 200, estoque: 10 },
            { nome: 'Produto 2', preco: 150, estoque: 5 },
            { nome: 'Produto 3', preco: 120, estoque: 20 }
        ],
        gaming: [
            { nome: 'Produto 4', preco: 300, estoque: 7 },
            { nome: 'Produto 5', preco: 350, estoque: 4 },
            { nome: 'Produto 6', preco: 400, estoque: 15 }
        ],
        discord: [
            { nome: 'Produto 7', preco: 50, estoque: 50 },
            { nome: 'Produto 8', preco: 75, estoque: 25 },
            { nome: 'Produto 9', preco: 100, estoque: 30 }
        ]
    };

    produtos[categoria].forEach(produto => {
        const produtoDiv = document.createElement('div');
        produtoDiv.innerHTML = `
            <h3>${produto.nome}</h3>
            <p>Preço: R$ ${produto.preco}</p>
            <p>Estoque: ${produto.estoque}</p>
        `;
        produtosContainer.appendChild(produtoDiv);
    });
}
