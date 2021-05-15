'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var pessoaSchema = Schema({
    nome: {
        type: String,
        required: true
    },
    idade: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('pessoa', pessoaSchema)