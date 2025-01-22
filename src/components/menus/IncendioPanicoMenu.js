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
  faFireExtinguisher,
} from "@fortawesome/free-solid-svg-icons";

const SubMenu = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ListItem disablePadding>
        <ListItemButton onClick={() => setOpen(!open)} sx={{ padding: "4px 10px" }}>
          <ListItemText
            primary={title}
            primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
          />
          <FontAwesomeIcon
            icon={open ? faChevronDown : faChevronRight}
            style={{ fontSize: "12px" }}
          />
        </ListItemButton>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List disablePadding sx={{ paddingLeft: "15px" }}>
          {children}
        </List>
      </Collapse>
    </>
  );
};

const IncendioPanicoMenu = ({ isOpen, isActive, onClick }) => {
  const [openSubmenu, setOpenSubmenu] = useState(false);

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
            <FontAwesomeIcon icon={faFireExtinguisher} style={{ fontSize: "16px" }} />
          </ListItemIcon>
          {isOpen && (
            <>
              <ListItemText
                primary="Incêndio e Pânico"
                primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "500" } }}
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
          <SubMenu title="Documentação">
            <ListItem disablePadding>
              <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                  primary="Projeto"
                  primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                  primary="Formulário"
                  primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                  primary="AVCB"
                  primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                />
              </ListItemButton>
            </ListItem>
          </SubMenu>
          <SubMenu title="Monitoramento">
            <ListItem disablePadding>
              <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                  primary="Controle dos AVCBs"
                  primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                />
              </ListItemButton>
            </ListItem>
            <SubMenu title="Brigada de Emergência">
              <ListItem disablePadding>
                <ListItemButton sx={{ padding: "3px 10px" }}>
                  <ListItemText
                    primary="Plano de Trabalho"
                    primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton sx={{ padding: "3px 10px" }}>
                  <ListItemText
                    primary="Reuniões da Brigada"
                    primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton sx={{ padding: "3px 10px" }}>
                  <ListItemText
                    primary="Inspeções da Brigada"
                    primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                  />
                </ListItemButton>
              </ListItem>
            </SubMenu>
            <SubMenu title="Equipamentos de Combate a Incêndio e Pânico">
              <ListItem disablePadding>
                <ListItemButton sx={{ padding: "3px 10px" }}>
                  <ListItemText
                    primary="Cadastros"
                    primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton sx={{ padding: "3px 10px" }}>
                  <ListItemText
                    primary="Manutenções"
                    primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                  />
                </ListItemButton>
              </ListItem>
            </SubMenu>
          </SubMenu>
        </List>
      </Collapse>
    </List>
  );
};

export default IncendioPanicoMenu;
