const express = require('express');
const router = express.Router();

// Home page
router.get('/', (req, res) => {
  res.render('index', { title: 'Emerald Studios - Home' });
});

module.exports = router;