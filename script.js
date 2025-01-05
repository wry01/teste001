document.getElementById('checkButton').addEventListener('click', async () => {
  const promoLinks = document.getElementById('promoLink').value.trim().split('\n');
  const resultDiv = document.getElementById('result');
  
  if (promoLinks.length === 0 || promoLinks[0] === '') {
    resultDiv.textContent = 'Por favor, insira ao menos um link.';
    return;
  }

  resultDiv.innerHTML = 'Verificando...<br><br>';

  const discordPromoPattern = /^https:\/\/discord\.com\/billing\/promotions\/[a-zA-Z0-9]+$/;

  promoLinks.forEach(link => {
    setTimeout(() => {
      let status = discordPromoPattern.test(link) ? 'Valid ✅' : 'Inválid ❌';
      resultDiv.innerHTML += `${link} - ${status}<br>`;
      resultDiv.innerHTML += '------------------------------------------------<br>';
    }, 2000);
  });
});
