const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
// Display the blog page
router.get('/', blogController.getBlogPosts);

module.exports = router;

// Display the blog page
router.get('/', async (req, res) => {
  try {
    // Fetch all blog posts from the database
    const blogPosts = await Blog.find().sort({ date_created: -1 }); // Sort by latest first
    res.render('blog', { title: 'Emerald Studios - Blog', blogPosts });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;