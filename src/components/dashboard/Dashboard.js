import React from 'react';
import { Grid, Paper, Typography, Avatar } from '@mui/material';
import { Assignment, Work, LocalFireDepartment, AccountBalance, Gavel, GroupWork, MonetizationOn } from '@mui/icons-material';

const dashboardData = [
  { title: 'Conformidade Legal', icon: <Assignment />, color: '#00bfa5', description: '' },
  { title: 'GPO', icon: <Work />, color: '#26c6da', description: '' },
  { title: 'Gestão de EPI\'s', icon: <Work />, color: '#43a047', description: '' },
  { title: 'Incêndio e Pânico', icon: <LocalFireDepartment />, color: '#66bb6a', description: 'Gerenciar os Equipamentos de Proteção Individual e Coletiva, quanto à aplicabilidade, monitoramento do uso e validação e testes dos novos equipamentos.' },
  { title: 'HO', icon: <AccountBalance />, color: '#ffd54f', description: 'Gerenciar os Equipamentos de Proteção Individual e Coletiva, quanto à aplicabilidade, monitoramento do uso e validação e testes dos novos equipamentos.' },
  { title: 'Cultura SSO', icon: <Gavel />, color: '#ff7043', description: 'Gerenciar os Equipamentos de Proteção Individual e Coletiva, quanto à aplicabilidade, monitoramento do uso e validação e testes dos novos equipamentos.' },
  { title: 'Perícias e Demandas Judiciais', icon: <GroupWork />, color: '#ef5350', description: 'Gerenciar os Equipamentos de Proteção Individual e Coletiva, quanto à aplicabilidade, monitoramento do uso e validação e testes dos novos equipamentos.' },
  { title: 'Contratadas', icon: <MonetizationOn />, color: '#ec407a', description: 'Gerenciar os Equipamentos de Proteção Individual e Coletiva, quanto à aplicabilidade, monitoramento do uso e validação e testes dos novos equipamentos.' },
  { title: 'Tributação SSO', icon: <MonetizationOn />, color: '#9c27b0', description: 'Gerenciar os Equipamentos de Proteção Individual e Coletiva, quanto à aplicabilidade, monitoramento do uso e validação e testes dos novos equipamentos.' },
];

const Dashboard = () => {
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

export default Dashboard;
