# 🔗 URL Shortener App

A full-stack web application to shorten long URLs and manage them efficiently. This project features both a client-side frontend and a server-side backend, built with TypeScript.

---

## 🚀 Features

- 🔗 Shorten any valid URL
- 📥 Retrieve original URLs via short links
- 📊 Click tracking and analytics (optional extension)
- 🔧 Built with TypeScript for both server and client
- 📡 RESTful API connection between client and server
- 🧪 Fully tested URL create and fetch APIs

---

## 🏗️ Project Structure

```
.
├── client-app/          # Frontend (React/HTML/CSS/JS)
├── server-app/          # Backend server (Express + TS)
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── index.ts
│   ├── .env             # Environment variables
│   ├── nodemon.json     # Nodemon config for hot reload
│   ├── tsconfig.json    # TypeScript configuration
├── dist/                # Compiled server code
├── package.json         # Project dependencies and scripts
```

---

## 🧩 Tech Stack

| Layer      | Technology              |
|------------|--------------------------|
| Frontend   | HTML/CSS/JavaScript (or React) |
| Backend    | Node.js, Express.js      |
| Language   | TypeScript               |
| DB (opt.)  | MongoDB / In-memory (as needed) |
| Dev Tools  | Nodemon, Postman         |

---

## 🛠️ Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/your-username/url-shortener-app.git
cd url-shortener-app
```

### 2. Server Setup

```bash
cd server-app

# Install dependencies
npm install

# Create `.env` file
touch .env
```

Add this to `.env`:

```
PORT=5000
BASE_URL=http://localhost:5000
MONGO_URI=mongodb://localhost:27017/urlshortener   # Optional if using DB
```

### 3. Run the Server

```bash
npm run dev
```

This will start the server at `http://localhost:5000`.

### 4. Client Setup

```bash
cd ../client-app

# Open index.html in browser
# or run a live server extension in VS Code
```

---

## 🔬 API Endpoints

### POST `/api/shorten`

**Body:**
```json
{
  "longUrl": "https://example.com/very/long/url"
}
```

**Response:**
```json
{
  "shortUrl": "http://localhost:5000/c2c871e"
}
```

---

### GET `/c2c871e`

**Redirects to:** the original long URL.

---

## 🧪 Testing

Use Postman or cURL to test the endpoints:

```bash
curl -X POST http://localhost:5000/api/shorten \
  -H "Content-Type: application/json" \
  -d '{"longUrl": "https://example.com"}'
```

---

## 📦 Build

```bash
# Compile TypeScript for production
cd server-app
npm run build
```

---

## ✨ Future Improvements

- 📊 Add URL click tracking and analytics
- 👤 Add user authentication to save personal URLs
- 📅 Add expiration feature for links
- 📱 Responsive frontend UI

---

## 👨‍💻 Author

Made by **Devansh Dhopte**  
_Deployable, extensible, and secure._

---

Built with ❤️ using Node.js, Express, and TypeScript.
