
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

function ShieldLogo() {
  return (
    <svg className="shield-logo" viewBox="0 0 48 56" fill="none" aria-hidden="true">
      <path d="M24 3 43 10v16c0 12-8 20-19 27C13 46 5 38 5 26V10L24 3Z" stroke="currentColor" strokeWidth="2.5" />
      <path d="M24 11 35 15v11c0 8-4 14-11 20" stroke="currentColor" strokeWidth="2" />
      <path d="M16 36V20l15-6-7 12h7L16 42" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
    </svg>
  );
}

const navigation = [
  { icon: '⌂', label: 'Dashboard', href: '#dashboard' },
  { icon: '◷', label: 'Linha do tempo', href: '#timeline' },
  { icon: '△', label: 'Eventos', href: '#events' },
  { icon: '▣', label: 'Ativos', href: '#assets' },
  { icon: '⬡', label: 'Resposta', href: '#response' },
];

const metrics = [
  { icon: '▤', label: 'EVENTOS SIMULADOS', value: '24', detail: 'Registros do cenário', tone: 'green' },
  { icon: '⚠', label: 'ALERTAS GERADOS', value: '03', detail: 'Precisam de investigação', tone: 'amber' },
  { icon: '▣', label: 'ATIVOS MONITORADOS', value: '04', detail: 'Infraestrutura fictícia', tone: 'blue' },
  { icon: '⬡', label: 'ESTADO DO LABORATÓRIO', value: 'Seguro', detail: 'Sem conexões externas', tone: 'green' },
];

const timeline = [
  {
    time: '14:23',
    title: 'Login suspeito detectado',
    description: 'Falha de autenticação em um endpoint da rede interna.',
    status: 'ALERTA',
    tone: 'amber',
    source: 'AUTH-LOG-0042',
    asset: 'WS-04',
    evidence: 'Resultado: autenticação recusada. Origem fictícia: 192.168.1.10.',
    investigation: 'Verifique a frequência das falhas, o horário e se existem outros eventos associados à mesma origem.',
  },
  {
    time: '14:37',
    title: 'Acesso a servidor interno',
    description: 'Conexão simulada via RDP a partir de um IP não usual.',
    status: 'INVESTIGAÇÃO',
    tone: 'blue',
    source: 'NETWORK-LOG-0081',
    asset: 'WEB-01',
    evidence: 'Conexão RDP registrada no cenário fictício. Nenhuma conexão real foi executada.',
    investigation: 'Compare a origem do acesso com os ativos conhecidos e procure eventos anteriores que possam explicar a conexão.',
  },
  {
    time: '14:42',
    title: 'Atividade incomum identificada',
    description: 'Sequência fictícia de eventos encaminhada para análise.',
    status: 'EM ANÁLISE',
    tone: 'amber',
    source: 'SIEM-ALERT-0017',
    asset: 'LOG-01',
    evidence: 'Regra de detecção simulada acionada por uma sequência incomum de eventos.',
    investigation: 'Correlacione os registros de autenticação e rede para avaliar se os eventos fazem parte do mesmo incidente.',
  },
  {
    time: '14:51',
    title: 'Alerta encaminhado ao analista',
    description: 'Incidente aguardando decisão de resposta.',
    status: 'PENDENTE',
    tone: 'red',
    source: 'CASE-0001',
    asset: 'DB-01',
    evidence: 'Caso fictício aberto para análise. Nenhum sistema foi alterado.',
    investigation: 'Registre as evidências, avalie o impacto potencial e escolha uma medida defensiva simulada.',
  },
];

const alerts = [
  { time: '14:32', title: 'Múltiplas falhas de login', detail: 'IP fictício: 192.168.1.10', severity: 'ALTO', tone: 'red' },
  { time: '14:18', title: 'Atividade suspeita em servidor web', detail: 'Ativo: WEB-01', severity: 'MÉDIO', tone: 'amber' },
  { time: '13:47', title: 'Novo dispositivo na rede interna', detail: 'Ativo: WS-04', severity: 'BAIXO', tone: 'blue' },
];

