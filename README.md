# 🔍 React Quiz App 

A responsive and animated Quiz Application built using **React.js** that fetches questions from [The Trivia API](https://the-trivia-api.com). The app includes question navigation, a 30-minute countdown timer, auto-submission, and a detailed report page. 🎯

---

## 💡 Overview & Approach

This quiz app was designed to offer a smooth and interactive quiz-taking experience. The goal was to meet all assignment requirements while keeping the UI clean and mobile-friendly.

### 🔧 Components Built:

- **StartPage.js** – collects user's email
- **Quiz.js** – fetches questions, handles timer, answers, and navigation
- **ReportPage.js** – displays user responses and correct answers
- **styles.css** – responsive, animated modern UI

---

## ⚙️ Setup & Installation

> Follow these steps to run the app locally:

1. Clone the repo

```bash
git clone https://github.com/Rohitvishnolia/react-quiz-app.git
cd react-quiz-app
```

2. Install dependencies

```bash
npm install
```

3. Start the app

```bash
npm start
```

The app will open at:\
`http://localhost:3000`

---

## 🧪 Features Implemented

- ✅ Email input to begin quiz
- ✅ 15 questions fetched from `the-trivia-api.com`
- ✅ Countdown timer (30 mins)
- ✅ Auto-submits quiz when time ends
- ✅ Navigation panel (visited/attempted states)
- ✅ Next/Previous buttons
- ✅ Animated question transitions
- ✅ Final report screen (user vs correct answers)

---

## ✅ Assumptions Made

- All users will answer the quiz in one session.
- The API provides enough question variety.
- User doesn't need account or database storage.

---

## 🚧 Challenges Faced & Solutions

### 1. **API Rate Limiting (429 error)**

- OpenTDB caused frequent rate limits.
- ✅ Switched to **The Trivia API**, which has no token requirement.

### 2. **Question Navigation Logic**

- Needed to track visited and attempted states.
- ✅ Used `useState()` for dynamic navigation tracking.

### 3. **Responsive & Smooth UI**

- Mobile sizing and button layout was tricky.
- ✅ Used Flexbox and `@media` queries for responsiveness.
- ✅ Added `fadeIn` animation for question transitions.

---

## 📦 Tech Stack

- React.js
- Axios
- CSS (glassmorphism, flexbox)
- React Router

---

##

---

## 👨‍💼 Developed By

- **Rohit Saini**



