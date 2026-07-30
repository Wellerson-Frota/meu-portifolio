const skills = [
  'SQL',
  'C#',
  'Suporte de TI',
  'Sustentação',
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
    activities: [
      'Atendimento de chamados internos com foco em agilidade e resolução de problemas.',
      'Apoio em consultas e análise de dados em banco para suporte às equipes.',
      'Execução de rotinas técnicas com SQL e C#, contribuindo para estabilidade dos processos.',
      'Atuação na sustentação de sistemas de TI, garantindo a alta disponibilidade, resolução de incidentes e melhoria contínua dos ambientes em produção.'
    ]
  },
  {
    role: 'Apoio à Gestão',
    company: 'Mais Serviços · Fortaleza, CE',
    period: 'Jun 2023 — 2024',
    activities: [
      'Organização de processos administrativos e documentação interna.',
      'Elaboração e acompanhamento de relatórios para apoio à tomada de decisão.',
      'Controle de prazos e rotinas operacionais para melhorar a eficiência da equipe.'
    ]
  }
];

const projects = [
  {
    name: 'Portfólio Profissional',
    description: 'Currículo online com layout responsivo, navegação fluida e deploy contínuo no Vercel.',
    tech: 'React, Vite, CSS',
    link: 'https://github.com/Wellerson-Frota/meu-portifolio'
  },
  {
    name: 'Estudos em Programação Full Stack',
    description: 'Projetos práticos em andamento para evolução técnica em front-end, back-end e banco de dados.',
    tech: 'JavaScript, SQL, Node.js',
    link: 'https://github.com/Wellerson-Frota'
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
          <h1>Análise e Desenvolvimento de Sistemas.</h1>
          <p className="lead">
            Olá! Sou Wellerson Moraes. Tenho experiência com suporte de TI e processos administrativos,
            e hoje direciono minha carreira para tecnologia. Estou cursando ADS e estudando Full Stack,
            sempre buscando aprender, evoluir e gerar resultado com consistência.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contato">Falar comigo</a>
            <a className="btn btn-ghost" href="#projetos">Ver projetos</a>
          </div>
        </section>

        <section id="sobre" className="section-card">
          <h2>Sobre</h2>
          <p>
            Sou uma pessoa comprometida, comunicativa e com facilidade para trabalhar em equipe.
            Trago uma base forte de organização e atendimento, construída em experiências anteriores,
            e atualmente aplico isso na minha evolução em tecnologia. Meu objetivo é crescer na área de desenvolvimento,
            contribuindo com soluções práticas, aprendizado contínuo e responsabilidade no dia a dia.
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
                <ul className="experience-points">
                  {experience.activities.map((activity) => (
                    <li key={activity}>{activity}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projetos" className="section-card">
          <h2>Projetos</h2>
          <p className="subtitle">Projetos e estudos que refletem minha evolução prática.</p>
          <div className="project-list">
            {projects.map((project) => (
              <article key={project.name} className="project-item">
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <p className="subtitle">Tecnologias: {project.tech}</p>
                </div>
                <a className="project-link-icon" href={project.link} target="_blank" rel="noreferrer" aria-label={`Abrir ${project.name}`}>
                  <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                    <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3zm5 18H5V5h7V3H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7z" />
                  </svg>
                </a>
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
            <h2>Formação e Cursos</h2>
            <ul className="plain-list">
              <li>Curso de Auxiliar Administrativo — SENAC</li>
              <li>Análise e Desenvolvimento de Sistemas — Estácio (em andamento)</li>
              <li>Curso de Programação Full Stack — Infinity School — (em andamento) </li>
            </ul>
          </article>
          <article id="contato">
            <h2>Contato</h2>
                <div className="icon-links" aria-label="Links de contato">
              <a href="mailto:wellersonmorais777@gmail.com" target="_blank" rel="noreferrer" aria-label="Email">
                <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.24-8 5.34-8-5.34V6l8 5.33L20 6v2.24z" />
                </svg>
              </a>
              <a href="https://github.com/Wellerson-Frota" target="_blank" rel="noreferrer" aria-label="GitHub">
                <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                  <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.1.82-.26.82-.58v-2.26c-3.34.73-4.04-1.61-4.04-1.61a3.18 3.18 0 0 0-1.33-1.76c-1.09-.74.08-.73.08-.73a2.52 2.52 0 0 1 1.84 1.24 2.56 2.56 0 0 0 3.5 1 2.56 2.56 0 0 1 .76-1.6c-2.67-.3-5.47-1.33-5.47-5.93a4.64 4.64 0 0 1 1.24-3.22 4.3 4.3 0 0 1 .12-3.18s1-.33 3.3 1.23a11.48 11.48 0 0 1 6 0c2.28-1.56 3.29-1.23 3.29-1.23a4.3 4.3 0 0 1 .12 3.18 4.64 4.64 0 0 1 1.23 3.22c0 4.61-2.8 5.62-5.48 5.92a2.87 2.87 0 0 1 .82 2.22v3.29c0 .32.21.69.82.58A12 12 0 0 0 12 .5z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/wellerson-moraes-682050235/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM.5 8h4V24h-4V8zM8 8h3.83v2.2h.06c.53-1 1.83-2.2 3.77-2.2C19.4 8 24 10.4 24 17.1V24h-4v-6.1c0-2.9-.05-6.7-4.08-6.7-4.08 0-4.7 3.2-4.7 6.5V24H8V8z" />
                </svg>
              </a>
            </div>
            <p className="subtitle location">Fortaleza, CE</p>
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