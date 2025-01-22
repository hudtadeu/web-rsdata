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
  faHeartbeat,
} from "@fortawesome/free-solid-svg-icons";

const SubMenu = ({ title, children, isOpen, onToggle }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
    if (onToggle) {
      onToggle(!open);
    }
  };

  return (
    <>
      <ListItem disablePadding>
        <ListItemButton onClick={handleToggle} sx={{ padding: "4px 10px" }}>
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

const HOMenu = ({ isOpen, isActive, onClick }) => {
  const [openSubmenu, setOpenSubmenu] = useState(false);

  const handleMainToggle = () => {
    onClick();
    setOpenSubmenu(!openSubmenu);
  };

  return (
    <List disablePadding>
      <ListItem disablePadding>
        <ListItemButton
          onClick={handleMainToggle}
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
            <FontAwesomeIcon icon={faHeartbeat} style={{ fontSize: "16px" }} />
          </ListItemIcon>
          {isOpen && (
            <>
              <ListItemText
                primary="Higiene Ocupacional"
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
          <SubMenu title="Registro dos Riscos">
            <ListItem disablePadding>
              <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                  primary="Registro da Avaliação Preliminar/Qualitativa de Riscos de Higiene Ocupacional"
                  primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                  primary="Registro da Avaliação Quantitativa de Riscos de Higiene Ocupacional"
                  primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                  primary="APRHO - Registro de APRs de Higiene Ocupacional"
                  primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                />
              </ListItemButton>
            </ListItem>
          </SubMenu>
          <SubMenu title="Monitoramento dos Riscos">
            <SubMenu title="Plano de Trabalho">
              <ListItem disablePadding>
                <ListItemButton sx={{ padding: "3px 10px" }}>
                  <ListItemText
                    primary="Alertas com Prazos"
                    primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                  />
                </ListItemButton>
              </ListItem>
            </SubMenu>
            <SubMenu title="Controle Dos Riscos">
              <SubMenu title="HO Local">
                <ListItem disablePadding>
                  <ListItemButton sx={{ padding: "3px 10px" }}>
                    <ListItemText
                      primary="Calor"
                      primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton sx={{ padding: "3px 10px" }}>
                    <ListItemText
                      primary="Frio"
                      primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton sx={{ padding: "3px 10px" }}>
                    <ListItemText
                      primary="Ruído"
                      primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                    />
                  </ListItemButton>
                </ListItem>
                <SubMenu title="Vibrações">
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="Braços"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="Mãos"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="Corpo Inteiro"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                </SubMenu>
              </SubMenu>
              <SubMenu title="Ambiental">
                <ListItem disablePadding>
                  <ListItemButton sx={{ padding: "3px 10px" }}>
                    <ListItemText
                      primary="Ruído"
                      primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton sx={{ padding: "3px 10px" }}>
                    <ListItemText
                      primary="Calor"
                      primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton sx={{ padding: "3px 10px" }}>
                    <ListItemText
                      primary="Vibrações"
                      primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                    />
                  </ListItemButton>
                </ListItem>
              </SubMenu>
              <SubMenu title="HO em Projetos">
                <ListItem disablePadding>
                  <ListItemButton sx={{ padding: "3px 10px" }}>
                    <ListItemText
                      primary="Calor"
                      primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton sx={{ padding: "3px 10px" }}>
                    <ListItemText
                      primary="Frio"
                      primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton sx={{ padding: "3px 10px" }}>
                    <ListItemText
                      primary="Ruído"
                      primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                    />
                  </ListItemButton>
                </ListItem>
                <SubMenu title="Vibrações">
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="Braços"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="Mãos"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="Corpo Inteiro"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                </SubMenu>
                <SubMenu title="Ambiental">
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="Ruído"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="Calor"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="Vibrações"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                </SubMenu>
              </SubMenu>
              <SubMenu title="HO em Terceiros">
                <ListItem disablePadding>
                  <ListItemButton sx={{ padding: "3px 10px" }}>
                    <ListItemText
                      primary="Calor"
                      primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton sx={{ padding: "3px 10px" }}>
                    <ListItemText
                      primary="Frio"
                      primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton sx={{ padding: "3px 10px" }}>
                    <ListItemText
                      primary="Ruído"
                      primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                    />
                  </ListItemButton>
                </ListItem>
                <SubMenu title="Vibrações">
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="Braços"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="Mãos"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="Corpo Inteiro"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                </SubMenu>
                <SubMenu title="Ambiental">
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="Ruído"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="Calor"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="Vibrações"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                </SubMenu>
              </SubMenu>
            </SubMenu>
          </SubMenu>
          <ListItem disablePadding>
            <ListItemButton sx={{ padding: "3px 10px" }}>
              <ListItemText
                primary="Inspeções"
                primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ padding: "3px 10px" }}>
              <ListItemText
                primary="Revisão dos Agentes"
                primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
              />
            </ListItemButton>
          </ListItem>
          <SubMenu title="Inventário de Produtos Químicos">
            <ListItem disablePadding>
              <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                  primary="Elaboração"
                  primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                  primary="Revisão"
                  primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                />
              </ListItemButton>
            </ListItem>
          </SubMenu>
          <SubMenu title="FISPQ">
            <ListItem disablePadding>
              <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                  primary="Análise"
                  primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                  primary="Revisão"
                  primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                  primary="Anexos"
                  primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                />
              </ListItemButton>
            </ListItem>
          </SubMenu>
          <ListItem disablePadding>
            <ListItemButton sx={{ padding: "3px 10px" }}>
              <ListItemText
                primary="Matriz de Risco"
                primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
              />
            </ListItemButton>
          </ListItem>
          <SubMenu title="Documentos Legais">
            <ListItem disablePadding>
              <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                  primary="Elaboração"
                  primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                  primary="Revisão"
                  primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                />
              </ListItemButton>
            </ListItem>
          </SubMenu>
          <SubMenu title="Equipamentos de Higiene Ocupacional">
            <ListItem disablePadding>
              <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                  primary="Cadastro"
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
            <ListItem disablePadding>
              <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                  primary="Controle de Estoque"
                  primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                  primary="Retiradas"
                  primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                />
              </ListItemButton>
            </ListItem>
          </SubMenu>
          <SubMenu title="Laudos">
            <ListItem disablePadding>
              <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                  primary="Elaboração"
                  primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                  primary="Revisão"
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

export default HOMenu;
