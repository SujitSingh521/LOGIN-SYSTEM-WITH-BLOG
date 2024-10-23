// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/Auth/SignUp';
import Login from './components/Auth/Login';
import BlogList from './components/Blog/BlogList';
import BlogForm from './components/Blog/BlogForm';
import BlogDetails from './components/Blog/BlogDetails';
import Navbar from './components/Layout/Navbar.jsx';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          
          {/* Protected Routes */}
          <Route 
            path="/create" 
            element={
              <ProtectedRoute>
                <BlogForm />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/edit/:id" 
            element={
              <ProtectedRoute>
                <BlogForm editMode={true} />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
