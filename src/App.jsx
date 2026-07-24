const skills = [
  'SQL',
  'C#',
  'Suporte de TI',
  'Análise de dados',
  'Informática avançada',
  'Trabalho em equipe',
  'Proatividade',
  'Comunicação com público'
];

const experiences = [
  {
    role: 'Estagiário de TI',
    company: 'Pague Menos · Fortaleza, CE',
    period: 'Nov 2024 — atual',
    description: 'Atuação com análise de bancos de dados, resolução de chamados internos e rotinas com SQL e C#.'
  },
  {
    role: 'Apoio à Gestão',
    company: 'Mais Serviços · Fortaleza, CE',
    period: 'Jun 2023 — atual',
    description: 'Organização de processos, documentos e relatórios, com foco em controle de prazos e eficiência operacional.'
  },
  {
    role: 'Promotor de Vendas',
    company: 'Solar Coca-Cola · Fortaleza, CE',
    period: 'Dez 2019 — Fev 2021',
    description: 'Execução de campanhas de exposição e abastecimento, relacionamento com gerentes e acompanhamento de metas.'
  },
  {
    role: 'Auxiliar Administrativo',
    company: 'Senac · Fortaleza, CE',
    period: 'Nov 2014 — Dez 2017',
    description: 'Conferência de documentos, atualização de planilhas, protocolos e suporte administrativo interno.'
  }
];

const projects = [
  {
    name: 'Portfólio Profissional',
    description: 'Currículo online com layout responsivo, navegação fluida e deploy contínuo no Vercel.',
    tech: 'React, Vite, CSS',
    link: '#'
  },
  {
    name: 'Estudos em Programação Full Stack',
    description: 'Projetos práticos em andamento para evolução técnica em front-end, back-end e banco de dados.',
    tech: 'JavaScript, SQL, Node.js',
    link: '#'
  }
];

export default function App() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a href="#home" className="brand">Wellerson Moraes</a>
          <nav className="menu">
            <a href="#sobre">Sobre</a>
            <a href="#experiencia">Experiência</a>
            <a href="#projetos">Projetos</a>
            <a href="#habilidades">Habilidades</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>
      </header>

      <main className="container">
        <section id="home" className="hero">
          <p className="eyebrow">Estagiário de TI · Desenvolvedor em formação</p>
          <h1>Em busca da primeira oportunidade sólida em Análise e Desenvolvimento de Sistemas.</h1>
          <p className="lead">
            Atuo com suporte, análise de dados e organização de processos. Estou cursando ADS e evolução Full Stack,
            focado em construir soluções eficientes e com boa experiência de uso.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contato">Falar comigo</a>
            <a className="btn btn-ghost" href="#projetos">Ver projetos</a>
          </div>
          <div className="highlights-grid">
            <article className="highlight-card">
              <h3>Deploy contínuo</h3>
              <p>Atualização automática no Vercel a cada push na branch de produção.</p>
            </article>
            <article className="highlight-card">
              <h3>Performance</h3>
              <p>Estrutura otimizada em React + Vite para carregamento rápido.</p>
            </article>
            <article className="highlight-card">
              <h3>Design responsivo</h3>
              <p>Layout adaptado para celular, tablet e desktop.</p>
            </article>
          </div>
        </section>

        <section id="sobre" className="section-card">
          <h2>Sobre</h2>
          <p>
            Profissional com experiência em áreas administrativa, comercial e suporte de TI, com boa comunicação,
            organização e foco em resultados. Atualmente curso Análise e Desenvolvimento de Sistemas e busco
            consolidar carreira em tecnologia com atuação prática em desenvolvimento e dados.
          </p>
        </section>

        <section id="experiencia" className="section-card">
          <h2>Experiência</h2>
          <div className="stack-list">
            {experiences.map((experience) => (
              <article key={`${experience.role}-${experience.company}`} className="item-card">
                <header>
                  <h3>{experience.role}</h3>
                  <span>{experience.period}</span>
                </header>
                <p className="subtitle">{experience.company}</p>
                <p>{experience.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projetos" className="section-card">
          <h2>Projetos</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.name} className="project-card">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <p className="subtitle">Tecnologias: {project.tech}</p>
                <a href={project.link} target="_blank" rel="noreferrer">Ver projeto</a>
              </article>
            ))}
          </div>
        </section>

        <section id="habilidades" className="section-card">
          <h2>Habilidades</h2>
          <ul className="chips">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section className="section-card education-contact-grid">
          <article>
            <h2>Formação e Certificações</h2>
            <ul className="plain-list">
              <li>Análise e Desenvolvimento de Sistemas — Estácio (Jun 2024 a Jun 2026 · cursando)</li>
              <li>Certificação em Bombeiro Civil — GREME</li>
              <li>Certificação em NR35 — GREME</li>
              <li>Certificação em NR33 — GREME</li>
              <li>Certificação em Auxiliar Administrativo — SENAC</li>
            </ul>
          </article>
          <article id="contato">
            <h2>Contato</h2>
            <ul className="plain-list">
              <li>Email: <a href="mailto:wellersonmorais777@gmail.com">wellersonmorais777@gmail.com</a></li>
              <li>Telefone/WhatsApp: <a href="tel:+5585997190151">(85) 99719-0151</a></li>
              <li>GitHub: <a href="https://github.com/Wellerson-Frota" target="_blank" rel="noreferrer">@Wellerson-Frota</a></li>
              <li>Localização: Fortaleza, CE</li>
              <li>LinkedIn: <a href="https://www.linkedin.com/in/wellerson-moraes-682050235/" target="_blank" rel="noreferrer">wellerson-moraes-682050235</a></li>
            </ul>
          </article>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} Wellerson Moraes</p>
          <a href="#home">Voltar ao topo</a>
        </div>
      </footer>
    </>
  );
}