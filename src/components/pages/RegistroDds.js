import React from 'react';
import { Container, TextField, Typography, Box, Grid, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const RegistroDds = () => {
  const [selectAll, setSelectAll] = React.useState(false);
  const [selected, setSelected] = React.useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      setSelected([/* array of all item ids */]);
      setSelectAll(true);
      return;
    }
    setSelected([]);
    setSelectAll(false);
  };

  const handleCheckboxClick = (id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container>
      <Typography fontSize="1.5rem" component="h1" gutterBottom>
        Registros de DDS
      </Typography>
      <Container style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '16px', borderRadius: '8px' }}>
        <Typography fontSize="1.2rem" gutterBottom>
          Participação do DDS - Como Estou?
        </Typography>
        <form>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <TextField label="Data" type="date" InputLabelProps={{ shrink: true, style: { fontSize: '0.8rem' } }} fullWidth size="small" InputProps={{ style: { height: '40px' } }} />
            </Grid>
            <Grid item xs={4.5}>
              <TextField label="Tema" fullWidth size="small" InputProps={{ style: { height: '40px' } }} InputLabelProps={{ style: { fontSize: '0.8rem' } }} />
            </Grid>
            <Grid item xs={4.5}>
              <TextField label="Condutor do DDS" fullWidth size="small" InputProps={{ style: { height: '40px' } }} InputLabelProps={{ style: { fontSize: '0.8rem' } }} />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Matrícula" fullWidth size="small" InputProps={{ style: { height: '40px' } }} InputLabelProps={{ style: { fontSize: '0.8rem' } }} />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Legenda" fullWidth size="small" InputProps={{ style: { height: '40px' } }} InputLabelProps={{ style: { fontSize: '0.8rem' } }} />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Como Estou?" fullWidth size="small" InputProps={{ style: { height: '40px' } }} InputLabelProps={{ style: { fontSize: '0.8rem' } }} />
            </Grid>
          </Grid>
        </form>
      </Container>
      <Container style={{ marginTop: '24px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '16px', borderRadius: '8px' }}>
        <Typography fontSize="1.2rem" gutterBottom>
          Data do DSS
        </Typography>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={4} style={{ textAlign: 'left' }}>
            <Button variant="contained" color="primary">CRIAR</Button>
          </Grid>
          <Grid item xs={8} style={{ textAlign: 'right' }}>
            <TextField label="Pesquisa" size="small" style={{ width: '30%' }} />
          </Grid>
        </Grid>
        <TableContainer style={{ marginTop: '16px' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    indeterminate={selected.length > 0 && selected.length < /* total number of items */ 0}
                    checked={selectAll}
                    onChange={handleSelectAllClick}
                  />
                </TableCell>
                <TableCell>Data/Hora</TableCell>
                <TableCell>Descrição</TableCell>
                <TableCell>Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Replace the following with dynamic rows */}
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selected.indexOf(/* item id */) !== -1}
                    onChange={() => handleCheckboxClick(/* item id */)}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    type="datetime-local"
                    defaultValue="2023-01-01T10:00"
                    size="small"
                    style={{ width: '50%' }}
                    InputLabelProps={{ shrink: true }}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    defaultValue="Descrição do evento"
                    size="small"
                    style={{ width: '100%' }}
                  />
                </TableCell>
                <TableCell>
                  <IconButton onClick={handleMenuClick}>
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                  >
                    <MenuItem onClick={handleMenuClose}>Adicionar Linha</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Linha Duplicada</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Excluir Linha</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Atualizar Linha</MenuItem>
                  </Menu>
                </TableCell>
              </TableRow>
              {/* Repeat TableRow for each item */}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      <Container style={{ marginTop: '24px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '16px', borderRadius: '8px' }}>
        <Typography fontSize="1.2rem" gutterBottom>
          Registro de Participação
        </Typography>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={4} style={{ textAlign: 'left' }}>
            <Button variant="contained" color="primary">CRIAR</Button>
          </Grid>
          <Grid item xs={8} style={{ textAlign: 'right' }}>
            <TextField label="Pesquisa" size="small" style={{ width: '30%' }} />
          </Grid>
        </Grid>
        <TableContainer style={{ marginTop: '16px' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    indeterminate={selected.length > 0 && selected.length < /* total number of items */ 0}
                    checked={selectAll}
                    onChange={handleSelectAllClick}
                  />
                </TableCell>
                <TableCell>Nome</TableCell>
                <TableCell>Nome do Participante</TableCell>
                <TableCell>Como estou me sentindo</TableCell>
                <TableCell>Rubrica</TableCell>
                <TableCell>Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Replace the following with dynamic rows */}
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selected.indexOf(/* item id */) !== -1}
                    onChange={() => handleCheckboxClick(/* item id */)}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    defaultValue="Nome"
                    size="small"
                    style={{ width: '100%' }}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    defaultValue="Nome do Participante"
                    size="small"
                    style={{ width: '100%' }}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    defaultValue="Como estou me sentindo"
                    size="small"
                    style={{ width: '100%' }}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    defaultValue="Rubrica"
                    size="small"
                    style={{ width: '100%' }}
                  />
                </TableCell>
                <TableCell>
                  <IconButton onClick={handleMenuClick}>
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                  >
                    <MenuItem onClick={handleMenuClose}>Adicionar Linha</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Linha Duplicada</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Excluir Linha</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Atualizar Linha</MenuItem>
                  </Menu>
                </TableCell>
              </TableRow>
              {/* Repeat TableRow for each item */}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Container>
  );
};

export default RegistroDds;