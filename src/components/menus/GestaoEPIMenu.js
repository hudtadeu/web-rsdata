import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronDown,
  faHardHat,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const GestaoEPIMenu= ({ isOpen, isActive, onClick }) => {
  const [openSubmenu, setOpenSubmenu] = useState(false);
  const [openMonitoramentoEPIs, setOpenMonitoramentoEPIs] = useState(false); 
  const [openPro, setOpenPro] = useState(false); 


  return (
    <List disablePadding>
      <ListItem disablePadding>
      <ListItemButton
      onClick={() => {
        onClick(); 
        setOpenSubmenu(!openSubmenu); 
      }}
          sx={{
            padding: isOpen ? "5px 5px" : "8px",
            justifyContent: isOpen ? "flex-start" : "center",
            color: isActive ? "#0078a3" : "white",
            backgroundColor: isActive ? "#e0f7fa" : "transparent",
            borderRadius: "5px", 
            margin: "5px 5px 5px 5px", 
            width: "90%", 
            maxWidth: "300px", 
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
              minWidth: "30px",
              justifyContent: "center",
              color: isActive ? "#0078a3" : "white",
            }}
          >
            <FontAwesomeIcon icon={faHardHat} style={{ fontSize: "16px" }} />
          </ListItemIcon>
          {isOpen && (
            <>
              <ListItemText
                primary="Gestão de EPI's"
                primaryTypographyProps={{
                  sx: { fontSize: "0.75rem", fontWeight: "500" },
                }}
              />
              <FontAwesomeIcon
                icon={openSubmenu ? faChevronDown : faChevronRight}
                style={{ fontSize: "12px", marginLeft: "auto" }}
              />
            </>
          )}
        </ListItemButton>
      </ListItem>
      <Collapse in={openSubmenu && isOpen} timeout="auto" unmountOnExit>
        <List disablePadding sx={{ paddingLeft: "15px" }}>
        <ListItem disablePadding>
         <ListItemButton sx={{ padding: "3px 10px" }}>
          <ListItemText
             primary="Cadastro de EPIs"
              primaryTypographyProps={{
             sx: { fontSize: "0.75rem", fontWeight: "400" },
               }}
              />
              </ListItemButton>
            </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => setOpenMonitoramentoEPIs(!openMonitoramentoEPIs)}
              sx={{ padding: "4px 10px" }}
            >
              <ListItemText
                primary="Monitoramento dos EPIs"
                primaryTypographyProps={{
                  sx: { fontSize: "0.75rem", fontWeight: "400" },
                }}
              />
              <FontAwesomeIcon
                icon={openMonitoramentoEPIs ? faChevronDown : faChevronRight}
                style={{ fontSize: "12px" }}
              />
            </ListItemButton>
          </ListItem>
          <Collapse in={openMonitoramentoEPIs} timeout="auto" unmountOnExit>
            <List disablePadding sx={{ paddingLeft: "15px" }}>
              {/* Documentos Legais */}
              <ListItem disablePadding>
                        <ListItemButton sx={{ padding: "3px 10px" }}>
                        <ListItemText
                            primary="Entrega e Devolução dos EPIs"
                            primaryTypographyProps={{
                            sx: { fontSize: "0.75rem", fontWeight: "400" },
                            }}
                        />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ padding: "3px 10px" }}>
                        <ListItemText
                            primary="Ficha de EPI"
                            primaryTypographyProps={{
                            sx: { fontSize: "0.75rem", fontWeight: "400" },
                            }}
                        />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ padding: "3px 10px" }}>
                        <ListItemText
                            primary="Inspeções de Uso"
                            primaryTypographyProps={{
                            sx: { fontSize: "0.75rem", fontWeight: "400" },
                            }}
                        />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ padding: "3px 10px" }}>
                        <ListItemText
                            primary="Eficácia dos EPIs"
                            primaryTypographyProps={{
                            sx: { fontSize: "0.75rem", fontWeight: "400" },
                            }}
                        />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton 
                        component={Link}
                        to="/teste-aprovacao-novos-epis"
                        sx={{ padding: "3px 10px" }}>
                        <ListItemText
                            primary="Registro de Teste e Aprovação de Novos EPIs"
                            primaryTypographyProps={{
                            sx: { fontSize: "0.75rem", fontWeight: "400" },
                            }}
                        />
                        </ListItemButton>
                    </ListItem>
                    </List>
          </Collapse>
              <ListItem disablePadding>
         <ListItemButton sx={{ padding: "3px 10px" }}>
          <ListItemText
             primary="Controle do Estoque de EPIs"
              primaryTypographyProps={{
             sx: { fontSize: "0.75rem", fontWeight: "400" },
               }}
              />
              </ListItemButton>
            </ListItem>
          <ListItem disablePadding>
         <ListItemButton sx={{ padding: "3px 10px" }}>
          <ListItemText
             primary="Indicadores"
              primaryTypographyProps={{
             sx: { fontSize: "0.75rem", fontWeight: "400" },
               }}
              />
              </ListItemButton>
            </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => setOpenPro(!openPro)}
              sx={{ padding: "4px 10px" }}
            >
              <ListItemText
                primary="PRO"
                primaryTypographyProps={{
                  sx: { fontSize: "0.75rem", fontWeight: "400" },
                }}
              />
              <FontAwesomeIcon
                icon={openPro ? faChevronDown : faChevronRight}
                style={{ fontSize: "12px" }}
              />
            </ListItemButton>
          </ListItem>
          <Collapse in={openPro} timeout="auto" unmountOnExit>
            <List disablePadding sx={{ paddingLeft: "15px" }}>
              <ListItem disablePadding>
                        <ListItemButton sx={{ padding: "3px 10px" }}>
                        <ListItemText
                            primary="Anexos"
                            primaryTypographyProps={{
                            sx: { fontSize: "0.75rem", fontWeight: "400" },
                            }}
                        />
                        </ListItemButton>
                    </ListItem>
                    </List>
          </Collapse>
        </List>
      </Collapse>
    </List>
  );
};

export default GestaoEPIMenu;
