const Blog = require('../models/Blog');

// Fetch all blog posts
exports.getBlogPosts = async (req, res) => {
  try {
    const blogPosts = await Blog.find().sort({ date_created: -1 }); // Sort by latest first
    res.render('blog', { title: 'Emerald Studios - Blog', blogPosts });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// Add a new blog post (optional, for admin use)
exports.addBlogPost = async (req, res) => {
  const { title, content, author } = req.body;

  try {
    const newBlogPost = new Blog({ title, content, author });
    await newBlogPost.save();
    res.redirect('/blog');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};