const assets = [
  { name: 'WEB-01', type: 'Servidor web', ip: '10.0.0.20', status: 'Operacional', tone: 'green' },
  { name: 'LOG-01', type: 'Servidor de logs', ip: '10.0.0.30', status: 'Monitorado', tone: 'green' },
  { name: 'WS-04', type: 'Estação de teste', ip: '10.0.0.40', status: 'Monitorado', tone: 'green' },
  { name: 'DB-01', type: 'Banco de dados', ip: '10.0.0.50', status: 'Operacional', tone: 'green' },
];

function MetricCard({ item }) {
  return (
    <article className={`metric-card tone-${item.tone}`}>
      <div className="metric-icon" aria-hidden="true">{item.icon}</div>
      <div className="metric-content">
        <p className="metric-label">{item.label}</p>
        <strong className="metric-value">{item.value}</strong>
        <p className="metric-detail">{item.detail}</p>
      </div>
    </article>
  );
}

function StatusBadge({ children, tone = 'green' }) {
  return <span className={`status-badge tone-${tone}`}>{children}</span>;
}

function EventDetails({ event, onClose }) {
  if (!event) return null;

  return (
    <div className="event-detail-panel" aria-live="polite">
      <div className="panel-heading">
        <div>
          <p className="eyebrow">DETALHES DA OCORRÊNCIA</p>
          <h2>{event.title}</h2>
        </div>
        <button type="button" className="close-detail" onClick={onClose} aria-label="Fechar detalhes">
          ×
        </button>
      </div>

      <div className="event-detail-grid">
        <div><span>HORÁRIO</span><strong>{event.time}</strong></div>
        <div><span>ATIVO RELACIONADO</span><strong>{event.asset}</strong></div>
        <div><span>REFERÊNCIA DO LOG</span><strong>{event.source}</strong></div>
        <div><span>STATUS</span><strong>{event.status}</strong></div>
      </div>

      <div className="evidence-block">
        <h3>Evidência simulada</h3>
        <p>{event.evidence}</p>
      </div>

      <div className="investigation-guidance">
        <h3>Orientação para investigação</h3>
        <p>{event.investigation}</p>
      </div>
    </div>
  );
}

