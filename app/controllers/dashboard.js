const router = require('express').Router();
const { Post, Comment, User } = require('../models');
// const withAuth = require('../../utils/auth');

// Return all posts associated with the user
router.get('/', (req, res) => {
  res.render('dashboard');
});

module.exports = router;