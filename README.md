#  HabitHarbor

**HabitHarbor** is a full-stack AI-powered Life Coaching application that helps users plan, track, and maintain personal development goals. The app offers personalized 7-day plans using AI and allows users to track progress day by day.

---

##  Features

-  User Authentication (Register/Login with JWT)
-  AI-generated 7-day goal plan using OpenRouter API
-  Progress Tracking for each day of the plan
-  Data persistence with MongoDB
-  Auto-login with stored token
-  Frontend built with React and MUI

---

##  Tech Stack

**Frontend**:
- React
- Axios
- React Router
- Material UI (MUI)

**Backend**:
- Node.js
- Express
- MongoDB with Mongoose
- JWT for auth
- bcrypt for password hashing
- OpenRouter API (AI model: Mistral-7B)

---

##  Folder Structure

```
/habitharbor
  ├── client                # React frontend
  │   └── src
  │       └── components    # Login, Register, Dashboard
  ├── server                # Node.js backend
  │   └── models/User.js    # Mongoose User schema
  ├── .env                  # API keys and config
  └── README.md
```

---

##  How to Run

1. **Clone the repository:**

```bash
git clone https://github.com/yourusername/habitharbor.git
cd habitharbor
```

2. **Set up the server:**

```bash
cd server
npm install
# Create a .env file with:
# MONGO_URI=your_mongo_uri
# JWT_SECRET=your_jwt_secret
# OPENROUTER_API_KEY=your_api_key
node index.js
```

3. **Set up the client:**

```bash
cd ../client
npm install
npm start
```

4. **Visit the app:**

Go to `http://localhost:3000` in your browser.

---

## 🤖 How AI is Used

The app uses OpenRouter's AI API with the `mistralai/mistral-7b-instruct` model to generate a personalized 7-day plan based on the user's goal. The user inputs a goal, and the backend fetches an AI-crafted plan, structured as JSON, which the frontend displays and tracks progress on.

Example prompt:
```
"Create a 7-day plan for: 'Start meditating daily'. Return valid JSON with: { plan: [ { day: 1, task: "...", tip: "..." }, ... ] }"
```

---

##  Future Improvements

- User profile editing
- Historical progress tracking
- Daily reminders or notifications
- More goal types and plan formats

---

## 📄 License

MIT License

---

Made by ayush and natasha 
