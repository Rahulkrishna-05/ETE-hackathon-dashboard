import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Dashboard from "./pages/student_dashboard";
import JudgeDashboard from "./pages/judge_dashboard";
import TeamGrade from "./pages/gradepage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/judge" element={<JudgeDashboard />} />
        <Route path="/judge/team/:teamName" element={<TeamGrade />} />
      </Routes>
    </Router>
  );
}

export default App;