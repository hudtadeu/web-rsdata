import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/menu/Navbar";
import TopNavbar from "./components/menu/TopNavbar";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Estado do menu lateral
  const sidebarWidth = 250; // Largura total do menu aberto
  const sidebarMinWidth = 60; // Largura do menu minimizado (somente ícones)

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev); // Alterna entre aberto e minimizado
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
            sidebarWidth={isSidebarOpen ? sidebarWidth : sidebarMinWidth} // Ajusta o layout com base no estado do menu
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
          />
          {/* Conteúdo */}
          <div
            style={{
              flex: 1,
              overflow: "auto", // Permite rolagem no conteúdo principal
              marginTop: "64px", // Ajuste para não sobrepor o TopNavbar
              padding: "16px",
            }}
          >
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
