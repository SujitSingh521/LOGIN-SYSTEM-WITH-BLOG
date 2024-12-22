Name : Sujit Singh

🌟 Blog Management System: Login System with CRUD 🌟

🎯 Objective
   Create a full-stack app using React.js (Frontend) and Node.js, Express, MongoDB (Backend) for managing blogs with JWT authentication, bcrypt password encryption, and role-based access for admin 🛡️ and user 👤 roles.

✨ Key Features :-
  Frontend (React.js) 💻  
  
  🔒 Authentication Pages
   Sign Up & Login: Secure pages for user registration and login, with JWT tokens stored in HTTP-only cookies for authentication  
   
  ⚙️ Role-Based Interface
  Admin 🛡️: Full access to create, view, update, and delete any blog post.
  User 👤: Limited to creating, updating, and deleting their own posts.

  📝 Post Management
   View All Blogs: Display all blog posts with details like title, author, content, and tags.
   Create/Edit Blog: Forms for adding and updating blog posts.
   🗑️ Delete Blog: Restrict deletion based on user roles.
   
  🎨 Styling
  Responsive design using CSS/Bootstrap for enhanced user experience.

 Backend (Node.js, Express) 🌐
 🔐 Authentication

 Sign Up: Store hashed passwords securely using bcrypt.
 Login: Generate JWT tokens for authentication.
 Middleware: Implement JWT verification and role-based access.

 🛠️ CRUD API

GET /posts: Retrieve all blog posts (open to all authenticated users).
POST /posts: Allow authenticated users to add new blog posts.
PUT /posts/:id:
Users: Update their own posts.
Admins: Update any post.


DELETE /posts/:id:
Users: Delete their own posts.
Admins: Delete any post.

🔒 Security
Store JWT tokens in HTTP-only cookies for secure session management.


Database (MongoDB) 🗄️
User Model 👤

Fields:
Username 🆔
Email 📧
Password 🔑 (hashed using bcrypt)
Role (admin/user)
BlogPost Model 📝

Fields:
Title 🖋️
Author 👨‍💻 (referencing the user model)
Content 📜
Tags 🏷️
Published Date 📅





















