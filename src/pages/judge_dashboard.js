import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function JudgeDashboard() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const teams = [
    "Team Alpha",
    "Team Beta",
    "Team Gamma"
  ];

  return (
    <>
      {/* Top Navbar */}
      <div className="navbar">
        <div className="logo">Hackathon Judge Panel</div>

        <div className="dropdown">
          <button onClick={() => setOpen(!open)}>
            Teams ▼
          </button>

          {open && (
            <div className="dropdown-content">
              {teams.map((team) => (
                <div
                  key={team}
                  onClick={() => navigate(`/grade/${team}`)}
                >
                  {team}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="container">
        <h2>Welcome Judge</h2>
        <div className="card">
          Select a team from the top right "Teams" menu to start grading.
        </div>
      </div>
    </>
  );
}

export default JudgeDashboard;