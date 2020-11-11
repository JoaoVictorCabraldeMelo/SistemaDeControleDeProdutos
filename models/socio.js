const mongoose = require("mongoose");

const SocioSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
  },
  genero: {
    type: String,
    required: true,
  },
  telefone: [
    {
      type: String,
    },
  ],
  dataDeNascimento: {
    type: Date,
    required: true,
  },
  endereco: {
    type: String,
  },
  cartoes: [
    {
      valor: Number,
      bloqueado: Boolean,
      pago: Boolean,
      tipo: {
        type: String,
        enum: ["normal", "especial"],
      },
      faturas: [
        {
          produto: String,
          valor: Number,
          data: Date,
        },
      ],
    },
  ],
});

const Socio = mongoose.model("Socio", SocioSchema);
module.exports = Socio;
