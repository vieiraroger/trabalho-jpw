'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var serieSchema = Schema({
    titulo: {
        type: String,
        required: true
    },
    streamming: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('serie', serieSchema)