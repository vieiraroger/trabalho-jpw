'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var livroSchema = Schema({
    titulo: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
})

module.exports = mongoose.model('livro', livroSchema)