const mp = new MercadoPago('SUA_PUBLIC_KEY', { locale: 'pt-BR' });

document.querySelectorAll('.buy-button').forEach(button => {
  button.addEventListener('click', async () => {
    const title = button.getAttribute('data-title');
    const price = button.getAttribute('data-price');

    const preference = {
      items: [
        {
          title: title,
          quantity: 1,
          currency_id: 'BRL',
          unit_price: parseFloat(price)
        }
      ]
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

    mp.checkout({
      preference: {
        id: data.id
      }
    }).open();
  });
});
