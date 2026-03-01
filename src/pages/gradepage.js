import React from "react";
import { useParams } from "react-router-dom";

function GradePage() {
  const { teamName } = useParams();

  return (
    <>
      <div className="navbar">
        <div className="logo">Grading Panel</div>
      </div>

      <div className="container">
        <h2>{teamName} - Evaluation</h2>

        <div className="card">
          <h3>Round 1</h3>
          <input type="number" placeholder="Score out of 10" />
        </div>

        <div className="card">
          <h3>Round 2</h3>
          <input type="number" placeholder="Score out of 10" />
        </div>

        <div className="card">
          <h3>Round 3</h3>
          <input type="number" placeholder="Score out of 10" />
        </div>

        <button className="primary-btn">Submit Scores</button>
      </div>
    </>
  );
}

export default GradePage;