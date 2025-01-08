import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Divider,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faGavel,
  faCogs,
  faFire,
  faBuilding,
  faBook,
  faUsers,
  faFileInvoice,
  faClipboardList,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = ({ isOpen, sidebarWidth, sidebarMinWidth }) => {
  const menuItems = [
    { text: "Início", icon: faHome, link: "/" },
    { text: "Conformidade Legal", icon: faGavel, link: "/conformidade-legal" },
    { text: "GPO", icon: faCogs, link: "/gpo" },
    { text: "Gestão de EPI's", icon: faClipboardList, link: "/gestao-epis" },
    { text: "Incêndio e Pânico", icon: faFire, link: "/incendio-panico" },
    { text: "HO", icon: faBuilding, link: "/ho" },
    { text: "Cultura SSO", icon: faBook, link: "/cultura-sso" },
    { text: "Perícias e Demandas Judiciais", icon: faUsers, link: "/pericias" },
    { text: "Contratadas", icon: faFileInvoice, link: "/contratadas" },
    { text: "Tributação SSO", icon: faGavel, link: "/tributacao-sso" },
  ];

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open
      sx={{
        width: isOpen ? sidebarWidth : sidebarMinWidth, 
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: isOpen ? sidebarWidth : sidebarMinWidth,
          boxSizing: "border-box",
          backgroundColor: "#0098c9",
          color: "#fff",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          transition: "width 0.3s ease",
          overflowX: "hidden", 
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        {/* Logo */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: isOpen ? "center" : "flex-start",
            padding: "15px",
          }}
        >
          {isOpen && (
            <img
              src="/logo-rsdata.png"
              alt="RS Data Logo"
              style={{
                width: "120px",
                height: "auto",
              }}
            />
          )}
        </Box>
        {/* Menu */}
        <List>
          {menuItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                component={Link}
                to={item.link}
                sx={{
                  borderRadius: "6px",
                  transition: "all 0.3s ease",
                  margin: "4px 8px",
                  padding: isOpen ? "10px 16px" : "10px", 
                  justifyContent: "flex-start", 
                  backgroundColor: "transparent",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#e0f7fa",
                    color: "#0078a3", 
                  },
                  "&:hover .MuiListItemIcon-root": {
                    color: "#0078a3", 
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color: "#fff",
                    minWidth: 36, 
                    transition: "color 0.3s ease", 
                  }}
                >
                  <FontAwesomeIcon icon={item.icon} />
                </ListItemIcon>
                {isOpen && (
                  <ListItemText
                    primary={item.text}
                    sx={{
                      color: "inherit",
                      fontWeight: "bold",
                      fontSize: "0.9rem",
                      whiteSpace: "normal", 
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 2, 
                      WebkitBoxOrient: "vertical",
                    }}
                  />
                )}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
      {/* Botão Sair */}
      <Divider />
      <Box sx={{ padding: "10px 0" }}>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => alert("Você saiu!")}
            sx={{
              borderRadius: "6px",
              transition: "all 0.3s ease",
              margin: "4px 8px",
              justifyContent: isOpen ? "flex-start" : "center",
              backgroundColor: "transparent",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#e0f7fa",
                color: "#0078a3", 
              },
              "&:hover .MuiListItemIcon-root": {
                color: "#0078a3", 
              },
            }}
          >
            <ListItemIcon
              sx={{
                color: "#fff",
                minWidth: 36,
                transition: "color 0.3s ease", 
              }}
            >
              <FontAwesomeIcon icon={faSignOutAlt} />
            </ListItemIcon>
            {isOpen && (
              <ListItemText
                primary="Sair"
                sx={{
                  color: "inherit",
                  fontWeight: "bold",
                  fontSize: "0.9rem",
                  whiteSpace: "normal", 
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 2, 
                  WebkitBoxOrient: "vertical",
                }}
              />
            )}
          </ListItemButton>
        </ListItem>
      </Box>
    </Drawer>
  );
};

export default Navbar;
