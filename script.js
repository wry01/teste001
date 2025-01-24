// Seleciona o contêiner para as partículas de neve
const snowContainer = document.getElementById('snow-container');

// Função para criar uma partícula de neve
function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');

  // Estilo inicial da neve
  snowflake.style.left = Math.random() * 100 + 'vw'; // Posição horizontal aleatória
  snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // Duração aleatória
  snowflake.style.opacity = Math.random(); // Opacidade aleatória
  snowflake.style.fontSize = Math.random() * 10 + 10 + 'px'; // Tamanho aleatório

  snowflake.textContent = '❄'; // Símbolo de neve
  snowContainer.appendChild(snowflake);

  // Remove a neve quando a animação termina
  setTimeout(() => {
    snowflake.remove();
  }, 5000);
}

// Cria novas partículas de neve continuamente
setInterval(createSnowflake, 200);

// Função para registrar o usuário
function registrar() {
  const usuario = document.getElementById('usuario').value;
  console.log("Botão de registrar clicado!");

  if (usuario) {
    console.log("Usuário registrado:", usuario);
    // Esconde a tela de registro e mostra a tela da loja
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('store-container').style.display = 'block';
    mostrarProdutos('streaming'); // Exibe produtos da categoria "Streaming"
  } else {
    alert('Por favor, preencha o campo de nome de usuário!');
  }
}

// Função para exibir produtos com base na categoria
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
  produtosContainer.innerHTML = ''; // Limpa os produtos anteriores

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
