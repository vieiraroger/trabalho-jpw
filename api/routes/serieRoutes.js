'use strict'
module.exports = function(app) {
    var serieController = require('../controllers/serieController')

    app.route('/serie')
        .get(serieController.lista_todos_os_series)
        .post(serieController.adiciona_um_serie)
    
    app.route('/serie/:serieId')
        .get(serieController.lista_um_series)
        .put(serieController.atualiza_um_serie)
        .delete(serieController.remove_um_serie)

}