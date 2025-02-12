const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image_url: { type: String, required: true },
  link: { type: String, required: true },
  date_created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Project', projectSchema);