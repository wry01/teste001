document.getElementById('checkButton').addEventListener('click', async () => {
  const promoLinksText = document.getElementById('promoLinks').value.trim();
  const resultDiv = document.getElementById('result');

  if (!promoLinksText) {
    resultDiv.textContent = 'Por favor, insira alguns links.';
    return;
  }

  const promoLinks = promoLinksText.split('\n').map(link => link.trim()).filter(link => link);

  if (promoLinks.length === 0) {
    resultDiv.textContent = 'Por favor, insira links válidos.';
    return;
  }

  resultDiv.textContent = 'Verificando...';

  let results = '';
  
  promoLinks.forEach(link => {
    setTimeout(() => {
      try {
        const url = new URL(link);
        if (url.protocol === 'https:' || url.protocol === 'http:') {
          results += `<p class="valid">✅ ${link} - Válido</p>`;
        } else {
          results += `<p class="invalid">❌ ${link} - Inválido</p>`;
        }
      } catch (e) {
        results += `<p class="invalid">❌ ${link} - Inválido</p>`;
      }

      resultDiv.innerHTML = results;
    }, 2000);
  });
});
