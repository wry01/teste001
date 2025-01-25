function entrar() {
    const nomeUsuario = document.getElementById('usuario').value;

    if (nomeUsuario.trim() === '') {
        alert('Por favor, insira seu nome de usuário.');
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
            { nome: 'Produto 1', preco: 100, estoque: 5 },
            { nome: 'Produto 2', preco: 200, estoque: 2 },
            { nome: 'Produto 3', preco: 300, estoque: 8 }
        ],
        gaming: [
            { nome: 'Produto 4', preco: 150, estoque: 7 },
            { nome: 'Produto 5', preco: 250, estoque: 1 },
            { nome: 'Produto 6', preco: 350, estoque: 10 }
        ],
        discord: [
            { nome: 'Produto 7', preco: 50, estoque: 20 },
            { nome: 'Produto 8', preco: 150, estoque: 5 },
            { nome: 'Produto 9', preco: 250, estoque: 15 }
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

// Inicia a música automaticamente
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-music');
    audio.play().catch(() => {
        console.log('Autoplay bloqueado pelo navegador. Clique na página para ativar o áudio.');
    });
});
