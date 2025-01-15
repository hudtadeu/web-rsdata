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
  faUsers,
  faGavel,
} from "@fortawesome/free-solid-svg-icons";

const PericiasMenu = ({ isOpen, isActive, onClick }) => {
  const [openSubmenu, setOpenSubmenu] = useState(false);
  const [openRegistro, setOpenRegistro] = useState(false); 
  const [openJudiciais, setOpenJudiciais] = useState(false); 

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
            <FontAwesomeIcon icon={faGavel} style={{ fontSize: "16px" }} />
          </ListItemIcon>
          {isOpen && (
            <>
              <ListItemText
                primary="Perícias e Demandas Judiciais"
                primaryTypographyProps={{
                  sx: {
                    fontSize: "0.75rem",
                    fontWeight: "500",
                  },
                }}
              />
              <FontAwesomeIcon
                icon={openSubmenu ? faChevronDown : faChevronRight}
                style={{
                  fontSize: "12px",
                  marginLeft: "auto",
                }}
              />
            </>
          )}
        </ListItemButton>
      </ListItem>
      <Collapse in={openSubmenu && isOpen} timeout="auto" unmountOnExit>
        <List disablePadding sx={{ paddingLeft: "15px" }}>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => setOpenRegistro(!openRegistro)}
              sx={{ padding: "4px 10px" }}
            >
              <ListItemText
                primary="Registro"
                primaryTypographyProps={{
                  sx: { fontSize: "0.75rem", fontWeight: "400" },
                }}
              />
              <FontAwesomeIcon
                icon={openRegistro ? faChevronDown : faChevronRight}
                style={{ fontSize: "12px" }}
              />
            </ListItemButton>
          </ListItem>
          <Collapse in={openRegistro} timeout="auto" unmountOnExit>
            <List disablePadding sx={{ paddingLeft: "15px" }}>
              <ListItem disablePadding>
                        <ListItemButton sx={{ padding: "3px 10px" }}>
                        <ListItemText
                            primary="Médica INSS"
                            primaryTypographyProps={{
                            sx: { fontSize: "0.75rem", fontWeight: "400" },
                            }}
                        />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton
                        onClick={() => setOpenJudiciais(!openJudiciais)}
                        sx={{ padding: "4px 10px" }}
                        >
                        <ListItemText
                            primary="Judiciais"
                            primaryTypographyProps={{
                            sx: { fontSize: "0.75rem", fontWeight: "400" },
                            }}
                        />
                        <FontAwesomeIcon
                            icon={openJudiciais ? faChevronDown : faChevronRight}
                            style={{ fontSize: "12px" }}
                        />
                        </ListItemButton>
                    </ListItem>
                    <Collapse in={openJudiciais} timeout="auto" unmountOnExit>
            <List disablePadding sx={{ paddingLeft: "15px" }}>
              <ListItem disablePadding>
                        <ListItemButton sx={{ padding: "3px 10px" }}>
                        <ListItemText
                            primary="Trabalhista*"
                            primaryTypographyProps={{
                            sx: { fontSize: "0.75rem", fontWeight: "400" },
                            }}
                        />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ padding: "3px 10px" }}>
                        <ListItemText
                            primary="Previdenciaria*"
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
          <ListItem disablePadding>
                        <ListItemButton sx={{ padding: "3px 10px" }}>
                        <ListItemText
                            primary="TAC"
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

export default PericiasMenu;
