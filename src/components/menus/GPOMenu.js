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

  faCogs,
} from "@fortawesome/free-solid-svg-icons";

const GPOMenu = ({ isOpen, isActive, onClick }) => {
  const [openSubmenu, setOpenSubmenu] = useState(false);
  const [openPerigosOcupacionais, setOpenPerigosOcupacionais] = useState(false); 
  const [openReconRiscos, setOpenReconRiscos] = useState(false); 
  const [openIndenControle, setOpenIdenControle] = useState(false); 
  const [openLiberaTrabalhos, setOpenLiberaTrabalhos] = useState(false); 
  const [openAtividadeCritica, setOpenAtividadeCritica] = useState(false); 
  const [openBloqueioEnergias, setOpenBloqueioEnergias] = useState(false); 
  const [openEspacoConfinado, setOpenEspacoConfinado] = useState(false); 
  const [openIcamentoCargas, setOpenIcamentoCargas] = useState(false); 
  const [openEquipamentosMoveis, setOpenEquipamentosMoveis] = useState(false); 
  const [openProtecaoNr, setOpenProtecaoNr] = useState(false); 
  const [openTrabalhoAltura, setOpenTrabalhoAltura] = useState(false); 
  const [openTrabalhoQuente, setOpenTrabalhoQuente] = useState(false); 
  const [openTreinamentos, setOpenTreinamentos] = useState(false); 
  const [openGestaoTreinamentos, setOpenGestaoTreinamentos] = useState(false); 
  const [openInspecoesAuditoria, setOpenIspecoesAuditoria] = useState(false); 
  const [openInspecoes, setOpenIspecoes] = useState(false); 
  const [openAuditoriasConformidade, setOpenAuditoriasConformidades] = useState(false); 
  const [openPrevencaoFatalidades, setOpenPrevencaoFatalidades] = useState(false); 
  const [openGestaoConsequencias, setOpenGestaoConsequencias] = useState(false); 
  const [openEventoSeguranca, setOpenEventoSeguranca] = useState(false); 
  const [openGestaoRiscos, setOpenGestaoRiscos] = useState(false); 


  return (
    <List disablePadding>
      {/* Menu Principal */}
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
            <FontAwesomeIcon icon={faCogs} style={{ fontSize: "16px" }} />
          </ListItemIcon>
          {isOpen && (
            <>
              <ListItemText
                primary="GPO"
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
          {/* Requisitos Legais */}
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => setOpenPerigosOcupacionais(!openPerigosOcupacionais)}
              sx={{ padding: "4px 10px" }}
            >
              <ListItemText
                primary="Perigos Ocupacionais"
                primaryTypographyProps={{
                  sx: { fontSize: "0.75rem", fontWeight: "400" },
                }}
              />
              <FontAwesomeIcon
                icon={openPerigosOcupacionais ? faChevronDown : faChevronRight}
                style={{ fontSize: "12px" }}
              />
            </ListItemButton>
          </ListItem>
          <Collapse in={openPerigosOcupacionais} timeout="auto" unmountOnExit>
            <List disablePadding sx={{ paddingLeft: "15px" }}>
              {/* Documentos Legais */}
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => setOpenReconRiscos(!openReconRiscos)}
                  sx={{ padding: "3px 10px" }}
                >
                  <ListItemText
                    primary="Reconhecimento e Controle dos Riscos"
                    primaryTypographyProps={{
                      sx: { fontSize: "0.75rem", fontWeight: "400" },
                    }}
                  />
                  <FontAwesomeIcon
                    icon={openReconRiscos ? faChevronDown : faChevronRight}
                    style={{ fontSize: "12px" }}
                  />
                </ListItemButton>
              </ListItem>
              {/* Itens dentro de Documentos Legais */}
              <Collapse in={openReconRiscos} timeout="auto" unmountOnExit>
                    <List disablePadding sx={{ paddingLeft: "15px" }}>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ padding: "3px 10px" }}>
                        <ListItemText
                            primary="Plano de Trabalho"
                            primaryTypographyProps={{
                            sx: { fontSize: "0.75rem", fontWeight: "400" },
                            }}
                        />
                        </ListItemButton>
                    </ListItem>
                        <ListItem disablePadding>
                        <ListItemButton
                            onClick={() => setOpenIdenControle(!openIndenControle)}
                            sx={{ padding: "3px 10px" }}
                        >
                            <ListItemText
                            primary="Identificação e Controle dos Riscos"
                            primaryTypographyProps={{
                                sx: { fontSize: "0.75rem", fontWeight: "400" },
                            }}
                            />
                            <FontAwesomeIcon
                            icon={openIndenControle ? faChevronDown : faChevronRight}
                            style={{ fontSize: "12px" }}
                            />
                        </ListItemButton>
                        </ListItem>
                        <Collapse in={openIndenControle} timeout="auto" unmountOnExit>
                        <List disablePadding sx={{ paddingLeft: "15px" }}>
                        <ListItem disablePadding>
                        <ListItemButton
                            onClick={() => setOpenLiberaTrabalhos(!openLiberaTrabalhos)}
                            sx={{ padding: "3px 10px" }}
                        >
                            <ListItemText
                            primary="Liberação de Trabalhos"
                            primaryTypographyProps={{
                                sx: { fontSize: "0.75rem", fontWeight: "400" },
                            }}
                            />
                            <FontAwesomeIcon
                            icon={openLiberaTrabalhos ? faChevronDown : faChevronRight}
                            style={{ fontSize: "12px" }}
                            />
                        </ListItemButton>
                        </ListItem>
                        <Collapse in={openLiberaTrabalhos} timeout="auto" unmountOnExit>
                        <List disablePadding sx={{ paddingLeft: "15px" }}>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="APR - Análise Preliminar de Riscos"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                            </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="ART - Análise de Riscos da Tarefa"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                            </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="PET - Permissão Especial de Trabalho"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                            </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="PT - Permissão de Trabalho"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                            </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="AEP - Análise Ergonômica Preliminar"
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
                        <ListItemButton
                            onClick={() => setOpenAtividadeCritica(!openAtividadeCritica)}
                            sx={{ padding: "3px 10px" }}
                        >
                            <ListItemText
                            primary="Atividades Críticas"
                            primaryTypographyProps={{
                                sx: { fontSize: "0.75rem", fontWeight: "400" },
                            }}
                            />
                            <FontAwesomeIcon
                            icon={openAtividadeCritica ? faChevronDown : faChevronRight}
                            style={{ fontSize: "12px" }}
                            />
                        </ListItemButton>
                        </ListItem>
                        <Collapse in={openAtividadeCritica} timeout="auto" unmountOnExit>
                        <List disablePadding sx={{ paddingLeft: "15px" }}>
                        <ListItem disablePadding>
                            <ListItemButton 
                                onClick={() => setOpenBloqueioEnergias(!openBloqueioEnergias)}
                                sx={{ padding: "3px 10px" }}
                                >
                                <ListItemText
                                primary="Bloqueio de Energias Perigosas"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                                <FontAwesomeIcon
                                icon={faChevronRight}
                                style={{ fontSize: "12px" }}
                                />
                            </ListItemButton>
                            </ListItem>
                            <Collapse in={openBloqueioEnergias} timeout="auto" unmountOnExit>
                        <List disablePadding sx={{ paddingLeft: "15px" }}>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="PRO"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                            </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="APR"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                            </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="PTE"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                            </ListItemButton>
                            </ListItem>
						 </List>
                        </Collapse>
                        <ListItem disablePadding>
                            <ListItemButton 
                                onClick={() => setOpenEspacoConfinado(!openEspacoConfinado)}
                                sx={{ padding: "3px 10px" }}
                                >
                                <ListItemText
                                primary="Espaço Confinado"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                                <FontAwesomeIcon
                                icon={faChevronRight}
                                style={{ fontSize: "12px" }}
                                />
                            </ListItemButton>
                            </ListItem>
                            <Collapse in={openEspacoConfinado} timeout="auto" unmountOnExit>
                        <List disablePadding sx={{ paddingLeft: "15px" }}>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="PRO"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                            </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="APR"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                            </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="PTE"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                            </ListItemButton>
                            </ListItem>
							</List>
                        </Collapse>
                            <ListItem disablePadding>
                            <ListItemButton 
                                onClick={() => setOpenIcamentoCargas(!openIcamentoCargas)}
                                sx={{ padding: "3px 10px" }}
                                >
                                <ListItemText
                                primary="Içamento de Cargas"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                                <FontAwesomeIcon
                                icon={faChevronRight}
                                style={{ fontSize: "12px" }}
                                />
                            </ListItemButton>
                            </ListItem>
                            <Collapse in={openIcamentoCargas} timeout="auto" unmountOnExit>
                        <List disablePadding sx={{ paddingLeft: "15px" }}>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="PRO"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                            </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="APR"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                            </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="PTE"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                            </ListItemButton>
                            </ListItem>
							</List>
                        </Collapse>
                        <ListItem disablePadding>
                            <ListItemButton 
                                onClick={() => setOpenEquipamentosMoveis(!openEquipamentosMoveis)}
                                sx={{ padding: "3px 10px" }}
                                >
                                <ListItemText
                                primary="Op. Equipamentos Móveis"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                                <FontAwesomeIcon
                                icon={faChevronRight}
                                style={{ fontSize: "12px" }}
                                />
                            </ListItemButton>
                            </ListItem>
                            <Collapse in={openEquipamentosMoveis} timeout="auto" unmountOnExit>
                        <List disablePadding sx={{ paddingLeft: "15px" }}>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="PRO"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                            </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="APR"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                            </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="PTE"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                            </ListItemButton>
                            </ListItem>
							</List>
                        </Collapse>
                        <ListItem disablePadding>
                            <ListItemButton 
                                onClick={() => setOpenProtecaoNr(!openProtecaoNr)}
                                sx={{ padding: "3px 10px" }}
                                >
                                <ListItemText
                                primary="Proteções NR-12"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                                <FontAwesomeIcon
                                icon={faChevronRight}
                                style={{ fontSize: "12px" }}
                                />
                            </ListItemButton>
                            </ListItem>
                            <Collapse in={openProtecaoNr} timeout="auto" unmountOnExit>
                        <List disablePadding sx={{ paddingLeft: "15px" }}>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="PRO"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                            </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="APR"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                            </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="PTE"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                            </ListItemButton>
                            </ListItem>
							</List>
                        </Collapse>
                        <ListItem disablePadding>
                            <ListItemButton 
                                onClick={() => setOpenTrabalhoAltura(!openTrabalhoAltura)}
                                sx={{ padding: "3px 10px" }}
                                >
                                <ListItemText
                                primary="Trabalho em Altura"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                                <FontAwesomeIcon
                                icon={faChevronRight}
                                style={{ fontSize: "12px" }}
                                />
                            </ListItemButton>
                            </ListItem>
                            <Collapse in={openTrabalhoAltura} timeout="auto" unmountOnExit>
                        <List disablePadding sx={{ paddingLeft: "15px" }}>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="PRO"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                            </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="APR"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                            </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="PTE"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                            </ListItemButton>
                            </ListItem>
							</List>
                        </Collapse>
                        <ListItem disablePadding>
                            <ListItemButton 
                                onClick={() => setOpenTrabalhoQuente(!openTrabalhoQuente)}
                                sx={{ padding: "3px 10px" }}
                                >
                                <ListItemText
                                primary="Trabalho á Quente"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                                <FontAwesomeIcon
                                icon={faChevronRight}
                                style={{ fontSize: "12px" }}
                                />
                            </ListItemButton>
                            </ListItem>
                            <Collapse in={openTrabalhoQuente} timeout="auto" unmountOnExit>
                        <List disablePadding sx={{ paddingLeft: "15px" }}>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="PRO"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                            </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="APR"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                            </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="PTE"
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
                        <ListItemButton
                            onClick={() => setOpenTreinamentos(!openTreinamentos)}
                            sx={{ padding: "3px 10px" }}
                        >
                            <ListItemText
                            primary="Treinamentos"
                            primaryTypographyProps={{
                                sx: { fontSize: "0.75rem", fontWeight: "400" },
                            }}
                            />
                            <FontAwesomeIcon
                            icon={openTreinamentos ? faChevronDown : faChevronRight}
                            style={{ fontSize: "12px" }}
                            />
                        </ListItemButton>
                        </ListItem>
                        <Collapse in={openTreinamentos} timeout="auto" unmountOnExit>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="Matriz Treinamentos x Função e Riscos"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                            </ListItemButton>
                            </ListItem>
                        <List disablePadding sx={{ paddingLeft: "15px" }}>
                        <ListItem disablePadding>
                            <ListItemButton 
                                onClick={() => setOpenGestaoTreinamentos(!openGestaoTreinamentos)}
                                sx={{ padding: "3px 10px" }}
                                >
                                <ListItemText
                                primary="Gestão Treinamentos"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                                <FontAwesomeIcon
                                icon={faChevronRight}
                                style={{ fontSize: "12px" }}
                                />
                            </ListItemButton>
                            </ListItem>
                            <Collapse in={openGestaoTreinamentos} timeout="auto" unmountOnExit>
                        <List disablePadding sx={{ paddingLeft: "15px" }}>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="Cadastro dos Treinamentos"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                            </ListItemButton>
                            </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="Monitoramento dos Treinamentos"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                            </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="Crachá de Riscos"
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
                        <ListItemButton
                            onClick={() => setOpenIspecoesAuditoria(!openInspecoesAuditoria)}
                            sx={{ padding: "3px 10px" }}
                        >
                            <ListItemText
                            primary="Inspeções e Auditoria"
                            primaryTypographyProps={{
                                sx: { fontSize: "0.75rem", fontWeight: "400" },
                            }}
                            />
                            <FontAwesomeIcon
                            icon={openInspecoesAuditoria ? faChevronDown : faChevronRight}
                            style={{ fontSize: "12px" }}
                            />
                        </ListItemButton>
                        </ListItem>
                        <Collapse in={openInspecoesAuditoria} timeout="auto" unmountOnExit>
                        <List disablePadding sx={{ paddingLeft: "15px" }}>
                        <ListItem disablePadding>
                            <ListItemButton 
                                onClick={() => setOpenIspecoes (!openInspecoes)}
                                sx={{ padding: "3px 10px" }}
                                >
                                <ListItemText
                                primary="Inspeções"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                                <FontAwesomeIcon
                                icon={faChevronRight}
                                style={{ fontSize: "12px" }}
                                />
                            </ListItemButton>
                            </ListItem>
                            <Collapse in={openInspecoes} timeout="auto" unmountOnExit>
                        <List disablePadding sx={{ paddingLeft: "15px" }}>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="Posto de Trabalho"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                            </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="Infraestrutura"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                            </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="Atividades Críticas"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                            </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="EPIs"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                            </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="EPCs"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                            </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="Equipamentos Móveis"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                            </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="Veículos Leves"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                            </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="CIPA"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                            </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="Combate a Incêndio"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                            </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="Proteções NR-12"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                            </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="Produtos Químicos"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                            </ListItemButton>
                            </ListItem>
							</List>
                        </Collapse>
                        <ListItem disablePadding>
                            <ListItemButton 
                                onClick={() => setOpenAuditoriasConformidades(!openAuditoriasConformidade)}
                                sx={{ padding: "3px 10px" }}
                                >
                                <ListItemText
                                primary="Auditorias de Conformidade"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                                <FontAwesomeIcon
                                icon={faChevronRight}
                                style={{ fontSize: "12px" }}
                                />
                            </ListItemButton>
                            </ListItem>
                            <Collapse in={openAuditoriasConformidade} timeout="auto" unmountOnExit>
                        <List disablePadding sx={{ paddingLeft: "15px" }}>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="Interna"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                            </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="Externa"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                            </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="Terceiros"
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
                        <ListItemButton
                            onClick={() => setOpenPrevencaoFatalidades(!openPrevencaoFatalidades)}
                            sx={{ padding: "3px 10px" }}
                        >
                            <ListItemText
                            primary="Prevenção de Fatalidades"
                            primaryTypographyProps={{
                                sx: { fontSize: "0.75rem", fontWeight: "400" },
                            }}
                            />
                            <FontAwesomeIcon
                            icon={openPrevencaoFatalidades ? faChevronDown : faChevronRight}
                            style={{ fontSize: "12px" }}
                            />
                        </ListItemButton>
                        </ListItem>
                        <Collapse in={openPrevencaoFatalidades} timeout="auto" unmountOnExit>
                        <List disablePadding sx={{ paddingLeft: "15px" }}>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="Ocorrências de Segurança"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                            </ListItemButton>
                            </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton 
                                onClick={() => setOpenGestaoConsequencias(!openGestaoConsequencias)}
                                sx={{ padding: "3px 10px" }}
                                >
                                <ListItemText
                                primary="Gestão de Consequências"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                                <FontAwesomeIcon
                                icon={faChevronRight}
                                style={{ fontSize: "12px" }}
                                />
                            </ListItemButton>
                            </ListItem>
                            <Collapse in={openGestaoConsequencias} timeout="auto" unmountOnExit>
                        <List disablePadding sx={{ paddingLeft: "15px" }}>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="Análise de Desvio"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                            </ListItemButton>
                            </ListItem>
						  </List>
                        </Collapse>
                            <ListItem disablePadding>
                            <ListItemButton 
                                onClick={() => setOpenEventoSeguranca(!openEventoSeguranca)}
                                sx={{ padding: "3px 10px" }}
                                >
                                <ListItemText
                                primary="Evento de Segurança"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                                <FontAwesomeIcon
                                icon={faChevronRight}
                                style={{ fontSize: "12px" }}
                                />
                            </ListItemButton>
                            </ListItem>
                            <Collapse in={openEventoSeguranca} timeout="auto" unmountOnExit>
                        <List disablePadding sx={{ paddingLeft: "15px" }}>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="Acidente de Trabalho"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                            </ListItemButton>
                            </ListItem>
                            </List>
                        </Collapse>
                        <ListItem disablePadding>
                            <ListItemButton 
                                onClick={() => setOpenGestaoRiscos(!openGestaoRiscos)}
                                sx={{ padding: "3px 10px" }}
                                >
                                <ListItemText
                                primary="Gestão de Riscos"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                                <FontAwesomeIcon
                                icon={faChevronRight}
                                style={{ fontSize: "12px" }}
                                />
                            </ListItemButton>
                            </ListItem>
                            <Collapse in={openGestaoRiscos} timeout="auto" unmountOnExit>
                        <List disablePadding sx={{ paddingLeft: "15px" }}>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="Cenários de Riscos"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                            </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="DTS - Diagnóstico Técnico de Segurança"
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
                                primary="Registro e Divulgação"
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
                    </Collapse>

              {/* Indicadores */}
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
            </List>
          </Collapse>
        </List>
      </Collapse>
    </List>
  );
};

export default GPOMenu;
