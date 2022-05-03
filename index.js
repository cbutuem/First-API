const express = require("express");
const app = express();

// Preparar os nossos endpoints (rotas do back-end) antes do listen

//Configurar o nosso back-end para receber JSON
app.use(express.json());

// Criando primeira rota
const playList = require("./RouteSpotfy/playList");
app.use("/playlist", playList);

app.listen(4000, () => {
  console.log("Server ta funcionando de boa na lagoa!");
});
