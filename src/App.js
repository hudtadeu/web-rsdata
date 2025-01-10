import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TopNavbar from "./components/TopNavbar";
import Dashboard from "./components/dashboard/Dashboard";
import Indicadores from "./components/indicadores/Indicadores";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState({ text: "", icon: null });
  const sidebarWidth = 250; 
  const sidebarMinWidth = 60; 

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev); 
  };

  return (
    <Router>
      <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
        <Navbar
          isOpen={isSidebarOpen}
          sidebarWidth={sidebarWidth}
          sidebarMinWidth={sidebarMinWidth}
          setSelectedMenu={setSelectedMenu} 
        />
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <TopNavbar
            sidebarWidth={isSidebarOpen ? sidebarWidth : sidebarMinWidth}
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
            selectedMenu={selectedMenu}
          />
          <div
            style={{
              flex: 1,
              overflow: "auto",
              marginTop: "64px", 
              padding: "16px", 
            }}
          >
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Indicadores />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
