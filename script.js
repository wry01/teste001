function registrar() {
    const usuario = document.getElementById('usuario').value;
    if (usuario) {
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('store-container').style.display = 'block';
        mostrarProdutos('streaming'); // Exibe produtos da categoria "Streaming" após o registro
    } else {
        alert('Por favor, preencha todos os campos!');
    }
}

function mostrarProdutos(categoria) {
    const produtos = {
        streaming: [
            { nome: 'Produto 1', descricao: 'Descrição do Produto 1', preco: 200, estoque: 10 },
            { nome: 'Produto 2', descricao: 'Descrição do Produto 2', preco: 120, estoque: 15 },
            { nome: 'Produto 3', descricao: 'Descrição do Produto 3', preco: 150, estoque: 8 }
        ],
        gaming: [
            { nome: 'Produto 1', descricao: 'Descrição do Produto 1', preco: 150, estoque: 12 },
            { nome: 'Produto 2', descricao: 'Descrição do Produto 2', preco: 180, estoque: 20 },
            { nome: 'Produto 3', descricao: 'Descrição do Produto 3', preco: 210, estoque: 7 }
        ],
        discord: [
            { nome: 'Produto 1', descricao: 'Descrição do Produto 1', preco: 100, estoque: 30 },
            { nome: 'Produto 2', descricao: 'Descrição do Produto 2', preco: 90, estoque: 25 },
            { nome: 'Produto 3', descricao: 'Descrição do Produto 3', preco: 80, estoque: 40 }
        ]
    };

    const produtosContainer = document.getElementById('produtos-container');
    produtosContainer.innerHTML = '';

    produtos[categoria].forEach(produto => {
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
