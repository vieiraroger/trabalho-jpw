'use strict'
module.exports = function(app) {
    var pessoaController = require('../controllers/pessoaController')

    app.route('/pessoa')
        .get(pessoaController.lista_todos_os_pessoas)
        .post(pessoaController.adiciona_um_pessoa)
    
    app.route('/pessoa/:pessoaId')
        .get(pessoaController.lista_um_pessoas)
        .put(pessoaController.atualiza_um_pessoa)
        .delete(pessoaController.remove_um_pessoa)

}