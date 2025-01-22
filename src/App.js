import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import TopNavbar from "./components/TopNavbar";
import Inicio from "./components/dashboard/Inicio";
import Dashboard from "./components/indicadores/Dashboard";
import Login from "./components/login/Login";
import LegalRequisitosPage from "./components/pages/LegaisRequisitosPage";
import OrdemServicoElaboracao from "./components/pages/OrdemServicoElaboracao";
import AnalisePreliminarRisco from "./components/pages/AnalisePreliminarRisco";
import AuditoriaConformidadeInterna from "./components/pages/AuditoriaConformidadeInterna";
import TesteAprovacaoNovosEpis from "./components/pages/TesteAprovacaoNovosEpis";
import RegistroDds from "./components/pages/RegistroDds";
import PesquisaSatisfacao from "./components/pages/PesquisaSatisfacao";
import JudiciaisPrevidenciaria from "./components/pages/JudiciaisPrevidenciaria";
import JudiciaisTrabalhista from "./components/pages/JudiciaisTrabalhistas";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState({ text: "", icon: null });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const sidebarWidth = 250;
  const sidebarMinWidth = 60;

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(authStatus === 'true');
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

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
              <Route path="/inicio" element={<Inicio />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/requisitos-legais" element={<LegalRequisitosPage />} />
              <Route path="/ordem-servico-elaboracao" element={<OrdemServicoElaboracao />} />
              <Route path="/analise-preliminar-riscos" element={<AnalisePreliminarRisco />} />
              <Route path="/auditoria-conformidade-interna" element={<AuditoriaConformidadeInterna />} />
              <Route path="/teste-aprovacao-novos-epis" element={<TesteAprovacaoNovosEpis />} />
              <Route path="/judiciais-trabalhista" element={<JudiciaisTrabalhista />} />
              <Route path="/judiciais-previdenciaria" element={<JudiciaisPrevidenciaria />} />
              <Route path="/pesquisa-satisfacao" element={<PesquisaSatisfacao />} />
              <Route path="/registro-dds" element={<RegistroDds />} />
              <Route path="*" element={<Navigate to="/inicio" replace />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
