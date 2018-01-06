var models = require ('../config/constants').models
var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId

var schema = new Schema({
    name: { type: String, required: true},
    url: { type: String, required: true },
    boardId: { type: ObjectId, ref: models.board },
    categoryId: { type: ObjectId, ref: models.category, required: true }
  })


  module.exports = mongoose.model('Feed', schema)