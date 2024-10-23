// frontend/src/components/Blog/BlogList.js
import React, { useEffect, useState } from 'react';
import axios from '../../utils/axiosConfig';
import { Link } from 'react-router-dom';

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);
    const [error, setError] = useState('');

    const fetchBlogs = async () => {
        try {
            const res = await axios.get('/posts');
            setBlogs(res.data.blogs);
        } catch (err) {
            setError('Failed to fetch blog posts.');
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    return (
        <div>
            <h2>All Blog Posts</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            {blogs.length === 0 ? (
                <p>No blog posts available.</p>
            ) : (
                blogs.map(blog => (
                    <div className="card mb-3" key={blog._id}>
                        <div className="card-body">
                            <h5 className="card-title">{blog.title}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">By {blog.author.username} on {new Date(blog.publishedDate).toLocaleDateString()}</h6>
                            <p className="card-text">{blog.content.substring(0, 100)}...</p>
                            <Link to={`/blogs/${blog._id}`} className="card-link">Read More</Link>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default BlogList;
