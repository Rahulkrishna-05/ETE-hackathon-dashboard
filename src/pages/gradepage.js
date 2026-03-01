import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./gradepage.css";

function TeamGrade() {
  const { teamName } = useParams();
  const navigate = useNavigate();

  const [scores, setScores] = useState({
    round1: 0,
    round2: 0,
    round3: 0,
  });

  const handleChange = (e) => {
    setScores({ ...scores, [e.target.name]: Number(e.target.value) });
  };

  const total = scores.round1 + scores.round2 + scores.round3;

  return (
    <div className="grade-container">
      
      {/* Header */}
      <div className="grade-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <h2>{teamName} - Grading Panel</h2>
      </div>

      {/* Score Cards */}
      <div className="rounds-grid">
        <div className="round-card">
          <h3>Round 1</h3>
          <input
            type="number"
            name="round1"
            min="0"
            max="10"
            onChange={handleChange}
          />
        </div>

        <div className="round-card">
          <h3>Round 2</h3>
          <input
            type="number"
            name="round2"
            min="0"
            max="10"
            onChange={handleChange}
          />
        </div>

        <div className="round-card">
          <h3>Round 3</h3>
          <input
            type="number"
            name="round3"
            min="0"
            max="10"
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Total Score */}
      <div className="total-card">
        <h3>Total Score</h3>
        <p>{total} / 30</p>
      </div>

      {/* Save Button */}
      <button className="save-btn">
        Save Scores
      </button>

    </div>
  );
}

export default TeamGrade;