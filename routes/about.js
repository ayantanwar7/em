const express = require('express');
const router = express.Router();

// About Us page
router.get('/', (req, res) => {
  res.render('about', { title: 'Emerald Studios - About Us' });
});

module.exports = router;