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
    description: 'Mapear e gerenciar os requisitos legais da organização visando atender à legislação de SSO vigente. Permite ainda a retenção da informação pertinentes aos processos.' 
  },
  { 
    title: 'GPO', 
    icon: <FaProjectDiagram />, 
    color: '#26c6da', 
    description: 'Gerenciar os Perigos Ocupacionais e as atividades críticas através dos registros de inspeções in loco (EPIs, CIPA, Produtos Químicos, etc), possibilitando o desdobramento das ações de tratamento das RNC’s para consolidação das melhorias dos processos.' 
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
    description: 'Gerenciar e realizar as inspeções de conformidade para garantir a eficácia e o uso efetivo do EPIs, registrar os testes de novos equipamentos, possibilitando estabelecer o desdobramento das ações de tratamento das RNC’s para consolidação das melhorias dos processos.' 
  },
  { 
    title: 'Higiene Ocupacional', 
    icon: <FaHeartbeat />, 
    color: '#ffc107', 
    description: 'Gerenciar e realizar as avaliações quantitativas dos agentes de riscos, registrando os índices dos agentes monitorados em campo. Possibilita ainda o controle dos equipamentos de medição, como as datas de calibração e dos laudos.' 
  },
  { 
    title: 'Cultura SSO', 
    icon: <FaUsers />, 
    color: '#ff7043', 
    description: 'Gerenciar a efetiva participação dos empregados nas ações dos programas de segurança e saúde, permitindo o registro eletrônico dos DDS/DSS, das campanhas de SSO, avaliações de clima de cultura de saúde e segurança da organização.' 
  },
  { 
    title: 'Perícias e Demandas Judiciais', 
    icon: <FaGavel />, 
    color: '#ef5350', 
    description: 'Gerenciar e registrar o acompanhamento das perícias in loco, laudo técnico, estabelecer plano de ação e monitorar o desdobramento do processo.' 
  },
  { 
    title: 'Contratadas', 
    icon: <FaHandshake />, 
    color: '#ec407a', 
    description: 'Gerenciar as documentações e as ações das contratadas em sua área de atuação. Possibilita o planejamento e o registro das inspeções de segurança e das auditorias de conformidade dos processos e o desdobramento das ações de tratamento das RNC’s para consolidação das melhorias dos processos.' 
  },
  { 
    title: 'Tributação SSO', 
    icon: <FaReceipt />, 
    color: '#9c27b0', 
    description: 'Permite registrar as informações do FAP e realizar a análise crítica sobre o adoecimento ocupacional, a perda de produtividade, dos impactos econômico-financeiros e tributários, para orientação e tomada de decisão com reflexos positivos para a sustentabilidade do negócio.' 
  },
];

const Inicio = () => {
  return (
    <Grid container spacing={3} sx={{ padding: 3, marginTop: -5 }}>
      {dashboardData.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Paper 
            elevation={3} 
            sx={{ 
              padding: 2, 
              display: 'flex', 
              alignItems: 'center', 
              flexDirection: 'column', 
              height: '220px', 
              justifyContent: 'space-between', 
              textAlign: 'center',
              boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)', 
              borderRadius: '8px',
              border: '1px solid #e0e0e0',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
              }
            }}
          >
            <Avatar sx={{ backgroundColor: item.color, marginBottom: 2, width: 40, height: 40 }}>
              {item.icon}
            </Avatar>
            <Typography sx={{ color: item.color, marginBottom: 1, fontSize: '17px', fontWeight: '500' }}>
              {item.title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {item.description}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Inicio;
