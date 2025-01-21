import React from "react";
import { Box, TextField, Grid, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, FormControl, InputLabel, Container } from "@mui/material";

const AuditoriaConformidadeInterna = () => {
  return (
    <>
      <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 3 }}>
        Avaliação e Desempenho em SSO
      </Typography>
      <Container style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '16px', borderRadius: '8px' }}>
        <form>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <TextField label="Razão Social da Empresa" fullWidth size="small" InputProps={{ style: { height: '40px' } }} InputLabelProps={{ style: { fontSize: '0.8rem' } }} />
            </Grid>
            <Grid item xs={2}>
              <TextField label="CNPJ" fullWidth size="small" InputProps={{ style: { height: '40px' } }} InputLabelProps={{ style: { fontSize: '0.8rem' } }} />
            </Grid>
            <Grid item xs={2}>
              <TextField label="Nº Contrato" fullWidth size="small" InputProps={{ style: { height: '40px' } }} InputLabelProps={{ style: { fontSize: '0.8rem' } }} />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Responsável pela Empresa" fullWidth size="small" InputProps={{ style: { height: '40px' } }} InputLabelProps={{ style: { fontSize: '0.8rem' } }} />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Nome do Avaliador" fullWidth size="small" InputProps={{ style: { height: '40px' } }} InputLabelProps={{ style: { fontSize: '0.8rem' } }} />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Ciclo de Avaliação" fullWidth size="small" InputProps={{ style: { height: '40px' } }} InputLabelProps={{ style: { fontSize: '0.8rem' } }} />
            </Grid>
            <Grid item xs={2}>
              <TextField label="Data da Avaliação" type="date" InputLabelProps={{ shrink: true, style: { fontSize: '0.8rem' } }} fullWidth size="small" InputProps={{ style: { height: '40px' } }} />
            </Grid>
            <Grid item xs={2}>
              <TextField label="Resultado da Avaliação" fullWidth size="small" InputProps={{ style: { height: '40px' } }} InputLabelProps={{ style: { fontSize: '0.8rem' } }} />
            </Grid>
          </Grid>
        </form>
      </Container>
      <Box sx={{ padding: 3, backgroundColor: "white", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", marginTop: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 3 }}>
          Check List
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 3 }}>
          <Button variant="contained" color="primary" sx={{ fontSize: '0.875rem' }}>
            CRIAR
          </Button>
          <TextField
            variant="outlined"
            placeholder="Pesquisar"
            size="small"
            sx={{ backgroundColor: "white", borderRadius: "4px", fontSize: "0.75rem" }}
            InputProps={{ style: { fontSize: "0.75rem" } }}
          />
        </Box>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Pergunta</TableCell>
                <TableCell>Processo</TableCell>
                <TableCell>Item a Avaliar</TableCell>
                <TableCell>Verificação</TableCell>
                <TableCell>Peso</TableCell>
                <TableCell>Pontuação</TableCell>
                <TableCell>Justificativa</TableCell>
                <TableCell>NA</TableCell>
                <TableCell>Observações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Add table rows here */}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box sx={{ padding: 3, backgroundColor: "white", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", marginTop: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 3 }}>
          Plano de Ação
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginBottom: 3 }}>
          <TextField
            variant="outlined"
            placeholder="Pesquisar"
            size="small"
            sx={{ backgroundColor: "white", borderRadius: "4px", fontSize: "0.75rem" }}
            InputProps={{ style: { fontSize: "0.75rem" } }}
          />
        </Box>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Desvio</TableCell>
                <TableCell>Categoria de Risco</TableCell>
                <TableCell>Ação Corretiva</TableCell>
                <TableCell>Ação Preventiva</TableCell>
                <TableCell>Ação Melhoria</TableCell>
                <TableCell>Responsável pela Ação</TableCell>
                <TableCell>Prazo Conclusão</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Add table rows here */}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default AuditoriaConformidadeInterna;