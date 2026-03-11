export type Kpi = {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
};

export const dashboardKpis: Kpi[] = [
  { title: 'Leads no mês', value: '1.284', change: '+12,4%', trend: 'up' },
  { title: 'Taxa de conversão', value: '18,7%', change: '+2,1 p.p.', trend: 'up' },
  { title: 'Leads sem resposta (48h)', value: '93', change: '-8,3%', trend: 'down' },
  { title: 'Win rate', value: '31,5%', change: '+1,8 p.p.', trend: 'up' },
];

export const funnelStages = [
  { stage: 'Lead novo', total: 1284, conversion: '100%' },
  { stage: 'Qualificado', total: 696, conversion: '54,2%' },
  { stage: 'Proposta', total: 302, conversion: '43,4%' },
  { stage: 'Negociação', total: 157, conversion: '52,0%' },
  { stage: 'Ganho', total: 98, conversion: '62,4%' },
];

export const sellerPerformance = [
  { seller: 'Ana', leads: 328, winRate: '34,8%', responseSla: '89%' },
  { seller: 'Bruno', leads: 301, winRate: '28,4%', responseSla: '76%' },
  { seller: 'Camila', leads: 352, winRate: '32,1%', responseSla: '81%' },
  { seller: 'Diego', leads: 303, winRate: '30,7%', responseSla: '85%' },
];

export const actionPlan = [
  'Priorizar distribuição automática para leads novos com SLA > 24h.',
  'Revisar abordagem da etapa Proposta para reduzir tempo médio de avanço.',
  'Criar rotina diária para limpar backlog de leads sem resposta.',
];
