const Usuario = require("../model/Usuario");

module.exports = {
  async cadastrarUsuario(request, response) {
    const usuario = new Usuario(request.body);
    console.log(request.body);
    const cadastrar = await usuario.cadastrar();
    
    return response.json(cadastrar);
  },
  async loginUsuario(request, response) {
    const usuario = new Usuario(request.body);
    console.log(request.body);
  
  }
};
