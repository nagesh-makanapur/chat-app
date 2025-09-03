# 💬 ChatApp (MERN Stack)

A **MERN Stack real-time chat application** that combines the power of **MongoDB, Express, React (Vite), and Node.js**.  
It enables **secure authentication**, **real-time messaging** with **Socket.io**, and **media sharing** via **Cloudinary**.

---

## ✨ Key Features
- 🔐 **Authentication & Authorization** – JWT-based login/register with encrypted passwords (bcryptjs)
- 💬 **Instant Messaging** – Real-time bidirectional communication with Socket.io
- 📸 **Media Uploads** – Cloudinary integration for storing images securely
- 📡 **REST APIs** – Structured Express routes for user & message management
- 🗄 **Database** – MongoDB + Mongoose for data persistence
- 🎨 **Modern Frontend** – React (Vite) with modular components and pages
- 🌍 **Cross-Origin Ready** – CORS enabled for smooth frontend-backend interaction
- ⚡ **Developer Friendly** – Nodemon support for backend hot reload

````
## 📂 Project Structure
chatapp/
│── client/        # Frontend (React + Vite)
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── lib/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
│── server/        # Backend (Node.js + Express + MongoDB)
│   ├── controllers/
│   ├── lib/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
│── README.md
│── vercel.json


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/nagesh-makanapur/chat-app.git
cd chatapp

