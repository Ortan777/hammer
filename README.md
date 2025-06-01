HabitHarbor
 Short Description
HabitHarbor is a full-stack AI-powered Life Coach app that helps users set goals, receive personalized 7-day plans, and track daily progress. It combines authentication, a responsive frontend, backend API integration, and an AI-generated action plan using OpenRouter.
 Tech Stack
Frontend:
- React (with Hooks)
- Axios
- React Router DOM (if used)
Backend:
- Node.js
- Express
- MongoDB + Mongoose
- Bcrypt.js (password hashing)
- JSON Web Tokens (JWT)
AI Integration:
- OpenRouter API (Mistral model)
 Features
-  User Registration and Login (with JWT)
-  AI-generated 7-day habit plan based on user's goal
-  Toggle between Register & Login
-  Save and track daily progress for each plan item
-  Persistent authentication across sessions
- Responsive UI
 How to Run
1. Clone the Repository
git clone https://github.com/yourusername/habitharbor.git
cd habitharbor
2. Set Up the Backend
cd server
npm install
Create a `.env` file in the `/server` directory:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENROUTER_API_KEY=your_openrouter_api_key
Start the backend:
node index.js
3. Set Up the Frontend
cd ../client
npm install
npm start
Access app at: http://localhost:3000
🧠 AI Usage Explanation
When a user submits a goal (e.g., "I want to improve my fitness"), the backend sends a prompt to OpenRouter’s Mistral model via the /api/plan route. The model returns a 7-day plan in JSON format:
{
  "plan": [
    { "day": 1, "task": "Do 15 minutes of yoga", "tip": "Start slow and be consistent." },
    ...
  ]
}
This plan is rendered on the frontend, allowing users to check off completed days and track their journey.
