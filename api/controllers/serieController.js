'use strict'
var mongoose = require('mongoose')
var serie = mongoose.model('serie')

// GET ALL
exports.lista_todos_os_series = function(req, res) {
    let pageSize = parseInt(req.query['limit']) || 100
    let page = parseInt(req.query['offset']) || 0
    let plataformaFiltro = req.query['streamming'] || false
    let query = {}
    if(plataformaFiltro) {
        query = {"streamming": plataformaFiltro}
    }
    console.log(query)
    serie.find(query, {} ,{limit: pageSize, skip: page}, function(err, series) {
        if(err) {
            res.status(400).send(err);
        }
        res.json(series)
    })
}

// GET ID
exports.lista_um_series = function(req, res) {
    serie.findOne({"_id": req.params.serieId}, function(err, serie) {
        if(err) {
            res.status(400).send(err);
        }
        res.json(serie)
    })
}

// POST
exports.adiciona_um_serie = function(req, res) {
    var novo_serie = new serie(req.body)
    novo_serie.save(function(err, serie) {
        if(err) {
            res.status(400).send(err);
        }
        res.json(serie)
    })
}

// PUT
exports.atualiza_um_serie = function(req, res) {
    serie.findOneAndUpdate({_id: req.params.serieId}, req.body, {new: true}, 
        function(err, serie) {
            if (err) {
                res.status(400).send(err);
            }
            res.json(serie);
        });
}

// DELETE
exports.remove_um_serie = function(req, res) {
    serie.remove({_id: req.params.serieId}, function(err, serie) {
        if(err) {
            res.status(400).send(err);
        }
        res.json({"Mensagem": "serie deletada com sucesso"})
    })
}