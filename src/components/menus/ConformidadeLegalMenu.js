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
} from "@fortawesome/free-solid-svg-icons";

const ConformidadeLegalMenu = () => {
  const [openConformidade, setOpenConformidade] = useState(false); 
  const [openRequisitos, setOpenRequisitos] = useState(false); 
  const [openDocumentos, setOpenDocumentos] = useState(false); 
  const [openDiretrizes, setOpenDiretrizes] = useState(false); 
  const [openGro, setOpenGro] = useState(false); 
  const [openLicencas, setOpenLicencas] = useState(false); 

  return (
    <List component="nav" disablePadding>
      <ListItem disablePadding>
        <ListItemButton
          onClick={() => setOpenConformidade(!openConformidade)}
          sx={{ padding: "5px 10px" }}
        >
          <ListItemIcon sx={{ minWidth: "30px" }}>
            <FontAwesomeIcon icon={faClipboard} style={{ fontSize: "16px" }} />
          </ListItemIcon>
          <ListItemText
            primary="Conformidade Legal"
            primaryTypographyProps={{
              sx: { fontSize: "0.75rem", fontWeight: "500" },
            }}
          />
          <FontAwesomeIcon
            icon={openConformidade ? faChevronDown : faChevronRight}
            style={{ fontSize: "12px" }}
          />
        </ListItemButton>
      </ListItem>
      <Collapse in={openConformidade} timeout="auto" unmountOnExit>
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
                        <ListItemButton sx={{ padding: "3px 10px" }}>
                            <ListItemText
                            primary="Laudos"
                            primaryTypographyProps={{
                                sx: { fontSize: "0.75rem", fontWeight: "400" },
                            }}
                            />
                        </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                        <ListItemButton sx={{ padding: "3px 10px" }}>
                            <ListItemText
                            primary="Programas Legais"
                            primaryTypographyProps={{
                                sx: { fontSize: "0.75rem", fontWeight: "400" },
                            }}
                            />
                        </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                        <ListItemButton sx={{ padding: "3px 10px" }}>
                            <ListItemText
                            primary="Avaliações"
                            primaryTypographyProps={{
                                sx: { fontSize: "0.75rem", fontWeight: "400" },
                            }}
                            />
                        </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                        <ListItemButton sx={{ padding: "3px 10px" }}>
                            <ListItemText
                            primary="Planos"
                            primaryTypographyProps={{
                                sx: { fontSize: "0.75rem", fontWeight: "400" },
                            }}
                            />
                        </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                        <ListItemButton sx={{ padding: "3px 10px" }}>
                            <ListItemText
                            primary="Controle de Riscos Ocupacionais"
                            primaryTypographyProps={{
                                sx: { fontSize: "0.75rem", fontWeight: "400" },
                            }}
                            />
                        </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                        <ListItemButton sx={{ padding: "3px 10px" }}>
                            <ListItemText
                            primary="Registros Diversos"
                            primaryTypographyProps={{
                                sx: { fontSize: "0.75rem", fontWeight: "400" },
                            }}
                            />
                        </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                        <ListItemButton sx={{ padding: "3px 10px" }}>
                            <ListItemText
                            primary="Comunicação Interna"
                            primaryTypographyProps={{
                                sx: { fontSize: "0.75rem", fontWeight: "400" },
                            }}
                            />
                        </ListItemButton>
                        </ListItem>
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
