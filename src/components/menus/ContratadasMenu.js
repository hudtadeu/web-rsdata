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
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

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

const ContratadasMenu = ({ isOpen, isActive, onClick }) => {
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
            borderRadius: "8px",
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
            <FontAwesomeIcon icon={faHandshake} style={{ fontSize: "16px" }} />
          </ListItemIcon>
          {isOpen && (
            <>
              <ListItemText
                primary="Contratadas"
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
          <ListItem disablePadding>
            <ListItemButton sx={{ padding: "3px 10px" }}>
              <ListItemText
                primary="Viabilidade Técnica"
                primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ padding: "3px 10px" }}>
              <ListItemText
                primary="Contratadas"
                primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
              />
            </ListItemButton>
          </ListItem>
          <SubMenu title="Kick Off" isOpen={isOpen}>
            <ListItem disablePadding>
              <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                  primary="Ata"
                  primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                />
              </ListItemButton>
            </ListItem>
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
                  primary="Cronograma"
                  primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                />
              </ListItemButton>
            </ListItem>
          </SubMenu>
          <SubMenu title="Inventário" isOpen={isOpen}>
            <ListItem disablePadding>
              <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                  primary="Trabalhadores"
                  primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                  primary="Máquinas e Equipamentos"
                  primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                  primary="Diversos"
                  primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                />
              </ListItemButton>
            </ListItem>
          </SubMenu>
          <ListItem disablePadding>
            <ListItemButton sx={{ padding: "3px 10px" }}>
              <ListItemText
                primary="Gestão de Terceiros"
                primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ padding: "3px 10px" }}>
              <ListItemText
                primary="Inspeções"
                primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
              />
            </ListItemButton>
          </ListItem>
          <SubMenu title="Ocorrêcias Contratuais" isOpen={isOpen}>
            <ListItem disablePadding>
              <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                  primary="Seguranças"
                  primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                  primary="Diversas"
                  primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                />
              </ListItemButton>
            </ListItem>
          </SubMenu>
          <ListItem disablePadding>
            <ListItemButton sx={{ padding: "3px 10px" }}>
              <ListItemText
                primary="Auditorias de Conformidade"
                primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
              />
            </ListItemButton>
          </ListItem>
          <SubMenu title="Desmobilização" isOpen={isOpen}>
            <ListItem disablePadding>
              <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                  primary="Ata"
                  primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                  primary="Cronograma"
                  primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                  primary="Inspeções Finais"
                  primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                />
              </ListItemButton>
            </ListItem>
            <SubMenu title="Inventário" isOpen={isOpen}>
              <ListItem disablePadding>
                <ListItemButton sx={{ padding: "3px 10px" }}>
                  <ListItemText
                    primary="Trabalhadores"
                    primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton sx={{ padding: "3px 10px" }}>
                  <ListItemText
                    primary="Máquinas e Equipamentos"
                    primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton sx={{ padding: "3px 10px" }}>
                  <ListItemText
                    primary="Diversos"
                    primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                  />
                </ListItemButton>
              </ListItem>
            </SubMenu>
            <ListItem disablePadding>
              <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                  primary="Local"
                  primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                  primary="Termo de Encerramento"
                  primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                />
              </ListItemButton>
            </ListItem>
          </SubMenu>
        </List>
      </Collapse>
    </List>
  );
};

export default ContratadasMenu;
