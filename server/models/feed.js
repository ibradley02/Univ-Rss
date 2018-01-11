var models = require ('../config/constants').models
var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId

var schema = new Schema({
    name: { type: String, required: true },
    url: { type: String, required: true },
    categoryIds: [{ type: ObjectId, ref: models.category }]
    // userIds: [{ type: ObjectId, ref: models.user }],
  })


  module.exports = mongoose.model('Feed', schema)