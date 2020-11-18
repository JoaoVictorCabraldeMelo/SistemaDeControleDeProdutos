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
  rg: {
    type: String,
    required: true,
  },
  genero: {
    type: String,
    required: true,
  },
  filiacao: {
    type: String,
    required: true,
  },
  estado_civil: {
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
    type: Map,
    rua: {
      type: String,
      required: true,
    },
    numero: {
      type: Number,
      required: true,
    },
    cep: {
      type: String,
      required: true,
    },
    cidade: {
      type: String,
      required: true,
    },
    estado: {
      type: String,
      required: true,
    },
    pais: {
      type: String,
    },
  },
  cartoes: [
    {
      type: Map,
      valor: Number,
      bloqueado: Boolean,
      pago: Boolean,
      tipo: {
        type: String,
        enum: ["normal", "especial"],
      },
      compras: [
        {
          produto: String,
          valor: Number,
          data: Date,
        },
      ],
    },
  ],
  naturalidade: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  escolaridade: {
    type: String,
    required: true,
  },
  cargo: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    enum: ["dependente", "comun"],
    required: true,
  },
});

const Socio = mongoose.model("Socio", SocioSchema);
module.exports = Socio;
