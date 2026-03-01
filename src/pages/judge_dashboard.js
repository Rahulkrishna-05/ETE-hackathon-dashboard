import React, { useState } from "react";
import "./judgedashboard.css";
import { useNavigate } from "react-router-dom";

const teams = [
  { name: "Team Alpha", members: 3 },
  { name: "Team Beta", members: 4 },
  { name: "Team Gamma", members: 2 }
];

function JudgeDashboard() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState("dashboard");

  return (
    <div className="judge-container">
      
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Hackathon</h2>
        <ul>
          <li
            className={activeMenu === "dashboard" ? "active" : ""}
            onClick={() => setActiveMenu("dashboard")}
          >
            Dashboard
          </li>

          <li
            className={activeMenu === "teams" ? "active" : ""}
            onClick={() => setActiveMenu("teams")}
          >
            Teams
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">

        {activeMenu === "dashboard" && (
          <>
            <h1>Welcome Back, Judge</h1>

            <div className="cards fade-in">
              <div className="card">
                <h3>Registered Teams</h3>
                <p>15</p>
              </div>

              <div className="card">
                <h3>Total Participants</h3>
                <p>56</p>
              </div>

              <div className="card">
                <h3>Average Rating</h3>
                <p>7.8</p>
              </div>
            </div>
          </>
        )}

        {activeMenu === "teams" && (
          <div className="teams-section slide-in">
            <h2>Teams List</h2>

            <div className="team-grid">
              {teams.map((team) => (
                <div
                  key={team.name}
                  className="team-card"
                  onClick={() => navigate(`/judge/team/${team.name}`)}
                >
                  <h3>{team.name}</h3>
                  <p>{team.members} Members</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default JudgeDashboard;