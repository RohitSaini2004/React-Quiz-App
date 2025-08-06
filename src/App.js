import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartPage from './StartPage';
import Quiz from './Quiz';
import ReportPage from './ReportPage';
import './styles.css';

function App() {
  const [email, setEmail] = useState('');
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage email={email} setEmail={setEmail} />} />
        <Route path="/quiz" element={
          <Quiz 
            email={email}
            questions={questions}
            setQuestions={setQuestions}
            setUserAnswers={setUserAnswers}
          />
        } />
        <Route path="/report" element={
          <ReportPage 
            questions={questions} 
            userAnswers={userAnswers} 
            email={email} 
          />
        } />
      </Routes>
    </Router>
  );
}

export default App;
