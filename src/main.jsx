
import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

function Main() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">C</div>
          <div>
            <strong>CYBER LAB</strong>
            <small>SECURITY SIMULATOR</small>
          </div>
        </div>

        <p className="menu-label">WORKSPACE</p>
        <nav>
          <a className="nav-item active" href="#dashboard">▦ Dashboard</a>
          <a className="nav-item" href="#timeline">◷ Linha do tempo</a>
          <a className="nav-item" href="#events">⌕ Eventos</a>
          <a className="nav-item" href="#assets">▤ Ativos</a>
          <a className="nav-item" href="#response">⬡ Resposta</a>
        </nav>

        <div className="sidebar-bottom">
          <span className="status-dot" />
          AMBIENTE ISOLADO
          <small>Somente dados fictícios</small>
        </div>
      </aside>

      <main className="main-content" id="dashboard">
        <header className="topbar">
          <div>
            <span className="eyebrow">LABORATÓRIO EDUCACIONAL / BLUE TEAM</span>
            <h1>Centro de Operações</h1>
            <p>Entenda o ataque. Investigue os sinais. Defenda o ambiente.</p>
          </div>
          <div className="simulation-badge">
            <span className="status-dot" /> SIMULAÇÃO
          </div>
        </header>

        <section className="welcome-panel">
          <div>
            <span className="eyebrow">CENÁRIO DE TREINAMENTO 001</span>
            <h2>Incidente TechCorp</h2>
            <p>
              Uma sequência de eventos suspeitos foi registrada
              no ambiente fictício da empresa.
            </p>
            <a className="primary-button" href="#timeline">
              Explorar incidente <span>→</span>
            </a>
          </div>
          <div className="hero-graphic" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="shield">⬡</div>
            <div className="orbit-point point-one" />
            <div className="orbit-point point-two" />
          </div>
        </section>

        <section className="stats-grid" aria-label="Indicadores">
          <article className="stat-card">
            <span className="stat-label">Eventos simulados</span>
            <strong>24</strong>
            <span className="stat-note">Registros do cenário</span>
          </article>
          <article className="stat-card">
            <span className="stat-label">Alertas gerados</span>
            <strong className="text-orange">03</strong>
            <span className="stat-note">Precisam de investigação</span>
          </article>
          <article className="stat-card">
            <span className="stat-label">Ativos monitorados</span>
            <strong>04</strong>
            <span className="stat-note">Infraestrutura fictícia</span>
          </article>
          <article className="stat-card">
            <span className="stat-label">Estado do laboratório</span>
            <strong className="text-green">Seguro</strong>
            <span className="stat-note">Sem conexões externas</span>
          </article>
        </section>

        <section className="content-grid">
          <article className="panel timeline-panel" id="timeline">
            <div className="panel-heading">
              <div>
                <h3>Linha do tempo do incidente</h3>
                <p>Etapas do cenário de treinamento</p>
              </div>
              <span className="tag">8 ETAPAS</span>
            </div>

            <div className="timeline">
              <div className="timeline-item completed">
                <span className="timeline-marker">✓</span>
                <div>
                  <strong>Reconhecimento</strong>
                  <p>Informações fictícias identificadas.</p>
                </div>
                <span className="timeline-time">ETAPA 01</span>
              </div>
              <div className="timeline-item current">
                <span className="timeline-marker">2</span>
                <div>
                  <strong>Acesso inicial</strong>
                  <p>Evento suspeito aguarda investigação.</p>
                </div>
                <span className="timeline-time">ETAPA 02</span>
              </div>
              <div className="timeline-item">
                <span className="timeline-marker">3</span>
                <div>
                  <strong>Atividade suspeita</strong>
                  <p>Eventos anormais no cenário.</p>
                </div>
                <span className="timeline-time">ETAPA 03</span>
              </div>
              <div className="timeline-item">
                <span className="timeline-marker">4</span>
                <div>
                  <strong>Detecção e resposta</strong>
                  <p>Investigação, contenção e recuperação.</p>
                </div>
                <span className="timeline-time">ETAPA 04+</span>
              </div>
            </div>
          </article>

          <article className="panel" id="events">
            <div className="panel-heading">
              <div>
                <h3>Alertas recentes</h3>
                <p>Eventos ilustrativos</p>
              </div>
              <span className="alert-count">03</span>
            </div>

            <div className="alert-item">
              <span className="alert-icon high">!</span>
              <div>
                <strong>Múltiplas falhas de login</strong>
                <p>auth.log · Conta fictícia</p>
              </div>
              <span className="severity high-text">ALTO</span>
            </div>
            <div className="alert-item">
              <span className="alert-icon medium">!</span>
              <div>
                <strong>Atividade fora do padrão</strong>
                <p>web.log · Servidor de teste</p>
              </div>
              <span className="severity medium-text">MÉDIO</span>
            </div>
            <div className="alert-item">
              <span className="alert-icon medium">!</span>
              <div>
                <strong>Acesso a recurso sensível</strong>
                <p>audit.log · Dados fictícios</p>
              </div>
              <span className="severity medium-text">MÉDIO</span>
            </div>

            <div className="info-note">
              <span>ⓘ</span>
              Os alertas são dados demonstrativos, não detecções reais.
            </div>
          </article>
        </section>

        <section className="panel assets-panel" id="assets">
          <div className="panel-heading">
            <div>
              <h3>Ativos do ambiente</h3>
              <p>Componentes da infraestrutura fictícia</p>
            </div>
            <span className="tag">TECHCORP LAB</span>
          </div>
          <div className="assets-grid">
            <div className="asset">
              <span className="asset-icon">▣</span>
              <div><strong>Servidor Web</strong><small>10.0.0.20 · WEB</small></div>
              <span className="asset-status">Monitorado</span>
            </div>
            <div className="asset">
              <span className="asset-icon">▤</span>
              <div><strong>Servidor de Logs</strong><small>10.0.0.30 · LOG</small></div>
              <span className="asset-status">Monitorado</span>
            </div>
            <div className="asset">
              <span className="asset-icon">▧</span>
              <div><strong>Estação de Teste</strong><small>10.0.0.40 · ENDPOINT</small></div>
              <span className="asset-status">Monitorado</span>
            </div>
            <div className="asset">
              <span className="asset-icon">▥</span>
              <div><strong>Banco de Teste</strong><small>10.0.0.50 · DATA</small></div>
              <span className="asset-status">Monitorado</span>
            </div>
          </div>
        </section>

        <footer>
          <span>CYBER ATTACK LAB · PROJETO EDUCACIONAL</span>
          <span>Versão 0.1.0 · Dados fictícios</span>
        </footer>
      </main>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<Main />);
