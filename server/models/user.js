let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let bcrypt = require('bcryptjs')
const SALT_FACTOR = 10

let schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, dropDups: true },
  image: { type: String, default: 'https://i.ytimg.com/vi/WgvTgV5EoGY/maxresdefault.jpg'},
  background: { type: String, default: 'http://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero-00e10b1f.jpg' },
  password: { type: String, required: true },
  created: { type: Number, required: true, default: Date.now() },
  weather: { type: Boolean, required: true, default: true },
  quote: { type: Boolean, required: true, default: true },
  todo: { type: Boolean, required: true, default: true },
  clock: { type: Boolean, required: true, default: true }
})


schema.pre('save', function (next) {
  var user = this;
  if (!user.isModified('password')) {
    return next();
  }
  bcrypt.genSalt(SALT_FACTOR, function (err, salt) {
    if (err) {
      return next(err);
    } else {
      bcrypt.hash(user.password, salt, function (err, hash) {
        user.password = hash;
        next();
      });
    }
  });
});

schema.methods.validatePassword = function (password) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, this.password, function (err, isMatch) {
      if (err || !isMatch) {
        return reject(err);
      }
      return resolve(isMatch);
    });
  })
};

module.exports = mongoose.model('User', schema)