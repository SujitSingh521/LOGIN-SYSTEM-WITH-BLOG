// frontend/src/utils/axiosConfig.js
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000/api', // Backend base URL
    withCredentials: true // Enable sending cookies with requests
});

// Optionally, add interceptors to handle responses or errors globally
instance.interceptors.response.use(
    response => response,
    error => {
        // Handle specific status codes
        if (error.response && error.response.status === 401) {
            // Redirect to login or perform other actions
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default instance;
