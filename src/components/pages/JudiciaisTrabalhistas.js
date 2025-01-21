import React from "react";
import { TextField, Grid, Typography, Container, Button, Box } from "@mui/material";

const JudiciaisTrabalhista = () => {
  return (
    <>
      <Container style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '16px', borderRadius: '8px' }}>
        <Typography fontSize="1.5rem" sx={{ fontWeight: "bold", marginBottom: 3 }}>
          Laudo Pericial
        </Typography>
        <form>
          <Grid container spacing={3} direction="column">
            <Grid item xs={12}>
              <TextField label="Objetivos" fullWidth size="small" multiline rows={3} InputLabelProps={{ style: { fontSize: '0.8rem' } }} />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Condições Preliminares" fullWidth size="small" multiline rows={3} InputLabelProps={{ style: { fontSize: '0.8rem' } }} />
            </Grid>
            <Grid item xs={12}>
              <TextField label="As atividades e condições de trabalho do reclamante" fullWidth size="small" multiline rows={3} InputLabelProps={{ style: { fontSize: '0.8rem' } }} />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Caracterização técnica da atividade" fullWidth size="small" multiline rows={3} InputLabelProps={{ style: { fontSize: '0.8rem' } }} />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Aparelhagem Utilizada" fullWidth size="small" multiline rows={3} InputLabelProps={{ style: { fontSize: '0.8rem' } }} />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Respostas aos quesitos" fullWidth size="small" multiline rows={3} InputLabelProps={{ style: { fontSize: '0.8rem' } }} />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Conclusão" fullWidth size="small" multiline rows={3} InputLabelProps={{ style: { fontSize: '0.8rem' } }} />
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                <Button variant="outlined" color="secondary">Cancelar</Button>
                <Button variant="contained" color="primary">Gerar Laudo</Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
};

export default JudiciaisTrabalhista;