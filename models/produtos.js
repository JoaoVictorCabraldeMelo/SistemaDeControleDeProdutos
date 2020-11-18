const mongoose = require("mongoose");

const ProdutoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  preco: {
    type: Number,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
});

const Produto = mongoose.Model("Produto", ProdutoSchema);
module.exports = Produto;
