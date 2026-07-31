# 🤖 AI Code Reviewer

An AI-powered web application that reviews source code using Google Gemini.

The application allows users to write or upload code, choose the programming language, and receive a detailed AI-generated code review with suggestions and an improved version of the code.

---

## ✨ Features

- 🤖 AI-powered code review
- 💻 Monaco Code Editor
- 📂 Upload source code files
- 🌐 Multiple programming languages
- 📝 Markdown rendering
- 🎨 Syntax highlighting
- 📋 Copy review to clipboard
- ⚡ FastAPI backend
- ⚛️ React + TypeScript frontend

---

## 📸 Screenshots

### Main Interface

> *(Screenshots will be added soon.)*

---

## 🛠 Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Monaco Editor
- React Markdown
- React Select
- Highlight.js

### Backend

- Python
- FastAPI
- Google Gemini API
- Pydantic

---

## 🚀 Installation

### Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/AI-Code-Reviewer.git

cd AI-Code-Reviewer
```

---

### Backend

```bash
cd backend

pip install -r requirements.txt

python -m uvicorn main:app --reload
```

---

### Frontend

```bash
cd frontend

npm install

npm run dev
```

---

## 🔑 Environment Variables

### Backend

Create a `.env` file inside the `backend` folder:

```env
GEMINI_API_KEY=your_api_key
```

### Frontend

Create a `.env` file inside the `frontend` folder:

```env
VITE_API_URL=http://127.0.0.1:8000
```

---

## 📂 Project Structure

```
AI-Code-Reviewer
│
├── backend
│   ├── ai.py
│   ├── main.py
│   ├── prompt.py
│   └── requirements.txt
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── services
│   │   ├── App.tsx
│   │   └── main.tsx
│   └── package.json
│
└── README.md
```

---

## 📌 Future Improvements

- Authentication
- Review history
- Export review as PDF
- Multiple AI models
- Docker support
- Light/Dark theme switch

---

## 👨‍💻 Author

Created by Tymur Svyrydenko
