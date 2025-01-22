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
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SubMenu = ({ title, children, isOpen, onToggle }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setOpen(false);
    }
  }, [isOpen]);

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

const GPOMenu = ({ isOpen, isActive, onClick }) => {
  const [openSubmenu, setOpenSubmenu] = useState(false);
  const [openPerigosOcupacionais, setOpenPerigosOcupacionais] = useState(false);
  const [openDocumentos, setOpenDocumentos] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setOpenSubmenu(false);
      setOpenPerigosOcupacionais(false);
      setOpenDocumentos(false);
    }
  }, [isOpen]);

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
            <FontAwesomeIcon icon={faProjectDiagram} style={{ fontSize: "16px" }} />
          </ListItemIcon>
          {isOpen && (
            <>
              <ListItemText
                primary="GPO*"
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
          <SubMenu title="Perigos Ocupacionais*" isOpen={openPerigosOcupacionais} onToggle={setOpenPerigosOcupacionais}>
            <SubMenu title="Reconhecimento e Controle dos Riscos*">
              <ListItem disablePadding>
                <ListItemButton sx={{ padding: "3px 10px" }}>
                  <ListItemText
                    primary="Plano de Trabalho"
                    primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                  />
                </ListItemButton>
              </ListItem>
              <SubMenu title="Identificação e Controle dos Riscos*">
                <SubMenu title="Liberação de Trabalhos*">
                  <ListItem disablePadding>
                    <ListItemButton component={Link} to="/analise-preliminar-riscos" sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="APR - Análise Preliminar de Riscos*"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="ART - Análise de Riscos da Tarefa"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="PET - Permissão Especial de Trabalho"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="PT - Permissão de Trabalho"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="AEP - Análise Ergonômica Preliminar"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                </SubMenu>
              </SubMenu>
              <SubMenu title="Atividades Críticas">
                <SubMenu title="Bloqueio de Energias Perigosas">
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="PRO"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="APR"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="PTE"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                </SubMenu>
                <SubMenu title="Espaço Confinado">
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="PRO"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="APR"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="PTE"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                </SubMenu>
                <SubMenu title="Içamento de Cargas">
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="PRO"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="APR"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="PTE"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                </SubMenu>
                <SubMenu title="Op. Equipamentos Móveis">
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="PRO"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="APR"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="PTE"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                </SubMenu>
                <SubMenu title="Proteções NR-12">
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="PRO"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="APR"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="PTE"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                </SubMenu>
                <SubMenu title="Trabalho em Altura">
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="PRO"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="APR"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="PTE"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                </SubMenu>
                <SubMenu title="Trabalho á Quente">
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="PRO"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="APR"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="PTE"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                </SubMenu>
              </SubMenu>
              <SubMenu title="Treinamentos">
                <ListItem disablePadding>
                  <ListItemButton sx={{ padding: "3px 10px" }}>
                    <ListItemText
                      primary="Matriz Treinamentos x Função e Riscos"
                      primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                    />
                  </ListItemButton>
                </ListItem>
                <SubMenu title="Gestão de Treinamentos">
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="Cadastro dos Treinamentos"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="Monitoramento dos Treinamentos"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="Crachá de Riscos"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                </SubMenu>
              </SubMenu>
              <SubMenu title="Inspeções e Auditoria*" isOpen={openDocumentos} onToggle={setOpenDocumentos}>
                <SubMenu title="Inspeções">
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="Posto de Trabalho"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="Infraestrutura"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="Atividades Críticas"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="EPIs"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="EPCs"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="Equipamentos Móveis"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="Veículos Leves"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="CIPA"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="Combate a Incêndio"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="Proteções NR-12"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="Produtos Químicos"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                </SubMenu>
                <SubMenu title="Auditorias de Conformidade *">
                  <ListItem disablePadding>
                    <ListItemButton component={Link} to="/auditoria-conformidade-interna" sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="Interna*"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="Externa"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="Terceiros"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                </SubMenu>
              </SubMenu>
              <SubMenu title="Prevenção de Fatalidades" isOpen={openDocumentos} onToggle={setOpenDocumentos}>
                <ListItem disablePadding>
                  <ListItemButton sx={{ padding: "3px 10px" }}>
                    <ListItemText
                      primary="Ocorrências de Segurança"
                      primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                    />
                  </ListItemButton>
                </ListItem>
                <SubMenu title="Gestão de Consequências">
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="Análise de Desvio"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                </SubMenu>
                <SubMenu title="Evento de Segurança">
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="Acidente de Trabalho"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                </SubMenu>
                <SubMenu title="Gestão de Riscos">
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="Cenários de Riscos"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="DTS - Diagnóstico Técnico de Segurança"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="Alertas de Segurança"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="Registro e Divulgação"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                </SubMenu>
              </SubMenu>
            </SubMenu>
            <ListItem disablePadding>
              <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                  primary="Indicadores"
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

export default GPOMenu;
