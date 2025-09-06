# Basic Node.js Router

A simple Node.js project that demonstrates how to create a basic HTTP server with routing and static file handling — without using Express or other frameworks.

## 🚀 Features
- Serves HTML pages (`/`, `/about`)
- Serves static assets (CSS, JS, images) from the `public/` folder
- Minimal Node.js setup using only the core `http`, `fs`, and `path` modules
- Error handling for missing routes and unsupported methods

## 📂 Project Structure
```
basic-nodejs-router/
├── public/
│   ├── index.html
│   ├── about.html
│   ├── global.css
├── server.js
└── README.md
```

## 🛠️ Technologies
- [Node.js](https://nodejs.org/) (no frameworks)

## 🔧 Installation
Clone the repository and install dependencies (none required for this project):

```bash
git clone https://github.com/Amiory/basic-nodejs-router.git
cd basic-nodejs-router
```

## ▶️ Usage
Start the server:

```bash
node server.js
```

By default, the server runs on **http://localhost:3000**

### Available Routes
- `/` → Serves `index.html`
- `/about` → Serves `about.html`
- `/public/global.css` → Serves CSS file (and any other static assets in `public/`)

## 📖 Learning Purpose
This repo is meant for practicing:
- Basic Node.js server setup
- Manual routing
- Serving static files
- Understanding how frameworks like Express work under the hood

## 📜 License
This project is licensed under the MIT License.
