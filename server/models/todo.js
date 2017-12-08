var models = require ('../config/constants').models
var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId

var schema = new Schema({
    title: { type: String},
    content: { type: String},
    creatorId: {type: ObjectId, ref: models.user.name, required: true }

  })


  module.exports = mongoose.model('Todo', schema)