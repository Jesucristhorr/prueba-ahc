const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Hola mundo!",
  });
});

app.get("/api", (req, res) => {
  res.json({
    message: "Se supone que soy una api, ¡hola!",
  });
});

app.listen(3000, () => console.log("Servidor inicializado."));
