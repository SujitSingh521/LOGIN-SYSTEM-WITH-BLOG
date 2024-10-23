// frontend/src/components/Auth/SignUp.js
import React, { useState } from 'react';
import axios from '../../utils/axiosConfig';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        role: 'user' // default role
    });

    const [error, setError] = useState('');

    const { username, email, password, role } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('/auth/signup', formData, { withCredentials: true });
            localStorage.setItem('user', JSON.stringify(res.data.user));
            navigate('/');
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed.');
        }
    };

    return (
        <div className="row justify-content-center">
            <div className="col-md-6">
                <h2>Sign Up</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input type="text" className="form-control" name="username" value={username} onChange={onChange} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" name="email" value={email} onChange={onChange} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={onChange} required />
                    </div>
                    {/* Role selection (optional, remove if not needed) */}
                    {/* <div className="mb-3">
            <label className="form-label">Role</label>
            <select className="form-select" name="role" value={role} onChange={onChange}>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div> */}
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
