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
  faBalanceScale,
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

const ConformidadeLegalMenu = ({ isOpen, isActive, onClick }) => {
  const [openSubmenu, setOpenSubmenu] = useState(false);
  const [openRequisitos, setOpenRequisitos] = useState(false);
  const [openDocumentos, setOpenDocumentos] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setOpenSubmenu(false);
      setOpenRequisitos(false);
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
            <FontAwesomeIcon icon={faBalanceScale} style={{ fontSize: "16px" }} />
          </ListItemIcon>
          {isOpen && (
            <>
              <ListItemText
                primary="Conformidade Legal*"
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
          <SubMenu title="Requisitos Legais*" isOpen={openRequisitos} onToggle={setOpenRequisitos}>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/requisitos-legais" sx={{ padding: "4px 10px" }}>
                <ListItemText
                  primary="Mapeamento dos Requisitos Legais*"
                  primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                />
              </ListItemButton>
            </ListItem>
            <SubMenu title="Documentos Legais*" isOpen={openDocumentos} onToggle={setOpenDocumentos}>
              <SubMenu title="Diretrizes" isOpen={openDocumentos}>
                <ListItem disablePadding>
                  <ListItemButton sx={{ padding: "3px 10px" }}>
                    <ListItemText
                      primary="Organograma"
                      primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton sx={{ padding: "3px 10px" }}>
                    <ListItemText
                      primary="Política SGI/SGQ"
                      primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton sx={{ padding: "3px 10px" }}>
                    <ListItemText
                      primary="Planejamento Estratégico"
                      primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton sx={{ padding: "3px 10px" }}>
                    <ListItemText
                      primary="Política SSO/SSMA"
                      primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                    />
                  </ListItemButton>
                </ListItem>
                <SubMenu title="GRO" isOpen={openDocumentos}>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="Matriz de Rico"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                </SubMenu>
                <SubMenu title="Licenças/Avarás" isOpen={openDocumentos}>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="Anexo"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                </SubMenu>
              </SubMenu>
              <SubMenu title="Laudos" isOpen={openDocumentos}>
                <SubMenu title="LTCAT" isOpen={openDocumentos}>
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
                <ListItem disablePadding>
                  <ListItemButton sx={{ padding: "3px 10px" }}>
                    <ListItemText
                      primary="PPP"
                      primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                    />
                  </ListItemButton>
                </ListItem>
                <SubMenu title="Insalubridade - Integrar DP" isOpen={openDocumentos}>
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
                <SubMenu title="Periculosidade - Integrar DP" isOpen={openDocumentos}>
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
                <SubMenu title="Outros Laudos" isOpen={openDocumentos}>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="Eficácia dos EPIs"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="SPDA"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                </SubMenu>
              </SubMenu>
              <SubMenu title="Programas Legais" isOpen={openDocumentos}>
                <SubMenu title="PGR" isOpen={openDocumentos}>
                  <SubMenu title="Inventário de Riscos" isOpen={openDocumentos}>
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
                  <SubMenu title="Plano de Ação" isOpen={openDocumentos}>
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
                </SubMenu>
                <SubMenu title="PCA" isOpen={openDocumentos}>
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
                <SubMenu title="PPR" isOpen={openDocumentos}>
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
                <SubMenu title="PCMSO" isOpen={openDocumentos}>
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
                <SubMenu title="Prevenção de Fatalidades" isOpen={openDocumentos}>
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
                <SubMenu title="Treinamentos" isOpen={openDocumentos}>
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
              </SubMenu>
              <SubMenu title="Avaliação" isOpen={openDocumentos}>
                <SubMenu title="Eficácia dos EPIs" isOpen={openDocumentos}>
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
                <SubMenu title="Ergonômicas / Psicossociais" isOpen={openDocumentos}>
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
                <SubMenu title="Fadiga" isOpen={openDocumentos}>
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
                <SubMenu title="Home Office" isOpen={openDocumentos}>
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
                <SubMenu title="Adequações NR-12" isOpen={openDocumentos}>
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
                <SubMenu title="ESG" isOpen={openDocumentos}>
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
                <ListItem disablePadding>
                  <ListItemButton sx={{ padding: "3px 10px" }}>
                    <ListItemText
                      primary="Outras Avaliações"
                      primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                    />
                  </ListItemButton>
                </ListItem>
              </SubMenu>
              <SubMenu title="Planos" isOpen={openDocumentos}>
                <ListItem disablePadding>
                  <ListItemButton sx={{ padding: "3px 10px" }}>
                    <ListItemText
                      primary="Plano de Trabalho"
                      primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                    />
                  </ListItemButton>
                </ListItem>
                <SubMenu title="PAE/PAM" isOpen={openDocumentos}>
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
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="Exercícios Simualdos"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                </SubMenu>
                <SubMenu title="PGRSS" isOpen={openDocumentos}>
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
              </SubMenu>
              <SubMenu title="Conrole de Riscos Ocupacionais*" isOpen={openDocumentos}>
                <SubMenu title="Ordem de Serviço*" isOpen={openDocumentos}>
                  <ListItem disablePadding>
                    <ListItemButton 
                      component={Link}
                      to="/ordem-servico-elaboracao"
                      sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="Elaboração*"
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
                <SubMenu title="Gestão de Mudanças" isOpen={openDocumentos}>
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
                <SubMenu title="Padrinho" isOpen={openDocumentos}>
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
              </SubMenu>
              <SubMenu title="Registros Diversos" isOpen={openDocumentos}>
                <ListItem disablePadding>
                  <ListItemButton sx={{ padding: "3px 10px" }}>
                    <ListItemText
                      primary="Advertências"
                      primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                    />
                  </ListItemButton>
                </ListItem>
                <SubMenu title="Atas e Reuniões Diversas" isOpen={openDocumentos}>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="Plano de Ação"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                </SubMenu>
                <ListItem disablePadding>
                  <ListItemButton sx={{ padding: "3px 10px" }}>
                    <ListItemText
                      primary="Cartilhas e Manuais"
                      primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                    />
                  </ListItemButton>
                </ListItem>
                <SubMenu title="Outros Registros" isOpen={openDocumentos}>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="Termos de autorização/proibição de atividade"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="Requisitos de segurança para trabalhos perigosos"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                      <ListItemText
                        primary="Instalações físicas dos locais de trabalho"
                        primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                      />
                    </ListItemButton>
                  </ListItem>
                </SubMenu>
              </SubMenu>
              <SubMenu title="Comunicação Interna" isOpen={openDocumentos}>
                <ListItem disablePadding>
                  <ListItemButton sx={{ padding: "3px 10px" }}>
                    <ListItemText
                      primary="Denúncias/Reclamações"
                      primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton sx={{ padding: "3px 10px" }}>
                    <ListItemText
                      primary="Sugestões de Melhorias"
                      primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton sx={{ padding: "3px 10px" }}>
                    <ListItemText
                      primary="Participação dos Empregados"
                      primaryTypographyProps={{ sx: { fontSize: "0.75rem", fontWeight: "400" } }}
                    />
                  </ListItemButton>
                </ListItem>
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

export default ConformidadeLegalMenu;
