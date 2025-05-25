import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SidebarComponent from './Pages/sidebar/sidebar';
import MainContent from './Pages/main/mainComponent';
import HistoryPage from './Pages/history/historyPage';
import CalenderPage from './Pages/calender/calenderPage';
import Dashboard from './Pages/dashboard/dashboardPage';

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Router>
      <div className="app">
        <div className="container">
          <SidebarComponent collapsed={collapsed} />
          <MainContent onToggleSidebar={toggleSidebar}>
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/history" element={<HistoryPage />} />
              <Route path="/calendar" element={<CalenderPage />} />
            </Routes>
          </MainContent>
        </div>
      </div>
    </Router>
  );
}

export default App;
