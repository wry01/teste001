const mp = new MercadoPago('SUA_PUBLIC_KEY', { locale: 'pt-BR' });

document.querySelectorAll('.buy-button').forEach(button => {
  button.addEventListener('click', () => {
    const title = button.getAttribute('data-title');
    const price = button.getAttribute('data-price');

    document.getElementById('product-info').innerText = `Produto: ${title} - Valor: R$ ${price}`;
    document.getElementById('confirmation-modal').classList.remove('hidden');

    document.getElementById('confirm-purchase').onclick = async () => {
      document.getElementById('confirmation-modal').classList.add('hidden');
      document.getElementById('pix-info').classList.remove('hidden');

      const preference = {
        items: [
          {
            title: title,
            quantity: 1,
            currency_id: 'BRL',
            unit_price: parseFloat(price)
          }
        ],
        payment_methods: {
          pix: {}
        }
      };

      const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer SEU_ACCESS_TOKEN',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(preference)
      });

      const data = await response.json();
      document.getElementById('pix-key').innerText = data.id;

      const interval = setInterval(async () => {
        const statusResponse = await fetch(`https://api.mercadopago.com/v1/payments/${data.id}`, {
          headers: {
            'Authorization': 'Bearer SEU_ACCESS_TOKEN'
          }
        });
        const status = await statusResponse.json();

        if (status.status === 'approved') {
          clearInterval(interval);
          alert('Pagamento aprovado! Compra realizada com sucesso!');
          document.getElementById('pix-info').classList.add('hidden');
        }
      }, 5000);
    };

    document.getElementById('cancel-purchase').onclick = () => {
      document.getElementById('confirmation-modal').classList.add('hidden');
    };
  });
});
