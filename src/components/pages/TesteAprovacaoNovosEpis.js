import React from 'react';
import { TextField, Typography, Container, Grid, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const TesteAprovacaoNovosEpis = () => {
  return (
    <>
      <Typography fontSize="1.8rem" gutterBottom>
        Teste e aprovação de novos EPI´s
      </Typography>
      <Container style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '16px', borderRadius: '8px' }}>
        <Typography fontSize="1.2rem" gutterBottom>
          Dados do Equipamento
        </Typography>
        <form>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <TextField label="Número do teste" fullWidth size="small" InputProps={{ style: { height: '40px' } }} InputLabelProps={{ style: { fontSize: '0.8rem' } }} />
            </Grid>
            <Grid item xs={6}>
              <TextField label="Revisão do documento" fullWidth size="small" InputProps={{ style: { height: '40px' } }} InputLabelProps={{ style: { fontSize: '0.8rem' } }} />
            </Grid>
            <Grid item xs={6}>
              <TextField label="EPI" fullWidth size="small" InputProps={{ style: { height: '40px' } }} InputLabelProps={{ style: { fontSize: '0.8rem' } }} />
            </Grid>
            <Grid item xs={6}>
              <TextField label="Caracteristica" fullWidth size="small" InputProps={{ style: { height: '40px' } }} InputLabelProps={{ style: { fontSize: '0.8rem' } }} />
            </Grid>
            <Grid item xs={6}>
              <TextField label="Fabricante" fullWidth size="small" InputProps={{ style: { height: '40px' } }} InputLabelProps={{ style: { fontSize: '0.8rem' } }} />
            </Grid>
            <Grid item xs={6}>
              <TextField label="Fornecedor" fullWidth size="small" InputProps={{ style: { height: '40px' } }} InputLabelProps={{ style: { fontSize: '0.8rem' } }} />
            </Grid>
            <Grid item xs={6}>
              <TextField label="Número do CA" fullWidth size="small" InputProps={{ style: { height: '40px' } }} InputLabelProps={{ style: { fontSize: '0.8rem' } }} />
            </Grid>
            <Grid item xs={6}>
              <TextField label="Prazo Validade do CA" type="date" InputLabelProps={{ shrink: true, style: { fontSize: '0.8rem' } }} fullWidth size="small" InputProps={{ style: { height: '40px' } }} />
            </Grid>
            <Grid item xs={6}>
              <TextField label="CRF" fullWidth size="small" InputProps={{ style: { height: '40px' } }} InputLabelProps={{ style: { fontSize: '0.8rem' } }} />
            </Grid>
            <Grid item xs={6}>
              <TextField label="NRRsf" fullWidth size="small" InputProps={{ style: { height: '40px' } }} InputLabelProps={{ style: { fontSize: '0.8rem' } }} />
            </Grid>
            <Grid item xs={6}>
              <TextField label="Prazo de Validade Produto (NT 146:2015)" type="date" InputLabelProps={{ shrink: true, style: { fontSize: '0.8rem' } }} fullWidth size="small" InputProps={{ style: { height: '40px' } }} />
            </Grid>
          </Grid>
        </form>
      </Container>
      <Container style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '16px', borderRadius: '8px', marginTop: '16px' }}>
        <Typography fontSize="1.2rem" gutterBottom>
          Dados Gerais Do Teste
        </Typography>
        <form>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <TextField label="Tempo (dias) Estimado para o Teste" fullWidth size="small" InputProps={{ style: { height: '40px' } }} InputLabelProps={{ style: { fontSize: '0.8rem' } }} />
            </Grid>
            <Grid item xs={6}>
              <TextField label="Data Inicio do Teste" type="date" InputLabelProps={{ shrink: true, style: { fontSize: '0.8rem' } }} fullWidth size="small" InputProps={{ style: { height: '40px' } }} />
            </Grid>
            <Grid item xs={6}>
              <TextField label="Data Fim do Teste" type="date" InputLabelProps={{ shrink: true, style: { fontSize: '0.8rem' } }} fullWidth size="small" InputProps={{ style: { height: '40px' } }} />
            </Grid>
            <Grid item xs={6}>
              <TextField label="Posto de Trabalho" fullWidth size="small" InputProps={{ style: { height: '40px' } }} InputLabelProps={{ style: { fontSize: '0.8rem' } }} />
            </Grid>
            <Grid item xs={6}>
              <TextField label="GHE" fullWidth size="small" InputProps={{ style: { height: '40px' } }} InputLabelProps={{ style: { fontSize: '0.8rem' } }} />
            </Grid>
            <Grid item xs={6}>
              <TextField label="Local de Trabalho" fullWidth size="small" InputProps={{ style: { height: '40px' } }} InputLabelProps={{ style: { fontSize: '0.8rem' } }} />
            </Grid>
            <Grid item xs={6}>
              <TextField label="Setor" fullWidth size="small" InputProps={{ style: { height: '40px' } }} InputLabelProps={{ style: { fontSize: '0.8rem' } }} />
            </Grid>
            <Grid item xs={6}>
              <TextField label="Cargo/Função" fullWidth size="small" InputProps={{ style: { height: '40px' } }} InputLabelProps={{ style: { fontSize: '0.8rem' } }} />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Descrição das Atividades/Gestos Profissionais" fullWidth multiline rows={4} InputLabelProps={{ style: { fontSize: '0.8rem' } }} />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Nome do Empregado Designado para o Teste" fullWidth size="small" InputProps={{ style: { height: '40px' } }} InputLabelProps={{ style: { fontSize: '0.8rem' } }} />
            </Grid>
          </Grid>
        </form>
      </Container>
      <Container style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '16px', borderRadius: '8px', marginTop: '16px' }}>
        <Typography fontSize="1.2rem" gutterBottom>
          Checklist
        </Typography>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={6}>
            <Button variant="contained" color="primary">CRIAR</Button>
          </Grid>
          <Grid item xs={6} style={{ textAlign: 'right' }}>
            <TextField label="Pesquisar" size="small" />
          </Grid>
        </Grid>
        <TableContainer component={Paper} style={{ marginTop: '16px' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Verificação</TableCell>
                <TableCell>Ok</TableCell>
                <TableCell>Nc</TableCell>
                <TableCell>Na</TableCell>
                <TableCell>Categoria De Risco</TableCell>
                <TableCell>Registro Fotografico</TableCell>
                <TableCell>Obs</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Rows will be added here */}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      <Container style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '16px', borderRadius: '8px', marginTop: '16px' }}>
        <Typography fontSize="1.2rem" gutterBottom>
          Plano de ação
        </Typography>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} style={{ textAlign: 'right' }}>
            <TextField label="Pesquisar" size="small" />
          </Grid>
        </Grid>
        <TableContainer component={Paper} style={{ marginTop: '16px' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Desvio</TableCell>
                <TableCell>Categoria Do Risco</TableCell>
                <TableCell>Ação</TableCell>
                <TableCell>Ação Corretiva</TableCell>
                <TableCell>Ação Preventiva</TableCell>
                <TableCell>Ação Melhoria</TableCell>
                <TableCell>Responsável Pela Ação</TableCell>
                <TableCell>Prazo Conclusão</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Rows will be added here */}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default TesteAprovacaoNovosEpis;