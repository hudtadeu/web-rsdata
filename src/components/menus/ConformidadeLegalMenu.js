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
  faClipboard,
  faGavel,
} from "@fortawesome/free-solid-svg-icons";

const ConformidadeLegalMenu = ({ isOpen, isActive, onClick }) => {
  const [openSubmenu, setOpenSubmenu] = useState(false);
  const [openRequisitos, setOpenRequisitos] = useState(false); 
  const [openDocumentos, setOpenDocumentos] = useState(false); 
  const [openDiretrizes, setOpenDiretrizes] = useState(false); 
  const [openGro, setOpenGro] = useState(false); 
  const [openLicencas, setOpenLicencas] = useState(false); 
  const [openLaudos, setOpenLaudos] = useState(false); 
  const [openLTCAT, setOpenLTCAT] = useState(false); 
  const [openInsalubridade, setOpenInsalubridade] = useState(false); 
  const [openPericulosidade, setOpenPericulosidade] = useState(false); 
  const [openOutrosLaudos, setOpenOutrosLaudos] = useState(false); 
  const [openProgramasLegais, setOpenProgramasLegais] = useState(false); 
  const [openPGR, setOpenPGR] = useState(false); 
  const [openInventario, setOpenInventario] = useState(false); 
  const [openPlanoAcao, setOpenPlanoAcao] = useState(false); 
  const [openPCA, setOpenPCA] = useState(false); 
  const [openPPR, setOpenPPR] = useState(false); 
  const [openPCMSO, setOpenPCMSO] = useState(false); 
  const [openPrevencao, setOpenPrevencao] = useState(false); 
  const [openTreinamentos, setOpenTreinamentos] = useState(false); 
  const [openAvaliacao, setOpenAvaliacao] = useState(false); 
  const [openErgonomicas, setOpenErgonomicas ] = useState(false); 
  const [openEficacia, setOpenEficacia  ] = useState(false); 
  const [openFadiga, setOpenFadiga] = useState(false); 
  const [openHomeOffice, setOpenHomeOffice] = useState(false); 
  const [openAdequacao, setOpenAdequacao] = useState(false); 
  const [openESG, setOpenESG] = useState(false); 
  const [openPlanos, setOpenPlanos] = useState(false); 
  const [openPAE, setOpenPAE] = useState(false); 
  const [openPGRSS, setOpenPGRSS] = useState(false); 
  const [openControleOcupacionais, setOpenControleOcupacionais] = useState(false); 
  const [openOrdemServicos, setOpenOrdemServicos] = useState(false); 
  const [openGestaoMudancas, setOpenGestaoMudacas] = useState(false); 
  const [openPadrinho, setOpenPadrinho ] = useState(false); 
  const [openRegistrosDiversos, setOpenRegistrosDiversos] = useState(false); 
  const [openAtas, setOpenAtas] = useState(false); 
  const [openOutrosRegistros, setOpenOutrosRegistros] = useState(false);  
  const [openComunicacaoInterna, setOpenComunicacaoInterna] = useState(false); 

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
                color: isActive ? "#0078a3" : "#fff", 
            }}
          >
            <FontAwesomeIcon icon={faGavel} style={{ fontSize: "16px" }} />
          </ListItemIcon>
          {isOpen && (
            <>
              <ListItemText
                primary="Conformidade Legal"
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
          {/* Requisitos Legais */}
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => setOpenRequisitos(!openRequisitos)}
              sx={{ padding: "4px 10px" }}
            >
              <ListItemText
                primary="Requisitos Legais"
                primaryTypographyProps={{
                  sx: { fontSize: "0.75rem", fontWeight: "400" },
                }}
              />
              <FontAwesomeIcon
                icon={openRequisitos ? faChevronDown : faChevronRight}
                style={{ fontSize: "12px" }}
              />
            </ListItemButton>
          </ListItem>
          <Collapse in={openRequisitos} timeout="auto" unmountOnExit>
            <List disablePadding sx={{ paddingLeft: "15px" }}>
              <ListItem disablePadding>
                <ListItemButton sx={{ padding: "3px 10px" }}>
                  <ListItemText
                    primary="Mapeamento dos requisitos legais"
                    primaryTypographyProps={{
                      sx: { fontSize: "0.75rem", fontWeight: "400" },
                    }}
                  />
                </ListItemButton>
              </ListItem>
              {/* Documentos Legais */}
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => setOpenDocumentos(!openDocumentos)}
                  sx={{ padding: "3px 10px" }}
                >
                  <ListItemText
                    primary="Documentos Legais"
                    primaryTypographyProps={{
                      sx: { fontSize: "0.75rem", fontWeight: "400" },
                    }}
                  />
                  <FontAwesomeIcon
                    icon={openDocumentos ? faChevronDown : faChevronRight}
                    style={{ fontSize: "12px" }}
                  />
                </ListItemButton>
              </ListItem>
              {/* Itens dentro de Documentos Legais */}
              <Collapse in={openDocumentos} timeout="auto" unmountOnExit>
                    <List disablePadding sx={{ paddingLeft: "15px" }}>
                        <ListItem disablePadding>
                        <ListItemButton
                            onClick={() => setOpenDiretrizes(!openDiretrizes)}
                            sx={{ padding: "3px 10px" }}
                        >
                            <ListItemText
                            primary="Diretrizes"
                            primaryTypographyProps={{
                                sx: { fontSize: "0.75rem", fontWeight: "400" },
                            }}
                            />
                            <FontAwesomeIcon
                            icon={openDiretrizes ? faChevronDown : faChevronRight}
                            style={{ fontSize: "12px" }}
                            />
                        </ListItemButton>
                        </ListItem>
                        <Collapse in={openDiretrizes} timeout="auto" unmountOnExit>
                        <List disablePadding sx={{ paddingLeft: "15px" }}>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="Organograma"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                            </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="Política SGI/SGQ"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                            </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="Planejamento Estratégico"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                            </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="Política SSO/SSMA"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                            </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                            <ListItemButton 
                                onClick={() => setOpenGro(!openGro)}
                                sx={{ padding: "3px 10px" }}
                                >
                                <ListItemText
                                primary="GRO"
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
                            <Collapse in={openGro} timeout="auto" unmountOnExit>
                        <List disablePadding sx={{ paddingLeft: "15px" }}>
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
							            </List>
                        </Collapse>
                            <ListItem disablePadding>
                            <ListItemButton 
                                onClick={() => setOpenLicencas(!openLicencas)}
                                sx={{ padding: "3px 10px" }}
                                >
                                <ListItemText
                                primary="Licenças/Alvarás"
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
                            <Collapse in={openLicencas} timeout="auto" unmountOnExit>
                        <List disablePadding sx={{ paddingLeft: "15px" }}>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="Anexo"
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
                            onClick={() => setOpenLaudos(!openLaudos)}
                            sx={{ padding: "3px 10px" }}
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
                        <ListItem disablePadding>
                            <ListItemButton 
                                onClick={() => setOpenLTCAT(!openLTCAT)}
                                sx={{ padding: "3px 10px" }}
                                >
                                <ListItemText
                                primary="LTCAT"
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
                            <Collapse in={openLTCAT} timeout="auto" unmountOnExit>
                        <List disablePadding sx={{ paddingLeft: "15px" }}>
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
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="PPP"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                            </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                            <ListItemButton 
                                onClick={() => setOpenInsalubridade(!openInsalubridade)}
                                sx={{ padding: "3px 10px" }}
                                >
                                <ListItemText
                                primary="Insalubridade - Integrar DP*"
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
                            <Collapse in={openInsalubridade} timeout="auto" unmountOnExit>
                        <List disablePadding sx={{ paddingLeft: "15px" }}>
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
                                onClick={() => setOpenPericulosidade(!openPericulosidade)}
                                sx={{ padding: "3px 10px" }}
                                >
                                <ListItemText
                                primary="Periculosidade - Integrar DP*"
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
                            <Collapse in={openPericulosidade} timeout="auto" unmountOnExit>
                        <List disablePadding sx={{ paddingLeft: "15px" }}>
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
                                onClick={() => setOpenOutrosLaudos(!openOutrosLaudos)}
                                sx={{ padding: "3px 10px" }}
                                >
                                <ListItemText
                                primary="Outros Laudos"
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
                            <Collapse in={openOutrosLaudos} timeout="auto" unmountOnExit>
                        <List disablePadding sx={{ paddingLeft: "15px" }}>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="Eficácia dos EPIs"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                            </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="SPDA"
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
                            onClick={() => setOpenProgramasLegais(!openProgramasLegais)}
                            sx={{ padding: "3px 10px" }}
                        >
                            <ListItemText
                            primary="Programas Legais"
                            primaryTypographyProps={{
                                sx: { fontSize: "0.75rem", fontWeight: "400" },
                            }}
                            />
                            <FontAwesomeIcon
                            icon={openProgramasLegais ? faChevronDown : faChevronRight}
                            style={{ fontSize: "12px" }}
                            />
                        </ListItemButton>
                        </ListItem>
                        <Collapse in={openProgramasLegais} timeout="auto" unmountOnExit>
                        <List disablePadding sx={{ paddingLeft: "15px" }}>
                        <ListItem disablePadding>
                            <ListItemButton 
                                onClick={() => setOpenPGR(!openPGR)}
                                sx={{ padding: "3px 10px" }}
                                >
                                <ListItemText
                                primary="PGR"
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
                            <Collapse in={openPGR} timeout="auto" unmountOnExit>
                        <List disablePadding sx={{ paddingLeft: "15px" }}>
                        <ListItem disablePadding>
                        <ListItemButton
                            onClick={() => setOpenInventario(!openInventario)}
                            sx={{ padding: "3px 10px" }}
                        >
                            <ListItemText
                            primary="Inventário de Riscos"
                            primaryTypographyProps={{
                                sx: { fontSize: "0.75rem", fontWeight: "400" },
                            }}
                            />
                            <FontAwesomeIcon
                            icon={openInventario ? faChevronDown : faChevronRight}
                            style={{ fontSize: "12px" }}
                            />
                        </ListItemButton>
                        </ListItem>
                        <Collapse in={openInventario} timeout="auto" unmountOnExit>
                        <List disablePadding sx={{ paddingLeft: "15px" }}>
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
                            onClick={() => setOpenPlanoAcao(!openPlanoAcao)}
                            sx={{ padding: "3px 10px" }}
                        >
                            <ListItemText
                            primary="Plano de Ação"
                            primaryTypographyProps={{
                                sx: { fontSize: "0.75rem", fontWeight: "400" },
                            }}
                            />
                            <FontAwesomeIcon
                            icon={openPlanoAcao ? faChevronDown : faChevronRight}
                            style={{ fontSize: "12px" }}
                            />
                        </ListItemButton>
                        </ListItem>
                        <Collapse in={openPlanoAcao} timeout="auto" unmountOnExit>
                        <List disablePadding sx={{ paddingLeft: "15px" }}>
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
                        <ListItem disablePadding>
                            <ListItemButton 
                                onClick={() => setOpenPCA(!openPCA)}
                                sx={{ padding: "3px 10px" }}
                                >
                                <ListItemText
                                primary="PCA"
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
                            <Collapse in={openPCA} timeout="auto" unmountOnExit>
                        <List disablePadding sx={{ paddingLeft: "15px" }}>
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
                                onClick={() => setOpenPPR(!openPPR)}
                                sx={{ padding: "3px 10px" }}
                                >
                                <ListItemText
                                primary="PPR"
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
                            <Collapse in={openPPR} timeout="auto" unmountOnExit>
                        <List disablePadding sx={{ paddingLeft: "15px" }}>
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
                                onClick={() => setOpenPCMSO(!openPCMSO)}
                                sx={{ padding: "3px 10px" }}
                                >
                                <ListItemText
                                primary="PCMSO"
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
                            <Collapse in={openPCMSO} timeout="auto" unmountOnExit>
                        <List disablePadding sx={{ paddingLeft: "15px" }}>
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
                                onClick={() => setOpenPrevencao(!openPrevencao)}
                                sx={{ padding: "3px 10px" }}
                                >
                                <ListItemText
                                primary="Prevenção de Fatalidades"
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
                            <Collapse in={openPrevencao} timeout="auto" unmountOnExit>
                        <List disablePadding sx={{ paddingLeft: "15px" }}>
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
                                icon={faChevronRight}
                                style={{ fontSize: "12px" }}
                                />
                            </ListItemButton>
                            </ListItem>
                            <Collapse in={openTreinamentos} timeout="auto" unmountOnExit>
                        <List disablePadding sx={{ paddingLeft: "15px" }}>
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
                        <ListItem disablePadding>
                        <ListItemButton
                            onClick={() => setOpenAvaliacao(!openAvaliacao)}
                            sx={{ padding: "3px 10px" }}
                        >
                            <ListItemText
                            primary="Avaliação"
                            primaryTypographyProps={{
                                sx: { fontSize: "0.75rem", fontWeight: "400" },
                            }}
                            />
                            <FontAwesomeIcon
                            icon={openAvaliacao ? faChevronDown : faChevronRight}
                            style={{ fontSize: "12px" }}
                            />
                        </ListItemButton>
                        </ListItem>
                        <Collapse in={openAvaliacao} timeout="auto" unmountOnExit>
                        <List disablePadding sx={{ paddingLeft: "15px" }}>
                        <ListItem disablePadding>
                            <ListItemButton 
                                onClick={() => setOpenEficacia (!openEficacia)}
                                sx={{ padding: "3px 10px" }}
                                >
                                <ListItemText
                                primary="Eficácia dos EPIs"
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
                            <Collapse in={openEficacia} timeout="auto" unmountOnExit>
                        <List disablePadding sx={{ paddingLeft: "15px" }}>
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
                                onClick={() => setOpenErgonomicas(!openErgonomicas)}
                                sx={{ padding: "3px 10px" }}
                                >
                                <ListItemText
                                primary="Ergonômicas / Psicossociais"
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
                            <Collapse in={openErgonomicas} timeout="auto" unmountOnExit>
                        <List disablePadding sx={{ paddingLeft: "15px" }}>
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
                                onClick={() => setOpenFadiga(!openFadiga)}
                                sx={{ padding: "3px 10px" }}
                                >
                                <ListItemText
                                primary="Fadiga"
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
                            <Collapse in={openFadiga} timeout="auto" unmountOnExit>
                        <List disablePadding sx={{ paddingLeft: "15px" }}>
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
                                onClick={() => setOpenHomeOffice(!openHomeOffice)}
                                sx={{ padding: "3px 10px" }}
                                >
                                <ListItemText
                                primary="Home Office"
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
                            <Collapse in={openHomeOffice} timeout="auto" unmountOnExit>
                        <List disablePadding sx={{ paddingLeft: "15px" }}>
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
                                onClick={() => setOpenAdequacao(!openAdequacao)}
                                sx={{ padding: "3px 10px" }}
                                >
                                <ListItemText
                                primary="Adequações NR-12"
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
                            <Collapse in={openAdequacao} timeout="auto" unmountOnExit>
                        <List disablePadding sx={{ paddingLeft: "15px" }}>
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
                                onClick={() => setOpenESG(!openESG)}
                                sx={{ padding: "3px 10px" }}
                                >
                                <ListItemText
                                primary="ESG"
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
                            <Collapse in={openESG} timeout="auto" unmountOnExit>
                        <List disablePadding sx={{ paddingLeft: "15px" }}>
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
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="Outras Avaliações"
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
                            onClick={() => setOpenPlanos(!openPlanos)}
                            sx={{ padding: "3px 10px" }}
                        >
                            <ListItemText
                            primary="Planos"
                            primaryTypographyProps={{
                                sx: { fontSize: "0.75rem", fontWeight: "400" },
                            }}
                            />
                            <FontAwesomeIcon
                            icon={openPlanos ? faChevronDown : faChevronRight}
                            style={{ fontSize: "12px" }}
                            />
                        </ListItemButton>
                        </ListItem>
                        <Collapse in={openPlanos} timeout="auto" unmountOnExit>
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
                                onClick={() => setOpenPAE(!openPAE)}
                                sx={{ padding: "3px 10px" }}
                                >
                                <ListItemText
                                primary="PAE/PAM"
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
                            <Collapse in={openPAE} timeout="auto" unmountOnExit>
                        <List disablePadding sx={{ paddingLeft: "15px" }}>
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
                            <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="Exercícios Simualdos"
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
                                onClick={() => setOpenPGRSS(!openPGRSS)}
                                sx={{ padding: "3px 10px" }}
                                >
                                <ListItemText
                                primary="PGRSS"
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
                            <Collapse in={openPGRSS} timeout="auto" unmountOnExit>
                        <List disablePadding sx={{ paddingLeft: "15px" }}>
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
                        <ListItem disablePadding>
                        <ListItemButton
                            onClick={() => setOpenControleOcupacionais(!openControleOcupacionais)}
                            sx={{ padding: "3px 10px" }}
                        >
                            <ListItemText
                            primary="Conrole de Riscos Ocupacionais"
                            primaryTypographyProps={{
                                sx: { fontSize: "0.75rem", fontWeight: "400" },
                            }}
                            />
                            <FontAwesomeIcon
                            icon={openControleOcupacionais ? faChevronDown : faChevronRight}
                            style={{ fontSize: "12px" }}
                            />
                        </ListItemButton>
                        </ListItem>
                        <Collapse in={openControleOcupacionais} timeout="auto" unmountOnExit>
                        <List disablePadding sx={{ paddingLeft: "15px" }}>
                            <ListItem disablePadding>
                            <ListItemButton 
                                onClick={() => setOpenOrdemServicos(!openOrdemServicos)}
                                sx={{ padding: "3px 10px" }}
                                >
                                <ListItemText
                                primary="Ordem de Serviço"
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
                            <Collapse in={openOrdemServicos} timeout="auto" unmountOnExit>
                        <List disablePadding sx={{ paddingLeft: "15px" }}>
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
                                onClick={() => setOpenGestaoMudacas(!openGestaoMudancas)}
                                sx={{ padding: "3px 10px" }}
                                >
                                <ListItemText
                                primary="Gestão de Mudanças"
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
                            <Collapse in={openGestaoMudancas} timeout="auto" unmountOnExit>
                        <List disablePadding sx={{ paddingLeft: "15px" }}>
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
                                onClick={() => setOpenPadrinho(!openPadrinho)}
                                sx={{ padding: "3px 10px" }}
                                >
                                <ListItemText
                                primary="Padrinho"
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
                            <Collapse in={setOpenPadrinho} timeout="auto" unmountOnExit>
                        <List disablePadding sx={{ paddingLeft: "15px" }}>
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
                        <ListItem disablePadding>
                        <ListItemButton
                            onClick={() => setOpenRegistrosDiversos(!openRegistrosDiversos)}
                            sx={{ padding: "3px 10px" }}
                        >
                            <ListItemText
                            primary="Registros Diversos"
                            primaryTypographyProps={{
                                sx: { fontSize: "0.75rem", fontWeight: "400" },
                            }}
                            />
                            <FontAwesomeIcon
                            icon={openRegistrosDiversos ? faChevronDown : faChevronRight}
                            style={{ fontSize: "12px" }}
                            />
                        </ListItemButton>
                        </ListItem>
                        <Collapse in={openRegistrosDiversos} timeout="auto" unmountOnExit>
                        <List disablePadding sx={{ paddingLeft: "15px" }}>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="Advertências"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                            </ListItemButton>
                            </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton 
                                onClick={() => setOpenAtas(!openAtas)}
                                sx={{ padding: "3px 10px" }}
                                >
                                <ListItemText
                                primary="Atas e Reuniões Diversas"
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
                            <Collapse in={openAtas} timeout="auto" unmountOnExit>
                        <List disablePadding sx={{ paddingLeft: "15px" }}>
                            <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="Plano de Ação"
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
                                primary="Cartilhas e Manuais"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                            </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                            <ListItemButton 
                                onClick={() => setOpenOutrosRegistros(!openOutrosRegistros)}
                                sx={{ padding: "3px 10px" }}
                                >
                                <ListItemText
                                primary="Outros Registros"
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
                            <Collapse in={openOutrosRegistros} timeout="auto" unmountOnExit>
                        <List disablePadding sx={{ paddingLeft: "15px" }}>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="Termos de autorização/proibição de atividade"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                            </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="Requisitos de segurança para trabalhos perigosos"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                            </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="Instalações físicas dos locais de trabalho"
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
                            onClick={() => setOpenComunicacaoInterna(!openComunicacaoInterna)}
                            sx={{ padding: "3px 10px" }}
                        >
                            <ListItemText
                            primary="Comunicação Interna"
                            primaryTypographyProps={{
                                sx: { fontSize: "0.75rem", fontWeight: "400" },
                            }}
                            />
                            <FontAwesomeIcon
                            icon={openComunicacaoInterna ? faChevronDown : faChevronRight}
                            style={{ fontSize: "12px" }}
                            />
                        </ListItemButton>
                        </ListItem>
                        <Collapse in={openComunicacaoInterna} timeout="auto" unmountOnExit>
                        <List disablePadding sx={{ paddingLeft: "15px" }}>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="Denúncias/Reclamações"
                                primaryTypographyProps={{
                                    sx: { fontSize: "0.75rem", fontWeight: "400" },
                                }}
                                />
                            </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                            <ListItemButton sx={{ padding: "3px 10px" }}>
                                <ListItemText
                                primary="Sugestões de Melhorias"
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

export default ConformidadeLegalMenu;
