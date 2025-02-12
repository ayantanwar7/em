const Project = require('../models/Project');

// Fetch all projects
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.render('projects', { title: 'Emerald Studios - Projects', projects });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// Add a new project (optional, for admin use)
exports.addProject = async (req, res) => {
  const { title, description, image_url, link } = req.body;

  try {
    const newProject = new Project({ title, description, image_url, link });
    await newProject.save();
    res.redirect('/projects');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};