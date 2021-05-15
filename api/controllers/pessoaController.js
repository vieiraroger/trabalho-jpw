'use strict'
var mongoose = require('mongoose')
var pessoa = mongoose.model('pessoa')

// GET ALL
exports.lista_todos_os_pessoas = function(req, res) {
    let pageSize = parseInt(req.query['limit']) || 100
    let page = parseInt(req.query['offset']) || 0
    let nomeFiltro = req.query['nome'] || false
    let query = {}
    if(nomeFiltro) {
        query = {"nome": nomeFiltro}
    }
    console.log(query)
    pessoa.find(query, {} ,{limit: pageSize, skip: page}, function(err, pessoas) {
        if(err) {
            res.status(400).send(err);
        }
        res.json(pessoas)
    })
}

// GET ID
exports.lista_um_pessoas = function(req, res) {
    pessoa.findOne({"_id": req.params.pessoaId}, function(err, pessoa) {
        if(err) {
            res.status(400).send(err);
        }
        res.json(pessoa)
    })
}

// POST
exports.adiciona_um_pessoa = function(req, res) {
    var novo_pessoa = new pessoa(req.body)
    novo_pessoa.save(function(err, pessoa) {
        if(err) {
            res.status(400).send(err);
        }
        res.json(pessoa)
    })
}

// PUT
exports.atualiza_um_pessoa = function(req, res) {
    pessoa.findOneAndUpdate({_id: req.params.pessoaId}, req.body, {new: true}, 
        function(err, pessoa) {
            if (err) {
                res.status(400).send(err);;
            }
            res.json(pessoa);
        });
}

// DELETE
exports.remove_um_pessoa = function(req, res) {
    pessoa.remove({_id: req.params.pessoaId}, function(err, pessoa) {
        if(err) {
            res.status(400).send(err);
        }
        res.json({"Mensagem": "Pessoa deletada com sucesso"})
    })
}