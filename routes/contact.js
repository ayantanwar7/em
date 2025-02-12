const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Display the contact form
router.get('/', (req, res) => {
  res.render('contact', { title: 'Emerald Studios - Contact' });
});

// Display the contact form
router.get('/', (req, res) => {
  res.render('contact', { title: 'Emerald Studios - Contact' });
});

// Handle form submission
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Save the inquiry to the database
    const newInquiry = new Contact({ name, email, message });
    await newInquiry.save();

    // Redirect with a success message
    res.redirect('/contact?success=true');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;