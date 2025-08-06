import React from 'react';
import { useNavigate } from 'react-router-dom';

const ReportPage = ({ questions, userAnswers, email }) => {
  const navigate = useNavigate();

  const getStatus = (correct, selected) => {
    if (!selected) return 'skipped';
    return correct === selected ? 'correct' : 'wrong';
  };

  return (
    <div className="report-container">
      <h2>📝 Quiz Report</h2>
      <p><strong>User:</strong> {email}</p>
      <p><strong>Score:</strong> {userAnswers.filter(ans => ans.correct === ans.selected).length} / {questions.length}</p>

      <div className="report-list">
        {userAnswers.map((q, i) => (
          <div key={i} className={`report-item ${getStatus(q.correct, q.selected)}`}>
            <p><strong>Q{i + 1}:</strong> <span dangerouslySetInnerHTML={{ __html: q.question }} /></p>
            <p><strong>Your Answer:</strong> <span dangerouslySetInnerHTML={{ __html: q.selected || 'Not Answered' }} /></p>
            <p><strong>Correct Answer:</strong> <span dangerouslySetInnerHTML={{ __html: q.correct }} /></p>
          </div>
        ))}
      </div>

      <button className="btn" onClick={() => navigate('/')}>Restart</button>
    </div>
  );
};

export default ReportPage;
