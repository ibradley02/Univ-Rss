var  models = require('../config/constants').models
let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
    url: { type: String, required: true }
});

module.exports = mongoose.model(models.feed.name, schema);