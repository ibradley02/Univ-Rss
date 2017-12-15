var models = require ('../config/constants').models
var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId

var schema = new Schema({
    url: { type: String, required: true },
    creatorId: {type: ObjectId, ref: models.user.name, required: true }
  })


  module.exports = mongoose.model('Feed', schema)