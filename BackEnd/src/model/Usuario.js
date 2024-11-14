const conectar = require("../database/conexao");

class Usuario {
  constructor({ Nome,Email,Senha }) {
    this.Nome = Nome;
    this.Email = Email;
    this.Senha = Senha;
  }

  async cadastrar() {
    try {
      const usuarioExistente = await conectar("usuario")
        .where({Email: this.Email})
        .first();

        if(usuarioExistente) {
          return {
            success: false,
            message: 'Erro no cadastro'
          };
        }

      const [cadastro] = await conectar("usuario")
        .insert({
          Nome: this.Nome,
          Email: this.Email,
          Senha: this.Senha,
        })
        .returning("nome");
      return {
        success: true,
        data: cadastro
      };
    } catch (error) {
      return {
        success: false,
        message: 'Erro ao cadastrar usuario'
      };
    } finally {
      conectar.destroy();
    }
  }
}
module.exports = Usuario;
