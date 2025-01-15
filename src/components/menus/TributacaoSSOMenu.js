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
  faReceipt,
} from "@fortawesome/free-solid-svg-icons";

const TributacaoSSOMenu = ({ isOpen, isActive, onClick }) => {
  const [openSubmenu, setOpenSubmenu] = useState(false);
  const [opeFAP, setOpeFAP] = useState(false); 
  const [openDiagnostico, setOpenDiagnostico] = useState(false); 

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
            <FontAwesomeIcon icon={faReceipt} style={{ fontSize: "16px" }} />
          </ListItemIcon>
          {isOpen && (
            <>
              <ListItemText
                primary="Tributação SSO"
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
             primary="GILRAT-RAT"
              primaryTypographyProps={{
             sx: { fontSize: "0.75rem", fontWeight: "400" },
               }}
              />
              </ListItemButton>
            </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => setOpeFAP(!opeFAP)}
              sx={{ padding: "4px 10px" }}
            >
              <ListItemText
                primary="FAP"
                primaryTypographyProps={{
                  sx: { fontSize: "0.75rem", fontWeight: "400" },
                }}
              />
              <FontAwesomeIcon
                icon={opeFAP ? faChevronDown : faChevronRight}
                style={{ fontSize: "12px" }}
              />
            </ListItemButton>
          </ListItem>
          <Collapse in={opeFAP} timeout="auto" unmountOnExit>
            <List disablePadding sx={{ paddingLeft: "15px" }}>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ padding: "3px 10px" }}>
                        <ListItemText
                            primary="Eventos Adversos"
                            primaryTypographyProps={{
                            sx: { fontSize: "0.75rem", fontWeight: "400" },
                            }}
                        />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ padding: "3px 10px" }}>
                        <ListItemText
                            primary="Afastamentos"
                            primaryTypographyProps={{
                            sx: { fontSize: "0.75rem", fontWeight: "400" },
                            }}
                        />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ padding: "3px 10px" }}>
                        <ListItemText
                            primary="Atestados"
                            primaryTypographyProps={{
                            sx: { fontSize: "0.75rem", fontWeight: "400" },
                            }}
                        />
                        </ListItemButton>
                    </ListItem>
                    </List>
          </Collapse>
              {/* Indicadores */}
              <ListItem disablePadding>
         <ListItemButton sx={{ padding: "3px 10px" }}>
          <ListItemText
             primary="CAT"
              primaryTypographyProps={{
             sx: { fontSize: "0.75rem", fontWeight: "400" },
               }}
              />
              </ListItemButton>
            </ListItem>
          <ListItem disablePadding>
         <ListItemButton sx={{ padding: "3px 10px" }}>
          <ListItemText
             primary="FAE"
              primaryTypographyProps={{
             sx: { fontSize: "0.75rem", fontWeight: "400" },
               }}
              />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
         <ListItemButton sx={{ padding: "3px 10px" }}>
          <ListItemText
             primary="NTP"
              primaryTypographyProps={{
             sx: { fontSize: "0.75rem", fontWeight: "400" },
               }}
              />
              </ListItemButton>
            </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => setOpenDiagnostico(!openDiagnostico)}
              sx={{ padding: "4px 10px" }}
            >
              <ListItemText
                primary="Diagnóstico"
                primaryTypographyProps={{
                  sx: { fontSize: "0.75rem", fontWeight: "400" },
                }}
              />
              <FontAwesomeIcon
                icon={openDiagnostico ? faChevronDown : faChevronRight}
                style={{ fontSize: "12px" }}
              />
            </ListItemButton>
          </ListItem>
          <Collapse in={openDiagnostico} timeout="auto" unmountOnExit>
            <List disablePadding sx={{ paddingLeft: "15px" }}>
              {/* Documentos Legais */}
              <ListItem disablePadding>
                        <ListItemButton sx={{ padding: "3px 10px" }}>
                        <ListItemText
                            primary="Evolução"
                            primaryTypographyProps={{
                            sx: { fontSize: "0.75rem", fontWeight: "400" },
                            }}
                        />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ padding: "3px 10px" }}>
                        <ListItemText
                            primary="Histórico"
                            primaryTypographyProps={{
                            sx: { fontSize: "0.75rem", fontWeight: "400" },
                            }}
                        />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ padding: "3px 10px" }}>
                        <ListItemText
                            primary="Análise Crítica"
                            primaryTypographyProps={{
                            sx: { fontSize: "0.75rem", fontWeight: "400" },
                            }}
                        />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ padding: "3px 10px" }}>
                        <ListItemText
                            primary="Custeio"
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
             primary="Ações"
              primaryTypographyProps={{
             sx: { fontSize: "0.75rem", fontWeight: "400" },
               }}
              />
              </ListItemButton>
            </ListItem>
        </List>
      </Collapse>
    </List>
  );
};

export default TributacaoSSOMenu;
