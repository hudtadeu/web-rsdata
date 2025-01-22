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
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSignOutAlt,
  faChevronDown,
  faBarChart,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ConformidadeLegalMenu from "./menus/ConformidadeLegalMenu";
import GPOMenu from "./menus/GPOMenu";
import GestaoEPIMenu from "./menus/GestaoEPIMenu";
import IncendioPanicoMenu from "./menus/IncendioPanicoMenu";
import CulturaSSOMenu from "./menus/CulturaSSOMenu";
import PericiasMenu from "./menus/PericiasMenu";
import TributacaoSSOMenu from "./menus/TributacaoSSOMenu";
import ContratadasMenu from "./menus/ContratadasMenu";
import HOMenu from "./menus/HOMenu";

const Navbar = ({ isOpen, sidebarWidth, sidebarMinWidth, setSelectedMenu, onLogout }) => {
  const [activeMenu, setActiveMenu] = useState(null); 

  const menuItems = [
    { id: "inicio", text: "Início", icon: faHome, link: "/inicio" },
    { id: "dashboard", text: "Dashboard", icon: faBarChart, link: "/dashboard" },
  ];

  const handleMenuClick = (menuId) => {
    setActiveMenu(menuId); 
  };

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
          overflowX: "visible", 
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#0078a3",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#005f73",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#e0f7fa",
            borderRadius: "10px",
          },
        },
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        {/* Logo */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          {isOpen ? (
            <img
              src="/rsdata-logo.png"
              alt="RS Data Logo Aberta"
              style={{
                width: "120px",
                height: "auto",
              }}
            />
          ) : (
            <img
              src="/rs-logo.png"
              alt="RS Data Logo Fechada"
              style={{
                width: "30px",
                height: "auto",
              }}
            />
          )}
        </Box>

        {/* Menu */}
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.id}
              disablePadding
              sx={{
                justifyContent: isOpen ? "flex-start" : "center",
                padding: isOpen ? "4px 15px" : "5px 10px",
                marginBottom: isOpen ? "0px" : "5px",
              }}
            >
              <ListItemButton
                component={Link}
                to={item.link}
                onClick={() => {
                  handleMenuClick(item.id);
                  setSelectedMenu({ text: item.text, icon: item.icon });
                }}
                sx={{
                  borderRadius: isOpen ? "4px" : "5px",
                  justifyContent: isOpen ? "flex-start" : "center",
                  padding: isOpen ? "4px" : "4px",
                  backgroundColor: activeMenu === item.id ? "#e0f7fa" : "transparent",
                  color: activeMenu === item.id ? "#0078a3" : "#fff",
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
                    color: activeMenu === item.id ? "#0078a3" : "#fff",
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
              </ListItemButton>
            </ListItem>
          ))}
          {/* Menus Adicionais */}
          <ConformidadeLegalMenu
            isOpen={isOpen}
            isActive={activeMenu === "conformidadeLegal"}
            onClick={() => handleMenuClick("conformidadeLegal")}
          />
          <GPOMenu
            isOpen={isOpen}
            isActive={activeMenu === "gpo"}
            onClick={() => handleMenuClick("gpo")}
          />
          <GestaoEPIMenu
            isOpen={isOpen}
            isActive={activeMenu === "gestaoEPI"}
            onClick={() => handleMenuClick("gestaoEPI")}
          />
          <IncendioPanicoMenu
            isOpen={isOpen}
            isActive={activeMenu === "incendioPanico"}
            onClick={() => handleMenuClick("incendioPanico")}
          />
          <HOMenu
            isOpen={isOpen}
            isActive={activeMenu === "ho"}
            onClick={() => handleMenuClick("ho")}
          />
          <CulturaSSOMenu
            isOpen={isOpen}
            isActive={activeMenu === "culturaSSO"}
            onClick={() => handleMenuClick("culturaSSO")}
          />
          <PericiasMenu
            isOpen={isOpen}
            isActive={activeMenu === "pericias"}
            onClick={() => handleMenuClick("pericias")}
          />
           <ContratadasMenu
            isOpen={isOpen}
            isActive={activeMenu === "contratadas"}
            onClick={() => handleMenuClick("contratadas")}
          />
          <TributacaoSSOMenu
            isOpen={isOpen}
            isActive={activeMenu === "tributacaoSSO"}
            onClick={() => handleMenuClick("tributacaoSSO")}
          />
        </List>
      </Box>

      {/* Botão Sair */}
      <Divider />
      <Box sx={{ padding: "5px 0" }}>
        <ListItem disablePadding>
        <ListItemButton
            onClick={onLogout} 
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
