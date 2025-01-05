document.getElementById('checkButton').addEventListener('click', async () => {
  const promoLinks = document.getElementById('promoLink').value.trim().split('\n');  // Dividir por linha para permitir múltiplos links
  const resultDiv = document.getElementById('result');
  
  if (promoLinks.length === 0 || promoLinks[0] === '') {
    resultDiv.textContent = 'Por favor, insira ao menos um link.';
    return;
  }

  resultDiv.innerHTML = 'Verificando...<br>'; // Exibe o processo de verificação

  // Simulação de verificação para cada link
  promoLinks.forEach(link => {
    setTimeout(() => {
      if (link.includes("discord")) {
        resultDiv.innerHTML += `${link} - Valid ✅<br>`;
      } else {
        resultDiv.innerHTML += `${link} - Inválido ❌<br>`;
      }
    }, 2000);  // Simulação de tempo de verificação
  });
});
