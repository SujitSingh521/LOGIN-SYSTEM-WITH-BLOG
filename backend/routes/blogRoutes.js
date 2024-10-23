// backend/routes/blogRoutes.js
const express = require('express');
const router = express.Router();
const { createBlog, getAllBlogs, getBlogById, updateBlog, deleteBlog } = require('../controllers/blogController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

// Public Route: Get all blogs
router.get('/', getAllBlogs);

// Public Route: Get single blog
router.get('/:id', getBlogById);

// Protected Routes
router.post('/', authMiddleware, createBlog);
router.put('/:id', authMiddleware, updateBlog);
router.delete('/:id', authMiddleware, deleteBlog);

module.exports = router;
