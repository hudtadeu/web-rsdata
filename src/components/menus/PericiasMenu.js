import React, { useState, useEffect } from "react";
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
  faGavel,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

// Reusable SubMenu component
const SubMenu = ({ title, children, isOpen }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setOpen(false);
    }
  }, [isOpen]);

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

const PericiasMenu = ({ isOpen, isActive, onClick }) => {
  const [openSubmenu, setOpenSubmenu] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setOpenSubmenu(false);
    }
  }, [isOpen]);

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
          <SubMenu title="Registro*" isOpen={isOpen}>
            <ListItem disablePadding>
              <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                  primary="Médica INSS"
                  primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                />
              </ListItemButton>
            </ListItem>
            <SubMenu title="Judiciais*" isOpen={isOpen}>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/judiciais-trabalhista" sx={{ padding: "3px 10px" }}>
                  <ListItemText
                    primary="Trabalhista*"
                    primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/judiciais-previdenciaria" sx={{ padding: "3px 10px" }}>
                  <ListItemText
                    primary="Previdenciaria*"
                    primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                  />
                </ListItemButton>
              </ListItem>
            </SubMenu>
          </SubMenu>
          <ListItem disablePadding>
            <ListItemButton sx={{ padding: "3px 10px" }}>
              <ListItemText
                primary="TAC"
                primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
};

export default PericiasMenu;
