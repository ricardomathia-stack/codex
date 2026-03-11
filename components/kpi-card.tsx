import type { Kpi } from '@/lib/dashboard-data';

type KpiCardProps = { kpi: Kpi };

const trendColor = {
  up: 'text-emerald-400',
  down: 'text-rose-400',
  neutral: 'text-slate-300',
};

export function KpiCard({ kpi }: KpiCardProps) {
  return (
    <article className="card">
      <p className="card-title">{kpi.title}</p>
      <strong className="card-value">{kpi.value}</strong>
      <span className={trendColor[kpi.trend]}>{kpi.change}</span>
    </article>
  );
}
