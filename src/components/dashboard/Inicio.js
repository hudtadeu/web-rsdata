import React from 'react';
import { Grid, Paper, Typography, Avatar } from '@mui/material';
import { 
  FaBalanceScale, 
  FaProjectDiagram, 
  FaHardHat, 
  FaFireExtinguisher, 
  FaHeartbeat, 
  FaUsers, 
  FaGavel, 
  FaHandshake, 
  FaReceipt 
} from 'react-icons/fa';

const dashboardData = [
  { 
    title: 'Conformidade Legal', 
    icon: <FaBalanceScale />, 
    color: '#00bfa5', 
    description: 'Gerenciar os Equipamentos de Proteção Individual e Coletiva, quanto à aplicabilidade, monitoramento do uso e validação e testes dos novos equipamentos.' 
  },
  { 
    title: 'GPO', 
    icon: <FaProjectDiagram />, 
    color: '#26c6da', 
    description: 'Gerenciar os Equipamentos de Proteção Individual e Coletiva, quanto à aplicabilidade, monitoramento do uso e validação e testes dos novos equipamentos.' 
  },
  { 
    title: 'Gestão de EPI\'s', 
    icon: <FaHardHat />, 
    color: '#43a047', 
    description: 'Gerenciar os Equipamentos de Proteção Individual e Coletiva, quanto à aplicabilidade, monitoramento do uso e validação e testes dos novos equipamentos.' 
  },
  { 
    title: 'Incêndio e Pânico', 
    icon: <FaFireExtinguisher />, 
    color: '#66bb6a', 
    description: 'Gerenciar os Equipamentos de Proteção Individual e Coletiva, quanto à aplicabilidade, monitoramento do uso e validação e testes dos novos equipamentos.' 
  },
  { 
    title: 'HO', 
    icon: <FaHeartbeat />, 
    color: '#ffd54f', 
    description: 'Gerenciar os Equipamentos de Proteção Individual e Coletiva, quanto à aplicabilidade, monitoramento do uso e validação e testes dos novos equipamentos.' 
  },
  { 
    title: 'Cultura SSO', 
    icon: <FaUsers />, 
    color: '#ff7043', 
    description: 'Gerenciar os Equipamentos de Proteção Individual e Coletiva, quanto à aplicabilidade, monitoramento do uso e validação e testes dos novos equipamentos.' 
  },
  { 
    title: 'Perícias e Demandas Judiciais', 
    icon: <FaGavel />, 
    color: '#ef5350', 
    description: 'Gerenciar os Equipamentos de Proteção Individual e Coletiva, quanto à aplicabilidade, monitoramento do uso e validação e testes dos novos equipamentos.' 
  },
  { 
    title: 'Contratadas', 
    icon: <FaHandshake />, 
    color: '#ec407a', 
    description: 'Gerenciar os Equipamentos de Proteção Individual e Coletiva, quanto à aplicabilidade, monitoramento do uso e validação e testes dos novos equipamentos.' 
  },
  { 
    title: 'Tributação SSO', 
    icon: <FaReceipt />, 
    color: '#9c27b0', 
    description: 'Gerenciar os Equipamentos de Proteção Individual e Coletiva, quanto à aplicabilidade, monitoramento do uso e validação e testes dos novos equipamentos.' 
  },
];

const Inicio = () => {
  return (
    <Grid container spacing={3} sx={{ padding: 3 }}>
      {dashboardData.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Paper elevation={3} sx={{ padding: 2, display: 'flex', alignItems: 'center' }}>
            <Avatar sx={{ backgroundColor: item.color, marginRight: 2 }}>
              {item.icon}
            </Avatar>
            <div>
              <Typography variant="h6" sx={{ color: item.color }}>
                {item.title}
              </Typography>
              {item.description && (
                <Typography variant="body2" color="textSecondary">
                  {item.description}
                </Typography>
              )}
            </div>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Inicio;
