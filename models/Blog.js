const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  date_created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Blog', blogSchema);