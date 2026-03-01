import React, { useState } from "react";
import "./studentdashboard.css";

const teamsData = {
  "Team Alpha": ["Rahul", "Arun", "Sneha"],
  "Team Beta": ["Kiran", "Divya", "Vishal"],
  "Team Gamma": ["Anu", "Rohit", "Meena"]
};

function Dashboard() {
  const [selectedTeam, setSelectedTeam] = useState("Team Alpha");
  const [attendance, setAttendance] = useState({});

  const markAttendance = (name, status) => {
    setAttendance({ ...attendance, [name]: status });
  };

  return (
    <div className="dashboard-container">
      
      <div className="topbar">
        <h2>Hackathon Dashboard</h2>

        <select
          value={selectedTeam}
          onChange={(e) => setSelectedTeam(e.target.value)}
        >
          {Object.keys(teamsData).map((team) => (
            <option key={team}>{team}</option>
          ))}
        </select>
      </div>

      <div className="table-container">
        <h3>{selectedTeam} - Participants</h3>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Present</th>
              <th>Absent</th>
            </tr>
          </thead>

          <tbody>
            {teamsData[selectedTeam].map((name) => (
              <tr key={name}>
                <td>{name}</td>
                <td>
                  <input
                    type="radio"
                    name={name}
                    onChange={() => markAttendance(name, "Present")}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name={name}
                    onChange={() => markAttendance(name, "Absent")}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;