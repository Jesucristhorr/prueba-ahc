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
    message: "AA",
  });
});

app.get("/prueba", (req, res) => {
  res.json({
    message: "Mensaje AHC",
  });
});
app.listen(3000, () => console.log("Servidor inicializado."));
