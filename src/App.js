import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import TopNavbar from "./components/TopNavbar";
import Inicio from "./components/dashboard/Inicio";
import Dashboard from "./components/indicadores/Dashboard";
import Login from "./components/login/Login";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState({ text: "", icon: null });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const sidebarWidth = 250;
  const sidebarMinWidth = 60;

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
        {isAuthenticated && (
          <Navbar
            isOpen={isSidebarOpen}
            sidebarWidth={sidebarWidth}
            sidebarMinWidth={sidebarMinWidth}
            setSelectedMenu={setSelectedMenu}
            onLogout={handleLogout}
          />
        )}
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          {isAuthenticated && (
            <TopNavbar
              sidebarWidth={isSidebarOpen ? sidebarWidth : sidebarMinWidth}
              isSidebarOpen={isSidebarOpen}
              toggleSidebar={toggleSidebar}
              selectedMenu={selectedMenu}
            />
          )}
          <div
            style={{
              flex: 1,
              overflow: "auto",
              marginTop: isAuthenticated ? "64px" : "0",
              padding: "16px",
            }}
          >
            <Routes>
              {!isAuthenticated ? (
                <Route
                  path="*"
                  element={<Login onLogin={() => setIsAuthenticated(true)} />}
                />
              ) : (
                <>
                  <Route path="/inicio" element={<Inicio />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="*" element={<Navigate to="/inicio" replace />} />
                </>
              )}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
