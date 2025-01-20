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

const LegalRequisitosPage = () => {
  const tableData = [
    {
      requisitoLegal: "54465464",
      descricaoRequisito: "Teste de requisito",
      descricaoItem: "Lorem Ipsum é simplesmente um t...",
      conformidade: "Sim",
      evidenciaComentarios: "Lorem Ipsum é simplesmente um texto fictício",
      infracao: "Teste",
      tipo: 1,
      valorMin: 12,
      valorMax: 25,
    },
    {
      requisitoLegal: "12345678",
      descricaoRequisito: "Outro requisito",
      descricaoItem: "Descrição do item...",
      conformidade: "Não",
      evidenciaComentarios: "Comentários sobre a evidência",
      infracao: "Outro teste",
      tipo: 2,
      valorMin: 15,
      valorMax: 30,
    },
    {
      requisitoLegal: "87654321",
      descricaoRequisito: "Mais um requisito",
      descricaoItem: "Mais uma descrição...",
      conformidade: "Sim",
      evidenciaComentarios: "Mais comentários",
      infracao: "Teste adicional",
      tipo: 3,
      valorMin: 20,
      valorMax: 40,
    },
    {
      requisitoLegal: "11223344",
      descricaoRequisito: "Requisito adicional",
      descricaoItem: "Descrição adicional...",
      conformidade: "Sim",
      evidenciaComentarios: "Comentários adicionais",
      infracao: "Teste extra",
      tipo: 4,
      valorMin: 25,
      valorMax: 50,
    },
    {
      requisitoLegal: "55667788",
      descricaoRequisito: "Requisito extra",
      descricaoItem: "Descrição extra...",
      conformidade: "Não",
      evidenciaComentarios: "Comentários extra",
      infracao: "Teste final",
      tipo: 5,
      valorMin: 30,
      valorMax: 60,
    },
    {
      requisitoLegal: "99887766",
      descricaoRequisito: "Requisito adicional 2",
      descricaoItem: "Descrição adicional 2...",
      conformidade: "Sim",
      evidenciaComentarios: "Comentários adicionais 2",
      infracao: "Teste extra 2",
      tipo: 6,
      valorMin: 35,
      valorMax: 70,
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
              <TableCell sx={{ fontWeight: 'bold', fontSize: '0.75rem' }}>Requisito Legal</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '0.75rem' }}>Descrição Requisito</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '0.75rem' }}>Descrição do Item</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '0.75rem' }}>Conformidade</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '0.75rem' }}>Evidências Comentários</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '0.75rem' }}>Infração</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '0.75rem' }}>Tipo</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '0.75rem' }}>Valor Mínimo da Multa</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '0.75rem' }}>Valor Máximo da Multa</TableCell>
              <TableCell sx={{ fontWeight: 'bold', fontSize: '0.75rem' }}>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow key={index} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f9f9f9' } }}>
                <TableCell sx={{ fontSize: '0.75rem' }}>{row.requisitoLegal}</TableCell>
                <TableCell sx={{ fontSize: '0.75rem' }}>{row.descricaoRequisito}</TableCell>
                <TableCell sx={{ fontSize: '0.75rem' }}>{row.descricaoItem}</TableCell>
                <TableCell sx={{ fontSize: '0.75rem' }}>{row.conformidade}</TableCell>
                <TableCell sx={{ fontSize: '0.75rem' }}>{row.evidenciaComentarios}</TableCell>
                <TableCell sx={{ fontSize: '0.75rem' }}>{row.infracao}</TableCell>
                <TableCell sx={{ fontSize: '0.75rem' }}>{row.tipo}</TableCell>
                <TableCell sx={{ fontSize: '0.75rem' }}>{row.valorMin}</TableCell>
                <TableCell sx={{ fontSize: '0.75rem' }}>{row.valorMax}</TableCell>
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

export default LegalRequisitosPage;
