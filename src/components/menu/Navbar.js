import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Divider,
  TextField,
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
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = ({ isOpen, sidebarWidth, sidebarMinWidth, setSelectedMenu }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const menuItems = [
    { text: "Início", icon: faHome, link: "/", showChevron: false },
    { text: "Indicadores", icon: faClipboardList, link: "/indicadores", showChevron: false },
    { text: "Conformidade Legal", icon: faGavel, link: "/conformidade-legal", showChevron: true },
    { text: "GPO", icon: faCogs, link: "/gpo", showChevron: true },
    { text: "Gestão de EPI's", icon: faClipboardList, link: "/gestao-epis", showChevron: true },
    { text: "Incêndio e Pânico", icon: faFire, link: "/incendio-panico", showChevron: true },
    { text: "HO", icon: faBuilding, link: "/ho", showChevron: true },
    { text: "Cultura SSO", icon: faBook, link: "/cultura-sso", showChevron: true },
    { text: "Perícias e Demandas Judiciais", icon: faUsers, link: "/pericias", showChevron: true },
    { text: "Contratadas", icon: faFileInvoice, link: "/contratadas", showChevron: true },
    { text: "Tributação SSO", icon: faGavel, link: "/tributacao-sso", showChevron: true },
  ];

  const filteredItems = menuItems.filter((item) =>
    item.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
          borderRadius: "0px 10px 10px 0px",
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
            padding: "20px",
          }}
        >
          {isOpen ? (
            <img
              src="/logo-rsdata.png"
              alt="RS Data Logo Aberta"
              style={{
                width: "120px",
                height: "auto",
              }}
            />
          ) : (
            <img
              src="/logo-rs.png"
              alt="RS Data Logo Fechada"
              style={{
                width: "40px",
                height: "auto",
              }}
            />
          )}
        </Box>
        {/* Campo de Busca */}
        <Box sx={{ padding: "8px 16px" }}>
          {isOpen && (
            <TextField
              fullWidth
              size="small"
              variant="outlined"
              placeholder="Buscar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                sx: {
                  backgroundColor: "#0078a3",
                  color: "#fff",
                  borderRadius: "5px",
                  height: "27px",
                  padding: "0 8px",
                  fontSize: "0.8rem",
                  "& input::placeholder": {
                    color: "#fff",
                    opacity: 1,
                  },
                },
                disableUnderline: true,
              }}
              sx={{
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
            />
          )}
        </Box>
        {/* Menu */}
        <List>
          {menuItems.map((item, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={{
                justifyContent: isOpen ? "flex-start" : "center",
                padding: isOpen ? "4px 16px" : "4px 0",
                marginBottom: isOpen ? "4px" : "0px",
              }}
            >
              <ListItemButton
                component={Link}
                to={item.link}
                onClick={() => setSelectedMenu({ text: item.text, icon: item.icon })} 
                sx={{
                  borderRadius: isOpen ? "4px" : "5px",
                  justifyContent: isOpen ? "flex-start" : "center",
                  padding: isOpen ? "4px" : "4px",
                  backgroundColor: "transparent",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#e0f7fa",
                    color: "#0078a3",
                    "& .MuiListItemIcon-root": {
                      color: "#0078a3",
                    },
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color: "#fff",
                    justifyContent: "center",
                    minWidth: "auto",
                    fontSize: isOpen ? "0.85rem" : "0.85rem",
                    marginRight: isOpen ? "8px" : "0px",
                  }}
                >
                  <FontAwesomeIcon icon={item.icon} />
                </ListItemIcon>
                {isOpen && (
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      sx: {
                        fontSize: "0.75rem",
                        fontWeight: "500",
                        color: "inherit",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: "vertical",
                      },
                    }}
                  />
                )}
                {isOpen && item.showChevron && (
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    style={{ marginLeft: "auto", fontSize: "0.8rem" }}
                  />
                )}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
      {/* Botão Sair */}
      <Divider />
      <Box sx={{ padding: "5px 0" }}>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => alert("Você saiu!")}
            sx={{
              borderRadius: "4px",
              transition: "all 0.3s ease",
              margin: "2px 8px",
              justifyContent: isOpen ? "flex-start" : "center",
              backgroundColor: "transparent",
              color: "#fff",
              padding: "4px 8px",
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
                minWidth: 28,
                transition: "color 0.3s ease",
              }}
            >
              <FontAwesomeIcon
                icon={faSignOutAlt}
                style={{ fontSize: "0.8rem" }}
              />
            </ListItemIcon>
            {isOpen && (
              <ListItemText
                primary="Sair"
                primaryTypographyProps={{
                  sx: {
                    fontSize: "0.8rem",
                    fontWeight: "500",
                    color: "inherit",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: "vertical",
                  },
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
