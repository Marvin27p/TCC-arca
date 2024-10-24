const conectar = require("../database/conexao");

class Usuario {
  constructor({ Nome,Email,Senha }) {
    this.Nome = Nome;
    this.Email = Email;
    this.Senha = Senha;
  }

  async cadastrar() {
    try {
      const [cadastro] = await conectar("usuario")
        .insert({
          Nome: this.Nome,
          Email: this.Email,
          Senha: this.Senha,
        })
        .returning("nome");
      return cadastro;
    } catch (error) {
      return error;
    } finally {
      conectar.destroy;
    }
  }
}
module.exports = Usuario;
