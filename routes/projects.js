const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// Projects page
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.render('projects', { title: 'Emerald Studios - Projects', projects });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;