// Import das bibliotecas
const express = require('express');
const cors = require('cors');

// Inicializa o servidor express
const app = express();
// Define a porta do servidor
const port = 8000;

// Tipo da saída
app.use(cors());
app.use(express.json());

// Rota do serviço de mensagem
app.get("/mensagem", (request, response) => {
  response.json({ mensagem: "Alo Mundo!" });
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor ouvindo a porta ${port}`);
});