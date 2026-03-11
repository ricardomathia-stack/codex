import { KpiCard } from '@/components/kpi-card';
import { actionPlan, dashboardKpis, funnelStages, sellerPerformance } from '@/lib/dashboard-data';

export default function Home() {
  return (
    <main className="container">
      <header className="header">
        <div>
          <h1>Dashboard Comercial · RD CRM</h1>
          <p>Visão consolidada de leads, funil e performance por vendedor.</p>
        </div>
        <button className="primary-btn">Atualizar dados</button>
      </header>

      <section className="kpis-grid">
        {dashboardKpis.map((kpi) => (
          <KpiCard key={kpi.title} kpi={kpi} />
        ))}
      </section>

      <section className="panel-grid">
        <article className="panel">
          <h2>Funil comercial</h2>
          <table>
            <thead>
              <tr>
                <th>Etapa</th>
                <th>Total</th>
                <th>Conversão</th>
              </tr>
            </thead>
            <tbody>
              {funnelStages.map((item) => (
                <tr key={item.stage}>
                  <td>{item.stage}</td>
                  <td>{item.total}</td>
                  <td>{item.conversion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>

        <article className="panel">
          <h2>Taxas por vendedor</h2>
          <table>
            <thead>
              <tr>
                <th>Vendedor</th>
                <th>Leads</th>
                <th>Win rate</th>
                <th>SLA resposta</th>
              </tr>
            </thead>
            <tbody>
              {sellerPerformance.map((item) => (
                <tr key={item.seller}>
                  <td>{item.seller}</td>
                  <td>{item.leads}</td>
                  <td>{item.winRate}</td>
                  <td>{item.responseSla}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>
      </section>

      <article className="panel full-width">
        <h2>Plano de ação sugerido</h2>
        <ul>
          {actionPlan.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
    </main>
  );
}
