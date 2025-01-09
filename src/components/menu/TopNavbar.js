import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUserCircle } from "@fortawesome/free-solid-svg-icons";

const TopNavbar = ({ sidebarWidth, isSidebarOpen, toggleSidebar, selectedMenu }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${isSidebarOpen ? sidebarWidth : 60}px)`,
        marginLeft: `${isSidebarOpen ? sidebarWidth : 60}px`,
        backgroundColor: "transparent",
        boxShadow: "none",
        transition: "margin-left 0.3s ease, width 0.3s ease",
      }}
    >
      <Toolbar>
        {/* Botão para alternar o Sidebar */}
        <IconButton
          onClick={toggleSidebar}
          sx={{
            color: "#0098c9",
            mr: 2,
            fontSize: "1.2rem",
          }}
        >
          <FontAwesomeIcon icon={faBars} />
        </IconButton>

        {/* Ícone e Texto do Menu Selecionado */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center", // Alinha ícone e texto verticalmente
            gap: "8px", // Espaço entre o ícone e o texto
            flexGrow: 1, // Ocupa o espaço restante
            overflow: "hidden",
          }}
        >
          {selectedMenu.icon && (
            <FontAwesomeIcon
              icon={selectedMenu.icon}
              style={{
                fontSize: "0.8em",
                color: "#0098c9",
              }}
            />
          )}
          <Typography
            variant="h6"
            sx={{
              color: "#0098c9",
              fontSize: "1rem",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {selectedMenu.text || "Selecione um Menu"}
          </Typography>
        </Box>

        {/* Ícone do Usuário */}
        <IconButton sx={{ color: "#0098c9", fontSize: "1.2rem" }}>
          <FontAwesomeIcon icon={faUserCircle} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavbar;
