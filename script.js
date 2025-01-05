document.getElementById('checkButton').addEventListener('click', async () => {
  const promoLink = document.getElementById('promoLink').value.trim();
  const resultDiv = document.getElementById('result');

  if (!promoLink) {
    resultDiv.textContent = 'Por favor, insira um link.';
    return;
  }

  resultDiv.textContent = 'Verificando...';

  // Simulação de verificação
  setTimeout(() => {
    if (promoLink.includes("discord")) {
      resultDiv.textContent = '✅ Link válido.';
    } else {
      resultDiv.textContent = '❌ Link inválido.';
    }
  }, 2000);
});
