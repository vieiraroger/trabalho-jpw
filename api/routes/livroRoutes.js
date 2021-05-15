'use strict'
module.exports = function(app) {
    var livroController = require('../controllers/livroController')

    app.route('/livro')
        .get(livroController.lista_todos_os_livros)
        .post(livroController.adiciona_um_livro)
    
    app.route('/livro/:livroId')
        .get(livroController.lista_um_livros)
        .put(livroController.atualiza_um_livro)
        .delete(livroController.remove_um_livro)

}