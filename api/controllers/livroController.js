'use strict'
var mongoose = require('mongoose')
var livro = mongoose.model('livro')

// GET ALL
exports.lista_todos_os_livros = function(req, res) {
    let pageSize = parseInt(req.query['limit']) || 100
    let page = parseInt(req.query['offset']) || 0
    let autorFitro = req.query['autor'] || false
    let query = {}
    if(autorFitro) {
        query = {"autor": autorFitro}
    }
    console.log(query)
    livro.find(query, {} ,{limit: pageSize, skip: page}, function(err, livros) {
        if(err) {
            res.status(400).send(err);
        }
        res.json(livros)
    })
}

// GET ID
exports.lista_um_livros = function(req, res) {
    livro.findOne({"_id": req.params.livroId}, function(err, livro) {
        if(err) {
            res.status(400).send(err);
        }
        res.json(livro)
    })
}

// POST
exports.adiciona_um_livro = function(req, res) {
    var novo_livro = new livro(req.body)
    novo_livro.save(function(err, livro) {
        if(err) {
            res.status(400).send(err);
        }
        res.json(livro)
    })
}

// PUT
exports.atualiza_um_livro = function(req, res) {
    livro.findOneAndUpdate({_id: req.params.livroId}, req.body, {new: true}, 
        function(err, livro) {
            if (err) {
                res.status(400).send(err);;
            }
            res.json(livro);
        });
}

// DELETE
exports.remove_um_livro = function(req, res) {
    livro.remove({_id: req.params.livroId}, function(err, livro) {
        if(err) {
            res.status(400).send(err);
        }
        res.json({"Mensagem": "Livro deletado com sucesso"})
    })
}