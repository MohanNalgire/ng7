var mongoose = require('mongoose');

const EnvSchema = mongoose.Schema({
  envName:String,
  header: String,
  user: String,
  admin: String,
  login: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Environment', EnvSchema);
