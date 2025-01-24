document.querySelectorAll('.comprar').forEach(button => {
  button.addEventListener('click', async () => {
    const produtoId = button.getAttribute('data-id');
    const mensagem = document.getElementById('mensagem');

    mensagem.textContent = 'Gerando chave Pix...';

    try {
      const response = await fetch('https://SEU_SERVIDOR/gerar-pagamento', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ produtoId }),
      });

      const data = await response.json();

      if (data.status === 'sucesso') {
        mensagem.innerHTML = `
          <p>Chave Pix: <strong>${data.pixKey}</strong></p>
          <p>Escaneie o QR Code para pagar!</p>
          <img src="${data.qrCodeImage}" alt="QR Code">
        `;
      } else {
        mensagem.textContent = 'Erro ao gerar pagamento.';
      }
    } catch (err) {
      mensagem.textContent = 'Erro de conexão.';
    }
  });
});
