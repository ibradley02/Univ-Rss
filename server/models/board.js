var models = require('../config/constants').models
let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
  x: { type: Number, required: true },
  y: { type: Number, required: true },
  w: { type: Number, required: true },
  h: { type: Number, required: true },
  i: { type: String, required: true },
  component: { type: String, required: true },
  source: { type: String, },
  mediaLink: { type: String },
  title: { type: String },
  imageLink: { type: String },
  created: { type: Number, default: Date.now() },
  creatorId: { type: ObjectId, ref: models.user.name, required: true },
});

module.exports = mongoose.model(models.board.name, schema);