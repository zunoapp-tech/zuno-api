const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Webhook funcionando 🚀");
});

app.post("/webhook", (req, res) => {
  console.log("Recebi no webhook:", req.body);
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
