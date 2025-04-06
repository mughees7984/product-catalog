
# 🛍️ React + Express Product Catalog

This is a simple full-stack application built with **React (frontend)** and **Express (backend)**. It showcases a paginated and searchable product catalog with static sample data.

## ✨ Features

- 📄 Paginated product listing
- 🔍 Search functionality (by name or description)
- ⚡ Fast and lightweight backend API
- 💅 TailwindCSS UI styling

---

## 📁 Project Structure

```
react-express-product-catalog/
├── backend/           # Express backend server
│   └── index.js
├── frontend/          # React frontend app
│   ├── public/
│   ├── src/
│   │   ├── App.jsx
│   │   └── index.js
│   └── package.json
├── README.md
└── package.json (root if monorepo-style)
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/react-express-product-catalog.git
cd react-express-product-catalog
```

### 2. Run the Backend

```bash
cd backend
npm install
node index.js
```

The backend will start on: [http://localhost:5000](http://localhost:5000)

### 3. Run the Frontend

In a new terminal:

```bash
cd frontend
npm install
npm start
```

The frontend will run on: [http://localhost:3000](http://localhost:3000)

---

## 🔗 API Endpoint

### `GET /api/items`

**Query Params:**
- `page`: Page number (default: `1`)
- `limit`: Items per page (default: all)
- `search`: Optional search keyword (filters name & description)

Example:
```
http://localhost:5000/api/items?page=1&limit=3&search=laptop
```

---

## 🧪 Sample Search Terms

- `laptop`
- `SSD`
- `keyboard`
- `monitor`

---

## 🛠️ Tech Stack

- **Frontend:** React + TailwindCSS
- **Backend:** Node.js + Express
- **Data:** In-memory mock data

---

## 📌 Notes

- No database is used — product data is hardcoded in the backend for demo purposes.
- Make sure ports `3000` (frontend) and `5000` (backend) are not blocked or in use.

---

## 🧑‍💻 Author

Made with 💙 by Muhammad Mughees

---

