import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Button,
  TextField,
  IconButton,
} from "@mui/material";
import { Edit as EditIcon } from "@mui/icons-material";

const OrdemServicoElaboracao = () => {
  const tableData = [
    {
      sequencia: "1",
      fatorRisco: "Ruído",
      exposicao: "Alta",
      naoAplicavel: "Não",
      aplicavel: "Sim",
      probabilidade: "Alta",
      severidade: "Moderada",
      criterioRiscos: "Significativo",
      controlesExistentes: "Protetores auriculares",
    },
    {
      sequencia: "2",
      fatorRisco: "Produtos Químicos",
      exposicao: "Média",
      naoAplicavel: "Não",
      aplicavel: "Sim",
      probabilidade: "Média",
      severidade: "Alta",
      criterioRiscos: "Significativo",
      controlesExistentes: "EPI, ventilação",
    },
    {
      sequencia: "3",
      fatorRisco: "Ergonomia",
      exposicao: "Baixa",
      naoAplicavel: "Não",
      aplicavel: "Sim",
      probabilidade: "Baixa",
      severidade: "Baixa",
      criterioRiscos: "Aceitável",
      controlesExistentes: "Ajuste de mobiliário",
    },
  ];

  return (
    <Box sx={{ padding: 2, marginTop: -2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 3 }}>
        <Button 
          variant="contained" 
          color="primary"
          sx={{ 
            fontSize: '0.8rem' 
          }}
        >
          CRIAR
        </Button>
        <TextField
          variant="outlined"
          placeholder="Pesquisar..."
          size="small"
          sx={{ 
            width: '200px',
            '& .MuiInputBase-root': {
              height: '30px',
            },
            '& .MuiOutlinedInput-input': {
              padding: '6px 14px', 
              fontSize: '0.75rem', 
            },
            '& .MuiInputBase-input::placeholder': {
              fontSize: '0.9rem', 
            },
          }}
        />
      </Box>
      <TableContainer component={Paper} sx={{ boxShadow: '0 3px 5px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '0.75rem' }}>Sequencia</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '0.75rem' }}>Fator Risco</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '0.75rem' }}>Exposição</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '0.75rem' }}>Não Aplicável</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '0.75rem' }}>Aplicável</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '0.75rem' }}>Probabilidade</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '0.75rem' }}>Severidade</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '0.75rem' }}>Critério Riscos</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '0.75rem' }}>Controles Existentes</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '0.75rem' }}>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow key={index} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f9f9f9' } }}>
                <TableCell sx={{ fontSize: '0.75rem' }}>{row.sequencia}</TableCell>
                <TableCell sx={{ fontSize: '0.75rem' }}>{row.fatorRisco}</TableCell>
                <TableCell sx={{ fontSize: '0.75rem' }}>{row.exposicao}</TableCell>
                <TableCell sx={{ fontSize: '0.75rem' }}>{row.naoAplicavel}</TableCell>
                <TableCell sx={{ fontSize: '0.75rem' }}>{row.aplicavel}</TableCell>
                <TableCell sx={{ fontSize: '0.75rem' }}>{row.probabilidade}</TableCell>
                <TableCell sx={{ fontSize: '0.75rem' }}>{row.severidade}</TableCell>
                <TableCell sx={{ fontSize: '0.75rem' }}>{row.criterioRiscos}</TableCell>
                <TableCell sx={{ fontSize: '0.75rem' }}>{row.controlesExistentes}</TableCell>
                <TableCell>
                  <IconButton color="secondary" size="small" sx={{ fontSize: '1rem' }}>
                    <EditIcon fontSize="inherit" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default OrdemServicoElaboracao;
