const Contact = require('../models/Contact');

// Handle contact form submission
exports.submitContactForm = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newInquiry = new Contact({ name, email, message });
    await newInquiry.save();
    res.redirect('/contact?success=true');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// Fetch all contact inquiries (optional, for admin use)
exports.getContactInquiries = async (req, res) => {
  try {
    const inquiries = await Contact.find().sort({ date_received: -1 });
    res.render('contact-inquiries', { title: 'Emerald Studios - Contact Inquiries', inquiries });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};