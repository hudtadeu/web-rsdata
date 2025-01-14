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
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";

const HOMenu = ({ isOpen, isActive, onClick }) => {
  const [openSubmenu, setOpenSubmenu] = useState(false);
  const [openRegistrosRiscos, setOpenRegistrosRiscos] = useState(false); 
  const [openMonitoramentoRiscos, setOpenMonitoramentoRiscos] = useState(false); 
  const [openPlanoTrabalho, setOpenPlanoTrabalho] = useState(false); 
  const [openControleRiscos, setOpenControleRiscos] = useState(false); 
  const [openVibracoes, setOpenVibracoes] = useState(false); 
  const [openVibracoesA, setOpenVibracoesA] = useState(false); 
  const [openVibracoesB, setOpenVibracoesB] = useState(false); 
  const [openHOLocal, setOpenHOLocal] = useState(false); 
  const [openAmbiental, setOpenAmbiental] = useState(false); 
  const [openAmbientalA, setOpenAmbientalA] = useState(false); 
  const [openAmbientalB, setOpenAmbientalB] = useState(false); 
  const [openHOProjetos, setOpenHOProjetos] = useState(false); 
  const [openHOTerceiros, setOpenHOTerceiros] = useState(false); 
  const [openInventarioProdutos, setOpenInventarioProdutos] = useState(false); 
  const [openFISPQ, setOpenFISPQ] = useState(false); 
  const [openDocumentosLegais, setOpenDocumentosLegais] = useState(false); 
  const [openLaudos, setOpenLaudos] = useState(false); 
  const [openEquipaHigiene, setOpenEquipaHigiene] = useState(false); 

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
            <FontAwesomeIcon icon={faBuilding} style={{ fontSize: "16px" }} />
          </ListItemIcon>
          {isOpen && (
            <>
              <ListItemText
                primary="HO"
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
              onClick={() => setOpenRegistrosRiscos(!openRegistrosRiscos)}
              sx={{ padding: "4px 10px" }}
            >
              <ListItemText
                primary="Registro dos Riscos"
                primaryTypographyProps={{
                  sx: { fontSize: "0.75rem", fontWeight: "400" },
                }}
              />
              <FontAwesomeIcon
                icon={openRegistrosRiscos ? faChevronDown : faChevronRight}
                style={{ fontSize: "12px" }}
              />
            </ListItemButton>
          </ListItem>
          <Collapse in={openRegistrosRiscos} timeout="auto" unmountOnExit>
            <List disablePadding sx={{ paddingLeft: "15px" }}>
              {/* Documentos Legais */}
              <ListItem disablePadding>
                <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                    primary="Registro da Avaliação Preliminar/Qualitativa de Riscos de Higiene Ocupacional"
                    primaryTypographyProps={{
                     sx: { fontSize: "0.75rem", fontWeight: "400" },
                     }}
                    />
                     </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                     <ListItemText
                         primary="Registro da Avaliação Quantitativa de Riscos de Higiene Ocupacional"
                         primaryTypographyProps={{
                         sx: { fontSize: "0.75rem", fontWeight: "400" },
                         }}
                    />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                    <ListItemButton sx={{ padding: "3px 10px" }}>
                     <ListItemText
                         primary="APRHO - Registro de APRs de Higiene Ocupacional"
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
              onClick={() => setOpenMonitoramentoRiscos(!openMonitoramentoRiscos)}
              sx={{ padding: "4px 10px" }}
            >
              <ListItemText
                primary="Monitoramento dos Riscos"
                primaryTypographyProps={{
                  sx: { fontSize: "0.75rem", fontWeight: "400" },
                }}
              />
              <FontAwesomeIcon
                icon={openMonitoramentoRiscos ? faChevronDown : faChevronRight}
                style={{ fontSize: "12px" }}
              />
            </ListItemButton>
          </ListItem>
          <Collapse in={openMonitoramentoRiscos} timeout="auto" unmountOnExit>
            <List disablePadding sx={{ paddingLeft: "15px" }}>
              {/* Documentos Legais */}
              <ListItem disablePadding>
            <ListItemButton
              onClick={() => setOpenPlanoTrabalho(!openPlanoTrabalho)}
              sx={{ padding: "4px 10px" }}
            >
              <ListItemText
                primary="Plano de Trabalho"
                primaryTypographyProps={{
                  sx: { fontSize: "0.75rem", fontWeight: "400" },
                }}
              />
              <FontAwesomeIcon
                icon={openPlanoTrabalho ? faChevronDown : faChevronRight}
                style={{ fontSize: "12px" }}
              />
            </ListItemButton>
          </ListItem>
          <Collapse in={openPlanoTrabalho} timeout="auto" unmountOnExit>
            <List disablePadding sx={{ paddingLeft: "15px" }}>
              {/* Documentos Legais */}
              <ListItem disablePadding>
                <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                    primary="Alertas com Prazos"
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
                    onClick={() => setOpenControleRiscos(!openControleRiscos)}
                    sx={{ padding: "4px 10px" }}
                    >
                    <ListItemText
                        primary="Controle Dos Riscos"
                        primaryTypographyProps={{
                        sx: { fontSize: "0.75rem", fontWeight: "400" },
                        }}
                    />
                    <FontAwesomeIcon
                        icon={openControleRiscos ? faChevronDown : faChevronRight}
                        style={{ fontSize: "12px" }}
                    />
                    </ListItemButton>
                </ListItem>
                <Collapse in={openControleRiscos} timeout="auto" unmountOnExit>
            <List disablePadding sx={{ paddingLeft: "15px" }}>
              {/* Documentos Legais */}
              <ListItem disablePadding>
                    <ListItemButton
                    onClick={() => setOpenHOLocal(!openHOLocal)}
                    sx={{ padding: "4px 10px" }}
                    >
                    <ListItemText
                        primary="HO Local"
                        primaryTypographyProps={{
                        sx: { fontSize: "0.75rem", fontWeight: "400" },
                        }}
                    />
                    <FontAwesomeIcon
                        icon={openHOLocal ? faChevronDown : faChevronRight}
                        style={{ fontSize: "12px" }}
                    />
                    </ListItemButton>
                </ListItem>
                <Collapse in={openHOLocal} timeout="auto" unmountOnExit>
            <List disablePadding sx={{ paddingLeft: "15px" }}>
              {/* Documentos Legais */}
              <ListItem disablePadding>
                <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                    primary="Calor"
                    primaryTypographyProps={{
                     sx: { fontSize: "0.75rem", fontWeight: "400" },
                     }}
                    />
                     </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                    primary="Frio"
                    primaryTypographyProps={{
                     sx: { fontSize: "0.75rem", fontWeight: "400" },
                     }}
                    />
                     </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                    primary="Ruído"
                    primaryTypographyProps={{
                     sx: { fontSize: "0.75rem", fontWeight: "400" },
                     }}
                    />
                     </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                    <ListItemButton
                    onClick={() => setOpenVibracoes(!openVibracoes)}
                    sx={{ padding: "4px 10px" }}
                    >
                    <ListItemText
                        primary="Vibrações"
                        primaryTypographyProps={{
                        sx: { fontSize: "0.75rem", fontWeight: "400" },
                        }}
                    />
                    <FontAwesomeIcon
                        icon={openVibracoes ? faChevronDown : faChevronRight}
                        style={{ fontSize: "12px" }}
                    />
                    </ListItemButton>
                </ListItem>
                <Collapse in={openVibracoes} timeout="auto" unmountOnExit>
            <List disablePadding sx={{ paddingLeft: "15px" }}>
              {/* Documentos Legais */}
              <ListItem disablePadding>
                <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                    primary="Braços"
                    primaryTypographyProps={{
                     sx: { fontSize: "0.75rem", fontWeight: "400" },
                     }}
                    />
                     </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                    primary="Mãos"
                    primaryTypographyProps={{
                     sx: { fontSize: "0.75rem", fontWeight: "400" },
                     }}
                    />
                     </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                    primary="Corpo Inteiro"
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
                    onClick={() => setOpenAmbiental(!openAmbiental)}
                    sx={{ padding: "4px 10px" }}
                    >
                    <ListItemText
                        primary="Ambiental"
                        primaryTypographyProps={{
                        sx: { fontSize: "0.75rem", fontWeight: "400" },
                        }}
                    />
                    <FontAwesomeIcon
                        icon={openAmbiental ? faChevronDown : faChevronRight}
                        style={{ fontSize: "12px" }}
                    />
                    </ListItemButton>
                </ListItem>
                <Collapse in={openAmbiental} timeout="auto" unmountOnExit>
            <List disablePadding sx={{ paddingLeft: "15px" }}>
              {/* Documentos Legais */}
              <ListItem disablePadding>
                <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                    primary="Ruído"
                    primaryTypographyProps={{
                     sx: { fontSize: "0.75rem", fontWeight: "400" },
                     }}
                    />
                     </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                    primary="Calor"
                    primaryTypographyProps={{
                     sx: { fontSize: "0.75rem", fontWeight: "400" },
                     }}
                    />
                     </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                   <ListItemButton sx={{ padding: "3px 10px" }}>
                    <ListItemText
                       primary="Vibrações"
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
                    onClick={() => setOpenHOProjetos(!openHOProjetos)}
                    sx={{ padding: "4px 10px" }}
                    >
                    <ListItemText
                        primary="HO em Projetos"
                        primaryTypographyProps={{
                        sx: { fontSize: "0.75rem", fontWeight: "400" },
                        }}
                    />
                    <FontAwesomeIcon
                        icon={openHOProjetos ? faChevronDown : faChevronRight}
                        style={{ fontSize: "12px" }}
                    />
                    </ListItemButton>
                </ListItem>
                <Collapse in={openHOProjetos} timeout="auto" unmountOnExit>
            <List disablePadding sx={{ paddingLeft: "15px" }}>
              {/* Documentos Legais */}
              <ListItem disablePadding>
                <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                    primary="Calor"
                    primaryTypographyProps={{
                     sx: { fontSize: "0.75rem", fontWeight: "400" },
                     }}
                    />
                     </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                    primary="Frio"
                    primaryTypographyProps={{
                     sx: { fontSize: "0.75rem", fontWeight: "400" },
                     }}
                    />
                     </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                    primary="Ruído"
                    primaryTypographyProps={{
                     sx: { fontSize: "0.75rem", fontWeight: "400" },
                     }}
                    />
                     </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                    <ListItemButton
                    onClick={() => setOpenVibracoesA(!openVibracoesA)}
                    sx={{ padding: "4px 10px" }}
                    >
                    <ListItemText
                        primary="Vibrações"
                        primaryTypographyProps={{
                        sx: { fontSize: "0.75rem", fontWeight: "400" },
                        }}
                    />
                    <FontAwesomeIcon
                        icon={openVibracoesA ? faChevronDown : faChevronRight}
                        style={{ fontSize: "12px" }}
                    />
                    </ListItemButton>
                </ListItem>
                <Collapse in={openVibracoesA} timeout="auto" unmountOnExit>
            <List disablePadding sx={{ paddingLeft: "15px" }}>
              {/* Documentos Legais */}
              <ListItem disablePadding>
                <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                    primary="Braços"
                    primaryTypographyProps={{
                     sx: { fontSize: "0.75rem", fontWeight: "400" },
                     }}
                    />
                     </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                    primary="Mãos"
                    primaryTypographyProps={{
                     sx: { fontSize: "0.75rem", fontWeight: "400" },
                     }}
                    />
                     </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                    primary="Corpo Inteiro"
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
                    onClick={() => setOpenAmbientalA(!openAmbientalA)}
                    sx={{ padding: "4px 10px" }}
                    >
                    <ListItemText
                        primary="Ambiental"
                        primaryTypographyProps={{
                        sx: { fontSize: "0.75rem", fontWeight: "400" },
                        }}
                    />
                    <FontAwesomeIcon
                        icon={openAmbientalA ? faChevronDown : faChevronRight}
                        style={{ fontSize: "12px" }}
                    />
                    </ListItemButton>
                </ListItem>
                <Collapse in={openAmbientalA} timeout="auto" unmountOnExit>
            <List disablePadding sx={{ paddingLeft: "15px" }}>
              {/* Documentos Legais */}
              <ListItem disablePadding>
                <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                    primary="Ruído"
                    primaryTypographyProps={{
                     sx: { fontSize: "0.75rem", fontWeight: "400" },
                     }}
                    />
                     </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                    primary="Calor"
                    primaryTypographyProps={{
                     sx: { fontSize: "0.75rem", fontWeight: "400" },
                     }}
                    />
                     </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                    primary="Vibrações"
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
                    onClick={() => setOpenHOTerceiros(!openHOTerceiros)}
                    sx={{ padding: "4px 10px" }}
                    >
                    <ListItemText
                        primary="HO em Terceiros"
                        primaryTypographyProps={{
                        sx: { fontSize: "0.75rem", fontWeight: "400" },
                        }}
                    />
                    <FontAwesomeIcon
                        icon={openHOTerceiros ? faChevronDown : faChevronRight}
                        style={{ fontSize: "12px" }}
                    />
                    </ListItemButton>
                </ListItem>
                <Collapse in={openHOTerceiros} timeout="auto" unmountOnExit>
            <List disablePadding sx={{ paddingLeft: "15px" }}>
              {/* Documentos Legais */}
              <ListItem disablePadding>
                <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                    primary="Calor"
                    primaryTypographyProps={{
                     sx: { fontSize: "0.75rem", fontWeight: "400" },
                     }}
                    />
                     </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                    primary="Frio"
                    primaryTypographyProps={{
                     sx: { fontSize: "0.75rem", fontWeight: "400" },
                     }}
                    />
                     </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                    primary="Ruído"
                    primaryTypographyProps={{
                     sx: { fontSize: "0.75rem", fontWeight: "400" },
                     }}
                    />
                     </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                    <ListItemButton
                    onClick={() => setOpenVibracoesB(!openVibracoesB)}
                    sx={{ padding: "4px 10px" }}
                    >
                    <ListItemText
                        primary="Vibrações"
                        primaryTypographyProps={{
                        sx: { fontSize: "0.75rem", fontWeight: "400" },
                        }}
                    />
                    <FontAwesomeIcon
                        icon={openVibracoesB ? faChevronDown : faChevronRight}
                        style={{ fontSize: "12px" }}
                    />
                    </ListItemButton>
                </ListItem>
                <Collapse in={openVibracoesB} timeout="auto" unmountOnExit>
            <List disablePadding sx={{ paddingLeft: "15px" }}>
              {/* Documentos Legais */}
              <ListItem disablePadding>
                <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                    primary="Braços"
                    primaryTypographyProps={{
                     sx: { fontSize: "0.75rem", fontWeight: "400" },
                     }}
                    />
                     </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                    primary="Mãos"
                    primaryTypographyProps={{
                     sx: { fontSize: "0.75rem", fontWeight: "400" },
                     }}
                    />
                     </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                    primary="Corpo Inteiro"
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
                    onClick={() => setOpenAmbientalB(!openAmbientalB)}
                    sx={{ padding: "4px 10px" }}
                    >
                    <ListItemText
                        primary="Ambiental"
                        primaryTypographyProps={{
                        sx: { fontSize: "0.75rem", fontWeight: "400" },
                        }}
                    />
                    <FontAwesomeIcon
                        icon={openAmbientalB ? faChevronDown : faChevronRight}
                        style={{ fontSize: "12px" }}
                    />
                    </ListItemButton>
                </ListItem>
                <Collapse in={openAmbientalB} timeout="auto" unmountOnExit>
            <List disablePadding sx={{ paddingLeft: "15px" }}>
              {/* Documentos Legais */}
              <ListItem disablePadding>
                <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                    primary="Ruído"
                    primaryTypographyProps={{
                     sx: { fontSize: "0.75rem", fontWeight: "400" },
                     }}
                    />
                     </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                    primary="Calor"
                    primaryTypographyProps={{
                     sx: { fontSize: "0.75rem", fontWeight: "400" },
                     }}
                    />
                     </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                <ListItemButton sx={{ padding: "3px 10px" }}>
                <ListItemText
                    primary="Vibrações"
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
                    </List>
                 </Collapse>
                        <ListItem disablePadding>
                   <ListItemButton sx={{ padding: "3px 10px" }}>
                    <ListItemText
                       primary="Inspeções"
                        primaryTypographyProps={{
                       sx: { fontSize: "0.75rem", fontWeight: "400" },
                         }}
                        />
                        </ListItemButton>
                      </ListItem>
                         <ListItem disablePadding>
                        <ListItemButton sx={{ padding: "3px 10px" }}>
                         <ListItemText
                         primary="Revisão dos Agentes"
                          primaryTypographyProps={{
                         sx: { fontSize: "0.75rem", fontWeight: "400" },
                         }}
                         />
                       </ListItemButton>
                        </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => setOpenInventarioProdutos(!openInventarioProdutos)}
              sx={{ padding: "4px 10px" }}
            >
              <ListItemText
                primary="Inventário de Produtos Químicos"
                primaryTypographyProps={{
                  sx: { fontSize: "0.75rem", fontWeight: "400" },
                }}
              />
              <FontAwesomeIcon
                icon={openInventarioProdutos ? faChevronDown : faChevronRight}
                style={{ fontSize: "12px" }}
              />
            </ListItemButton>
          </ListItem>
          <Collapse in={openInventarioProdutos} timeout="auto" unmountOnExit>
            <List disablePadding sx={{ paddingLeft: "15px" }}>
              {/* Documentos Legais */}
              <ListItem disablePadding>
                        <ListItemButton sx={{ padding: "3px 10px" }}>
                        <ListItemText
                            primary="Elaboração"
                            primaryTypographyProps={{
                            sx: { fontSize: "0.75rem", fontWeight: "400" },
                            }}
                        />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ padding: "3px 10px" }}>
                        <ListItemText
                            primary="Revisão"
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
              onClick={() => setOpenFISPQ(!openFISPQ)}
              sx={{ padding: "4px 10px" }}
            >
              <ListItemText
                primary="FISPQ"
                primaryTypographyProps={{
                  sx: { fontSize: "0.75rem", fontWeight: "400" },
                }}
              />
              <FontAwesomeIcon
                icon={openFISPQ ? faChevronDown : faChevronRight}
                style={{ fontSize: "12px" }}
              />
            </ListItemButton>
          </ListItem>
          <Collapse in={openFISPQ} timeout="auto" unmountOnExit>
            <List disablePadding sx={{ paddingLeft: "15px" }}>
              {/* Documentos Legais */}
              <ListItem disablePadding>
                        <ListItemButton sx={{ padding: "3px 10px" }}>
                        <ListItemText
                            primary="Análise"
                            primaryTypographyProps={{
                            sx: { fontSize: "0.75rem", fontWeight: "400" },
                            }}
                        />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ padding: "3px 10px" }}>
                        <ListItemText
                            primary="Revisão"
                            primaryTypographyProps={{
                            sx: { fontSize: "0.75rem", fontWeight: "400" },
                            }}
                        />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ padding: "3px 10px" }}>
                        <ListItemText
                            primary="Anexos"
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
                         primary="Matriz de Risco"
                          primaryTypographyProps={{
                         sx: { fontSize: "0.75rem", fontWeight: "400" },
                     }}
                         />
                    </ListItemButton>
                     </ListItem>
             <ListItem disablePadding>
            <ListItemButton
              onClick={() => setOpenDocumentosLegais(!openDocumentosLegais)}
              sx={{ padding: "4px 10px" }}
            >
              <ListItemText
                primary="Documentos Legais"
                primaryTypographyProps={{
                  sx: { fontSize: "0.75rem", fontWeight: "400" },
                }}
              />
              <FontAwesomeIcon
                icon={openDocumentosLegais ? faChevronDown : faChevronRight}
                style={{ fontSize: "12px" }}
              />
            </ListItemButton>
          </ListItem>
          <Collapse in={openDocumentosLegais} timeout="auto" unmountOnExit>
            <List disablePadding sx={{ paddingLeft: "15px" }}>
              {/* Documentos Legais */}
              <ListItem disablePadding>
                        <ListItemButton sx={{ padding: "3px 10px" }}>
                        <ListItemText
                            primary="Elaboração"
                            primaryTypographyProps={{
                            sx: { fontSize: "0.75rem", fontWeight: "400" },
                            }}
                        />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ padding: "3px 10px" }}>
                        <ListItemText
                            primary="Revisão"
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
              onClick={() => setOpenEquipaHigiene(!openEquipaHigiene)}
              sx={{ padding: "4px 10px" }}
            >
              <ListItemText
                primary="Equipamentos de Higiene Ocupacional"
                primaryTypographyProps={{
                  sx: { fontSize: "0.75rem", fontWeight: "400" },
                }}
              />
              <FontAwesomeIcon
                icon={openEquipaHigiene ? faChevronDown : faChevronRight}
                style={{ fontSize: "12px" }}
              />
            </ListItemButton>
          </ListItem>
          <Collapse in={openEquipaHigiene} timeout="auto" unmountOnExit>
            <List disablePadding sx={{ paddingLeft: "15px" }}>
              {/* Documentos Legais */}
              <ListItem disablePadding>
                        <ListItemButton sx={{ padding: "3px 10px" }}>
                        <ListItemText
                            primary="Cadastro"
                            primaryTypographyProps={{
                            sx: { fontSize: "0.75rem", fontWeight: "400" },
                            }}
                        />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ padding: "3px 10px" }}>
                        <ListItemText
                            primary="Manutenções"
                            primaryTypographyProps={{
                            sx: { fontSize: "0.75rem", fontWeight: "400" },
                            }}
                        />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ padding: "3px 10px" }}>
                        <ListItemText
                            primary="Controle de Estoque"
                            primaryTypographyProps={{
                            sx: { fontSize: "0.75rem", fontWeight: "400" },
                            }}
                        />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ padding: "3px 10px" }}>
                        <ListItemText
                            primary="Retiradas"
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
              onClick={() => setOpenLaudos(!openLaudos)}
              sx={{ padding: "4px 10px" }}
            >
              <ListItemText
                primary="Laudos"
                primaryTypographyProps={{
                  sx: { fontSize: "0.75rem", fontWeight: "400" },
                }}
              />
              <FontAwesomeIcon
                icon={openLaudos ? faChevronDown : faChevronRight}
                style={{ fontSize: "12px" }}
              />
            </ListItemButton>
          </ListItem>
          <Collapse in={openLaudos} timeout="auto" unmountOnExit>
            <List disablePadding sx={{ paddingLeft: "15px" }}>
              {/* Documentos Legais */}
              <ListItem disablePadding>
                        <ListItemButton sx={{ padding: "3px 10px" }}>
                        <ListItemText
                            primary="Elaboração"
                            primaryTypographyProps={{
                            sx: { fontSize: "0.75rem", fontWeight: "400" },
                            }}
                        />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ padding: "3px 10px" }}>
                        <ListItemText
                            primary="Revisão"
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

export default HOMenu;
