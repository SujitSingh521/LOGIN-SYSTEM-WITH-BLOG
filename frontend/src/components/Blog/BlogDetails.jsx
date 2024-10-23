// frontend/src/components/Blog/BlogDetails.js
import React, { useEffect, useState } from 'react';
import axios from '../../utils/axiosConfig';
import { useParams, Link, useNavigate } from 'react-router-dom';

const BlogDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [blog, setBlog] = useState(null);
    const [error, setError] = useState('');

    const user = JSON.parse(localStorage.getItem('user'));

    const fetchBlog = async () => {
        try {
            const res = await axios.get(`/posts/${id}`);
            setBlog(res.data.blog);
        } catch (err) {
            setError('Failed to fetch the blog post.');
        }
    };

    useEffect(() => {
        fetchBlog();
    }, [id]);

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this post?')) {
            try {
                await axios.delete(`/posts/${id}`, { withCredentials: true });
                navigate('/');
            } catch (err) {
                setError('Failed to delete the blog post.');
            }
        }
    };

    if (!blog) return <p>Loading...</p>;

    const canEditOrDelete = user && (user.role === 'admin' || user.id === blog.author._id);

    return (
        <div>
            <h2>{blog.title}</h2>
            <h6 className="text-muted">By {blog.author.username} on {new Date(blog.publishedDate).toLocaleDateString()}</h6>
            <p>{blog.content}</p>
            <p><strong>Tags:</strong> {blog.tags.join(', ')}</p>
            {canEditOrDelete && (
                <div>
                    <Link to={`/edit/${blog._id}`} className="btn btn-primary me-2">Edit</Link>
                    <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                </div>
            )}
            {error && <div className="alert alert-danger mt-3">{error}</div>}
        </div>
    );
};

export default BlogDetails;
