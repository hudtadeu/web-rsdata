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
  faBook,
} from "@fortawesome/free-solid-svg-icons";

const CulturaSSOMenu = ({ isOpen, isActive, onClick }) => {
  const [openSubmenu, setOpenSubmenu] = useState(false);
  const [openPlanejamento, setOpenPlanejamento] = useState(false); 
  const [openCampanhasSSO, setOpenCampanhasSSO] = useState(false); 

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
        <FontAwesomeIcon icon={faBook} style={{ fontSize: "16px" }} />
      </ListItemIcon>
      {isOpen && (
        <>
          <ListItemText
            primary="Cultura SSO"
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
            <ListItemButton
              onClick={() => setOpenPlanejamento(!openPlanejamento)}
              sx={{ padding: "4px 10px" }}
            >
              <ListItemText
                primary="Planejamento"
                primaryTypographyProps={{
                  sx: { fontSize: "0.75rem", fontWeight: "400" },
                }}
              />
              <FontAwesomeIcon
                icon={openPlanejamento ? faChevronDown : faChevronRight}
                style={{ fontSize: "12px" }}
              />
            </ListItemButton>
          </ListItem>
          <Collapse in={openPlanejamento} timeout="auto" unmountOnExit>
            <List disablePadding sx={{ paddingLeft: "15px" }}>
              {/* Documentos Legais */}
              <ListItem disablePadding>
                <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                    primary="Programas"
                    primaryTypographyProps={{
                     sx: { fontSize: "0.75rem", fontWeight: "400" },
                     }}
                    />
                     </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                     <ListItemText
                         primary="Agenda"
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
                       primary="DDS / DSS"
                        primaryTypographyProps={{
                       sx: { fontSize: "0.75rem", fontWeight: "400" },
                         }}
                        />
                        </ListItemButton>
                      </ListItem>
                         <ListItem disablePadding>
                        <ListItemButton sx={{ padding: "3px 10px" }}>
                         <ListItemText
                         primary="Alertas de Segurança"
                          primaryTypographyProps={{
                         sx: { fontSize: "0.75rem", fontWeight: "400" },
                         }}
                         />
                       </ListItemButton>
                        </ListItem>
                           <ListItem disablePadding>
                        <ListItemButton sx={{ padding: "3px 10px" }}>
                        <ListItemText
                       primary="Participação dos Empregados"
                       primaryTypographyProps={{
                        sx: { fontSize: "0.75rem", fontWeight: "400" },
                       }}
                      />
                    </ListItemButton>
                   </ListItem>
                                                          
              {/* Indicadores */}
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => setOpenCampanhasSSO(!openCampanhasSSO)}
              sx={{ padding: "4px 10px" }}
            >
              <ListItemText
                primary="Campanhas de SSO/SSMA"
                primaryTypographyProps={{
                  sx: { fontSize: "0.75rem", fontWeight: "400" },
                }}
              />
              <FontAwesomeIcon
                icon={openCampanhasSSO ? faChevronDown : faChevronRight}
                style={{ fontSize: "12px" }}
              />
            </ListItemButton>
          </ListItem>
          <Collapse in={openCampanhasSSO} timeout="auto" unmountOnExit>
            <List disablePadding sx={{ paddingLeft: "15px" }}>
              {/* Documentos Legais */}
              <ListItem disablePadding>
                        <ListItemButton sx={{ padding: "3px 10px" }}>
                        <ListItemText
                            primary="5S"
                            primaryTypographyProps={{
                            sx: { fontSize: "0.75rem", fontWeight: "400" },
                            }}
                        />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ padding: "3px 10px" }}>
                        <ListItemText
                            primary="SIPAT"
                            primaryTypographyProps={{
                            sx: { fontSize: "0.75rem", fontWeight: "400" },
                            }}
                        />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ padding: "3px 10px" }}>
                        <ListItemText
                            primary="Demais campanhas mensais"
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
                      primary="Pesquisa de Satisfação"
                      primaryTypographyProps={{
                      sx: { fontSize: "0.75rem", fontWeight: "400" },
                    }}
                     />
                    </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                    <ListItemText
                         primary="Diagnóstico Clima"
                          primaryTypographyProps={{
                         sx: { fontSize: "0.75rem", fontWeight: "400" },
                     }}
                         />
                    </ListItemButton>
                     </ListItem>
                     <ListItem disablePadding>
                     <ListItemButton sx={{ padding: "3px 10px" }}>
                     <ListItemText
                         primary="Mapa de Calor"
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

export default CulturaSSOMenu;
