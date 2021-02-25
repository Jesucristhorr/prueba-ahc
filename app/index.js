const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Hello world!",
  });
});

app.listen(3000, () => console.log("Servidor inicializado."));
