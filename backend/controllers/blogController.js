// backend/controllers/blogController.js
const Blog = require('../models/blog');

// Create a new blog post
const createBlog = async (req, res) => {
  try {
    const { title, content, tags } = req.body;

    const blog = new Blog({
      title,
      content,
      tags,
      author: req.user._id
    });

    await blog.save();

    res.status(201).json({ message: 'Blog post created successfully', blog });
  } catch (error) {
    res.status(500).json({ message: 'Server error while creating blog post.' });
  }
};

// Get all blog posts
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate('author', 'username email');

    res.status(200).json({ blogs });
  } catch (error) {
    res.status(500).json({ message: 'Server error while fetching blog posts.' });
  }
};

// Get a single blog post by ID
const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate('author', 'username email');

    if (!blog) {
      return res.status(404).json({ message: 'Blog post not found.' });
    }

    res.status(200).json({ blog });
  } catch (error) {
    res.status(500).json({ message: 'Server error while fetching the blog post.' });
  }
};

// Update a blog post
const updateBlog = async (req, res) => {
  try {
    const { title, content, tags } = req.body;

    let blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ message: 'Blog post not found.' });
    }

    // Check if the user is the author or admin
    if (blog.author.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied. Not authorized to update this post.' });
    }

    blog.title = title || blog.title;
    blog.content = content || blog.content;
    blog.tags = tags || blog.tags;

    await blog.save();

    res.status(200).json({ message: 'Blog post updated successfully', blog });
  } catch (error) {
    res.status(500).json({ message: 'Server error while updating the blog post.' });
  }
};

// Delete a blog post
const deleteBlog = async (req, res) => {
  try {
    let blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ message: 'Blog post not found.' });
    }

    // Check if the user is the author or admin
    if (blog.author.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied. Not authorized to delete this post.' });
    }

    await blog.remove();

    res.status(200).json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error while deleting the blog post.' });
  }
};

module.exports = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog
};
