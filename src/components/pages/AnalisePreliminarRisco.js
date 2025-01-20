import React from "react";
import { Box, TextField, Grid, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";

const AnalisePreliminarRisco = () => {
  return (
    <>
      <Box sx={{ padding: 3, backgroundColor: "white", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Número Da Inspeção"
              size="small"
              sx={{ marginBottom: 2, backgroundColor: "white", borderRadius: "4px", fontSize: "0.75rem" }}
              InputProps={{ style: { fontSize: "0.75rem" } }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Revisão"
              size="small"
              sx={{ marginBottom: 2, backgroundColor: "white", borderRadius: "4px", fontSize: "0.75rem" }}
              InputProps={{ style: { fontSize: "0.75rem" } }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Resp Pela Inspeção"
              size="small"
              sx={{ marginBottom: 2, backgroundColor: "white", borderRadius: "4px", fontSize: "0.75rem" }}
              InputProps={{ style: { fontSize: "0.75rem" } }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Função"
              size="small"
              sx={{ marginBottom: 2, backgroundColor: "white", borderRadius: "4px", fontSize: "0.75rem" }}
              InputProps={{ style: { fontSize: "0.75rem" } }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Data"
              size="small"
              sx={{ marginBottom: 2, backgroundColor: "white", borderRadius: "4px", fontSize: "0.75rem" }}
              InputProps={{ style: { fontSize: "0.75rem" } }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Horário"
              size="small"
              sx={{ marginBottom: 2, backgroundColor: "white", borderRadius: "4px", fontSize: "0.75rem" }}
              InputProps={{ style: { fontSize: "0.75rem" } }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Local"
              size="small"
              sx={{ marginBottom: 2, backgroundColor: "white", borderRadius: "4px", fontSize: "0.75rem" }}
              InputProps={{ style: { fontSize: "0.75rem" } }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Responsável"
              size="small"
              sx={{ marginBottom: 2, backgroundColor: "white", borderRadius: "4px", fontSize: "0.75rem" }}
              InputProps={{ style: { fontSize: "0.75rem" } }}
            />
          </Grid>
        </Grid>
      </Box>
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
                <TableCell>Verificação</TableCell>
                <TableCell>Ok</TableCell>
                <TableCell>NC</TableCell>
                <TableCell>NA</TableCell>
                <TableCell>Categoria de Risco</TableCell>
                <TableCell>Registro Fotográfico</TableCell>
                <TableCell>Obs</TableCell>
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

export default AnalisePreliminarRisco;