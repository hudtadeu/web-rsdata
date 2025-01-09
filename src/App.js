import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/menu/Navbar";
import TopNavbar from "./components/menu/TopNavbar";
import Dashboard from "./components/dashboard/Dashboard";
import Indicadores from "./components/indicadores/Indicadores"; // Importe o componente

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const sidebarWidth = 250;
  const sidebarMinWidth = 60;

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <Router>
      <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
        {/* Navbar */}
        <Navbar
          isOpen={isSidebarOpen}
          sidebarWidth={sidebarWidth}
          sidebarMinWidth={sidebarMinWidth}
        />
        {/* Área Principal */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          {/* TopNavbar */}
          <TopNavbar
            sidebarWidth={isSidebarOpen ? sidebarWidth : sidebarMinWidth}
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
          />
          {/* Conteúdo */}
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
              <Route path="/indicadores" element={<Indicadores />} /> {/* Nova rota */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
