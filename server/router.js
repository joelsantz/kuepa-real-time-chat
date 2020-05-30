const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ response: "Servidor arriba e iniciado..." }).status(200);
});

module.exports = router;