function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <a className="brand" href="#dashboard" aria-label="Cyber Lab, início">
          <ShieldLogo />
          <span className="brand-copy">
            <strong>CYBER LAB</strong>
            <small>SECURITY SIMULATOR</small>
          </span>
        </a>

        <div className="sidebar-divider" />
        <p className="menu-label">WORKSPACE</p>

        <nav className="sidebar-nav" aria-label="Navegação principal">
          {navigation.map((item, index) => (
            <a key={item.href} className={`nav-item ${index === 0 ? 'active' : ''}`} href={item.href}>
              <span className="nav-icon" aria-hidden="true">{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <span className="status-dot" />
          <strong>AMBIENTE ISOLADO</strong>
          <p>Somente dados fictícios</p>
          <span className="sidebar-version">CYBER LAB · V0.3</span>
        </div>
      </aside>

      <main className="main-area" id="dashboard">
        <header className="topbar">
          <label className="search-box">
            <span aria-hidden="true">⌕</span>
            <input type="search" placeholder="Pesquisar eventos, IPs, usuários..." aria-label="Pesquisar eventos, IPs e usuários" />
            <kbd>Ctrl + K</kbd>
          </label>

          <div className="topbar-right">
            <span className="environment-label"><span className="status-dot" />LABORATÓRIO</span>
            <div className="user-profile">
              <span className="avatar">SOC</span>
              <span className="profile-copy"><strong>Analista</strong><small>Blue Team</small></span>
            </div>
          </div>
        </header>

        <div className="dashboard-content">
          <section className="page-heading">
            <div>
              <p className="eyebrow">LABORATÓRIO EDUCACIONAL / BLUE TEAM</p>
              <h1>Centro de <span>Operações</span></h1>
              <p className="page-description">
                Analise eventos, investigue alertas e desenvolva suas habilidades em um ambiente seguro e 100% fictício.
              </p>
            </div>
            <StatusBadge tone="green">SIMULAÇÃO ATIVA</StatusBadge>
          </section>

          <section className="incident-banner">
            <div className="incident-copy">
              <p className="eyebrow">CENÁRIO DE TREINAMENTO 001</p>
              <h2>Incidente TechCorp</h2>
              <p>
                Uma sequência de eventos suspeitos foi registrada no ambiente fictício da empresa TechCorp.
                Analise os logs, identifique os indicadores e construa sua investigação.
              </p>
              <a className="primary-button" href="#timeline">
                <span aria-hidden="true">▶</span>Explorar incidente<span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="incident-details">
              <div className="incident-detail"><span className="detail-icon">⌘</span><div><small>EMPRESA</small><strong>TechCorp</strong></div></div>
              <div className="incident-detail"><span className="detail-icon">▣</span><div><small>SETOR</small><strong>Tecnologia</strong></div></div>
              <div className="incident-detail"><span className="detail-icon">⬡</span><div><small>AMBIENTE</small><strong>Infraestrutura fictícia</strong></div></div>
            </div>
          </section>

          <section className="metrics-grid" aria-label="Resumo do laboratório">
            {metrics.map((item) => <MetricCard key={item.label} item={item} />)}
          </section>

          <section className="investigation-grid">
            <article className="panel timeline-panel" id="timeline">
              <div className="panel-heading">
                <div><h2>Linha do tempo do incidente</h2><p>Selecione um evento para investigar</p></div>
                <span className="panel-counter">04 EVENTOS</span>
              </div>

              <div className="timeline-list">
                {timeline.map((event) => (
                  <button
                    type="button"
                    className={`timeline-event timeline-event-button ${selectedEvent?.time === event.time ? 'selected' : ''}`}
                    key={event.time}
                    onClick={() => setSelectedEvent(event)}
                    aria-pressed={selectedEvent?.time === event.time}
                  >
                    <span className={`timeline-marker tone-${event.tone}`} />
                    <time>{event.time}</time>
                    <div className="timeline-event-copy">
                      <strong>{event.title}</strong>
                      <p>{event.description}</p>
                    </div>
                    <StatusBadge tone={event.tone}>{event.status}</StatusBadge>
                  </button>
                ))}
              </div>

              <EventDetails event={selectedEvent} onClose={() => setSelectedEvent(null)} />

              <a className="text-link" href="#events">Consultar eventos <span aria-hidden="true">→</span></a>
            </article>

            <article className="panel alerts-panel" id="events">
              <div className="panel-heading">
                <div><h2>Alertas recentes</h2><p>Eventos ilustrativos para investigação</p></div>
                <span className="panel-counter">03</span>
              </div>

              <div className="alerts-list">
                {alerts.map((alert) => (
                  <div className="alert-row" key={alert.time}>
                    <span className={`alert-marker tone-${alert.tone}`} />
                    <time>{alert.time}</time>
                    <div className="alert-copy"><strong>{alert.title}</strong><small>{alert.detail}</small></div>
                    <StatusBadge tone={alert.tone}>{alert.severity}</StatusBadge>
                  </div>
                ))}
              </div>

              <a className="text-link" href="#response">Ver resposta ao incidente <span aria-hidden="true">→</span></a>
            </article>
          </section>

          <section className="panel assets-panel" id="assets">
            <div className="panel-heading">
              <div><h2>Ativos monitorados</h2><p>Inventário fictício do ambiente TechCorp</p></div>
              <span className="panel-counter">04 ATIVOS</span>
            </div>

            <div className="table-scroll">
              <table>
                <thead><tr><th>ATIVO</th><th>TIPO</th><th>ENDEREÇO IP</th><th>STATUS</th></tr></thead>
                <tbody>
                  {assets.map((asset) => (
                    <tr key={asset.name}>
                      <td className="asset-name">{asset.name}</td>
                      <td>{asset.type}</td>
                      <td className="ip-address">{asset.ip}</td>
                      <td><StatusBadge tone={asset.tone}>{asset.status}</StatusBadge></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="panel response-panel" id="response">
            <div>
              <p className="eyebrow">PRÓXIMA ETAPA</p>
              <h2>Investigação e resposta</h2>
              <p>Analise as evidências simuladas e registre a decisão de resposta para o incidente.</p>
            </div>
            <StatusBadge tone="amber">AGUARDANDO ANÁLISE</StatusBadge>
          </section>

          <footer className="app-footer">
            <span>CYBER LAB · SECURITY SIMULATOR</span>
            <span>Versão 0.3.0 · Ambiente educacional isolado</span>
            <span>Todos os dados são fictícios</span>
          </footer>
        </div>
      </main>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
