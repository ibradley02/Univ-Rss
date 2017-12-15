var models = require ('../config/constants').models
var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId

var schema = new Schema({
    url: { type: String, required: true },
    boardId: { type: ObjectId, ref: models.board, required: true }
  })


  module.exports = mongoose.model('Feed', schema)