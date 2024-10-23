// frontend/src/components/Blog/BlogForm.js
import React, { useState, useEffect } from 'react';
import axios from '../../utils/axiosConfig';
import { useNavigate, useParams } from 'react-router-dom';

const BlogForm = ({ editMode = false }) => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [formData, setFormData] = useState({
        title: '',
        content: '',
        tags: ''
    });

    const [error, setError] = useState('');

    const { title, content, tags } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const fetchBlog = async () => {
        try {
            const res = await axios.get(`/posts/${id}`);
            setFormData({
                title: res.data.blog.title,
                content: res.data.blog.content,
                tags: res.data.blog.tags.join(', ')
            });
        } catch (err) {
            setError('Failed to fetch the blog post.');
        }
    };

    useEffect(() => {
        if (editMode) {
            fetchBlog();
        }
        // eslint-disable-next-line
    }, [editMode, id]);

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const payload = {
                title,
                content,
                tags: tags.split(',').map(tag => tag.trim())
            };

            if (editMode) {
                await axios.put(`/posts/${id}`, payload, { withCredentials: true });
                navigate(`/blogs/${id}`);
            } else {
                await axios.post('/posts', payload, { withCredentials: true });
                navigate('/');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Operation failed.');
        }
    };

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <h2>{editMode ? 'Edit Blog Post' : 'Create New Blog Post'}</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input type="text" className="form-control" name="title" value={title} onChange={onChange} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Content</label>
                        <textarea className="form-control" name="content" value={content} onChange={onChange} rows="5" required></textarea>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Tags (comma separated)</label>
                        <input type="text" className="form-control" name="tags" value={tags} onChange={onChange} />
                    </div>
                    <button type="submit" className="btn btn-success">{editMode ? 'Update' : 'Create'}</button>
                </form>
            </div>
        </div>
    );
};

export default BlogForm;
