const express = require('express');
const cors = require('cors');
const mercadopago = require('mercadopago');

const app = express();
app.use(express.json());
app.use(cors());

// Configuração do Mercado Pago
mercadopago.configure({
  access_token: 'SEU_ACCESS_TOKEN_DO_MERCADO_PAGO',
});

app.post('/gerar-pagamento', async (req, res) => {
  const { produtoId } = req.body;

  const payment = {
    transaction_amount: 49.90, // Valor do produto
    description: 'Produto 1',
    payment_method_id: 'pix',
    payer: {
      email: 'cliente@exemplo.com',
    },
  };

  try {
    const response = await mercadopago.payment.create(payment);
    const { qr_code_base64, point_of_interaction } = response.body;
    res.json({
      status: 'sucesso',
      pixKey: point_of_interaction.transaction_data.qr_code,
      qrCodeImage: `data:image/png;base64,${qr_code_base64}`,
    });
  } catch (error) {
    res.json({ status: 'erro', error: error.message });
  }
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
