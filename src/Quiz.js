import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Quiz = ({ email, questions, setQuestions, setUserAnswers }) => {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [visited, setVisited] = useState([]);
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes
  const navigate = useNavigate();

  const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

  useEffect(() => {
    if (questions.length === 0) {
      axios.get('https://the-trivia-api.com/api/questions?limit=15')
        .then(res => {
          const formatted = res.data.map((q) => ({
            question: q.question,
            correct_answer: q.correctAnswer,
            answers: shuffle([q.correctAnswer, ...q.incorrectAnswers])
          }));
          setQuestions(formatted);
        })
        .catch(() => alert("Failed to load quiz questions. Please check your connection."));
    }
  }, [questions, setQuestions]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleAnswer = (selected) => {
    setAnswers({ ...answers, [index]: selected });
  };

  const handleNavClick = (i) => {
    if (!visited.includes(i)) {
      setVisited([...visited, i]);
    }
    setIndex(i);
  };

  const handleSubmit = () => {
    const userAnswerList = questions.map((q, i) => ({
      question: q.question,
      correct: q.correct_answer,
      selected: answers[i] || null,
    }));
    setUserAnswers(userAnswerList);
    navigate('/report');
  };

  if (questions.length === 0) return <div className="loader">Loading Questions...</div>;

  const current = questions[index];
  const mins = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const secs = String(timeLeft % 60).padStart(2, '0');

  return (
    <div className="quiz-container">
      <div className="header">
        <div>🕒 {mins}:{secs}</div>
        <div>Logged in as: {email}</div>
      </div>

      <div className="question-box fade-question">
        <h3>Q{index + 1}: <span dangerouslySetInnerHTML={{ __html: current.question }} /></h3>
        {current.answers.map((ans, i) => (
          <button
            key={i}
            className={`option-btn ${answers[index] === ans ? 'selected' : ''}`}
            onClick={() => handleAnswer(ans)}
            dangerouslySetInnerHTML={{ __html: ans }}
          />
        ))}
      </div>

      <div className="navigation-panel">
        {questions.map((_, i) => (
          <button
            key={i}
            onClick={() => handleNavClick(i)}
            className={
              `nav-btn ${index === i ? 'current' : ''} ${visited.includes(i) ? 'visited' : ''} ${answers[i] ? 'answered' : ''}`
            }
          >
            {i + 1}
          </button>
        ))}
      </div>

      <div className="bottom-buttons" style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '20px' }}>
        <button
          onClick={() => {
            if (index > 0) setIndex(index - 1);
          }}
          className="btn"
          disabled={index === 0}
        >
          Previous
        </button>

        <button
          onClick={() => {
            if (!visited.includes(index)) {
              setVisited([...visited, index]);
            }
            if (index + 1 < questions.length) {
              setIndex(index + 1);
            } else {
              handleSubmit();
            }
          }}
          className="btn"
        >
          {index + 1 === questions.length ? 'Finish Quiz' : 'Next'}
        </button>

        <button onClick={handleSubmit} className="btn submit-btn">
          Submit Quiz
        </button>
      </div>
    </div>
  );
};

export default Quiz;
