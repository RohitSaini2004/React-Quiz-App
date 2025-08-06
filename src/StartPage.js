import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StartPage = ({ email, setEmail }) => {
  const [input, setInput] = useState(email);
  const navigate = useNavigate();

  const handleStart = () => {
    if (input.trim()) {
      setEmail(input.trim());
      navigate('/quiz');
    }
  };

  return (
    <div className="container center">
      <h2>Welcome to the Quiz App 🧠</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="input"
      />
      <button onClick={handleStart} className="btn">Start Quiz</button>
    </div>
  );
};

export default StartPage;
