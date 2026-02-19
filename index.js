
const express = require("express");
const app = express();

app.use(express.json());

// rota principal
app.get("/", (req, res) => {
  res.send("Webhook funcionando 🚀");
});

// webhook POST com segurança
app.post("/webhook", (req, res) => {
  const tokenRecebido = req.query.token;
  const tokenCorreto = process.env.WEBHOOK_TOKEN;

  if (!tokenCorreto) {
    return res.status(500).json({ erro: "WEBHOOK_TOKEN não configurado" });
  }

  if (tokenRecebido !== tokenCorreto) {
    return res.status(401).json({ erro: "Token inválido" });
  }

  console.log("Webhook recebido:", req.body);

  res.json({ sucesso: true, dados: req.body });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Servidor rodando na porta", port);
});
