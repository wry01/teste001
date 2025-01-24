let carrinho = [];

function carregarProdutos() {
  fetch('/produtos')
    .then(response => response.json())
    .then(produtos => {
      const produtosContainer = document.querySelector('.produtos');
      produtosContainer.innerHTML = '';
      produtos.forEach(produto => {
        const produtoDiv = document.createElement('div');
        produtoDiv.classList.add('produto');
        
        produtoDiv.innerHTML = `
          <img src="https://via.placeholder.com/200" alt="${produto.nome}">
          <h2>${produto.nome}</h2>
          <p>${produto.descricao}</p>
          <span class="preco">R$ ${produto.preco.toFixed(2)}</span>
          <button class="comprar" data-id="${produto.id}">Adicionar ao Carrinho</button>
        `;
        
        produtosContainer.appendChild(produtoDiv);
      });

      document.querySelectorAll('.comprar').forEach(button => {
        button.addEventListener('click', (event) => {
          const produtoId = event.target.dataset.id;
          adicionarAoCarrinho(produtoId);
        });
      });
    });
}

function adicionarAoCarrinho(idProduto) {
  fetch(`/produtos/${idProduto}`)
    .then(response => response.json())
    .then(produto => {
      carrinho.push(produto);
      atualizarCarrinho();
    });
}

function atualizarCarrinho() {
  const carrinhoContainer = document.querySelector('.carrinho');
  carrinhoContainer.innerHTML = '';
  
  carrinho.forEach(produto => {
    const itemCarrinho = document.createElement('div');
    itemCarrinho.classList.add('item-carrinho');
    itemCarrinho.innerHTML = `
      <h3>${produto.nome}</h3>
      <span class="preco">R$ ${produto.preco.toFixed(2)}</span>
      <button class="remover" data-id="${produto.id}">Remover</button>
    `;
    carrinhoContainer.appendChild(itemCarrinho);
  });

  const total = carrinho.reduce((acc, produto) => acc + produto.preco, 0);
  document.querySelector('.total').textContent = `Total: R$ ${total.toFixed(2)}`;

  document.querySelectorAll('.remover').forEach(button => {
    button.addEventListener('click', (event) => {
      const produtoId = event.target.dataset.id;
      removerDoCarrinho(produtoId);
    });
  });
}

function removerDoCarrinho(idProduto) {
  carrinho = carrinho.filter(produto => produto.id !== idProduto);
  atualizarCarrinho();
}

function finalizarCompra() {
  const dadosCompra = {
    itens: carrinho,
    total: carrinho.reduce((acc, produto) => acc + produto.preco, 0)
  };

  fetch('/comprar', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dadosCompra)
  })
  .then(response => response.json())
  .then(resposta => {
    if (resposta.status === 'Compra Aprovada') {
      alert('Compra aprovada! Obrigado pela sua compra.');
      carrinho = [];
      atualizarCarrinho();
    } else {
      alert('O pagamento não foi confirmado. Tente novamente.');
    }
  });
}

document.querySelector('.finalizar-compra').addEventListener('click', finalizarCompra);

window.onload = carregarProdutos;
