import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/menu/Navbar";
import TopNavbar from "./components/menu/TopNavbar";
import Dashboard from "./components/dashboard/Dashboard";
import Indicadores from "./components/indicadores/Indicadores";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Estado de abertura do Sidebar
  const [selectedMenu, setSelectedMenu] = useState({ text: "", icon: null });
  const sidebarWidth = 250; // Largura do Sidebar aberto
  const sidebarMinWidth = 60; // Largura do Sidebar fechado

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev); // Alternar estado do Sidebar
  };

  return (
    <Router>
      <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
        {/* Navbar */}
        <Navbar
          isOpen={isSidebarOpen}
          sidebarWidth={sidebarWidth}
          sidebarMinWidth={sidebarMinWidth}
          setSelectedMenu={setSelectedMenu} // Passa a função para atualizar o menu selecionado
        />
        {/* Área Principal */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          {/* TopNavbar */}
          <TopNavbar
            sidebarWidth={isSidebarOpen ? sidebarWidth : sidebarMinWidth}
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
            selectedMenu={selectedMenu} // Passa o menu selecionado
          />
          {/* Conteúdo */}
          <div
            style={{
              flex: 1,
              overflow: "auto",
              marginTop: "64px", // Altura do TopNavbar
              padding: "16px", // Espaçamento interno do conteúdo
            }}
          >
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/indicadores" element={<Indicadores />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
