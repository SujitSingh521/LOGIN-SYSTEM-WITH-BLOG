Name : Sujit Singh

# LOGIN-SYSTEM-WITH-BLOG

🌟 Blog Management System: Login System with CRUD 🌟
🎯 Objective
Build a full-stack app using React.js (Frontend) and Node.js, Express, MongoDB (Backend) for managing blogs with JWT authentication, bcrypt password encryption, and role-based access for admin 🛡️ and user 👤 roles.



✨ Key Features
1. Frontend (React.js) 💻
🔒 Authentication Pages:
Sign Up & Login: Create accounts and securely log in using JWT stored in HTTP-only cookies.
⚙️ Role-Based Interface:
Admin 🛡️: Full access to create, view, update, and delete any post.
User 👤: Create, view, update, and delete only their own posts.
📝 Post Management:
View All Blogs: List all blogs with details (title, author, tags).
Add/Edit Blog: Forms for creating or updating blogs.
🗑️ Delete Blog: Restricted by roles.
🎨 Styling: Responsive design using CSS/Bootstrap.


2. Backend (Node.js, Express) 🌐
🔐 Authentication:
Sign Up: Store passwords securely using bcrypt.
Login: Generate JWT tokens on successful authentication.
Middleware:
Verify JWT.
Enforce role-based restrictions.
🛠️ CRUD API:
GET /posts: View all posts.
POST /posts: Create a post (authenticated users).
PUT /posts/:id: Update a post (users: own posts, admin: any post).
DELETE /posts/:id: Delete a post (users: own posts, admin: any post).
🔒 Security:
Store JWT in HTTP-only cookies for enhanced protection.


3. Database (MongoDB) 🗄️
User Model 👤:
Username 🆔
Email 📧
Password 🔑 (hashed)
Role (admin/user)
BlogPost Model 📝:
Title 🖋️
Author 👨‍💻
Content 📜
Tags 🏷️
Published Date 📅



🏆 Evaluation Criteria
⚙️ Functionality (30%): Full CRUD with authentication & role-based access.
🗂️ Code Structure (25%): Clean, modular, and maintainable code.
🎨 UI/UX (20%): Responsive and user-friendly design with role-specific features.
🔒 Security (25%): Proper use of JWT, bcrypt, and MongoDB.
🚀 Get started and showcase your skills!
