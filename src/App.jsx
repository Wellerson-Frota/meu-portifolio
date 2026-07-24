export default function App() {
  return (
    <>
      <header className="site-header">
        <div className="container">
          <h1 className="name">Seu Nome</h1>
          <nav>
            <a href="#home">Home</a>
            <a href="#sobre">Sobre</a>
            <a href="#projetos">Projetos</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>
      </header>
      <main className="container">
        <section id="home" className="hero">
          <h2>Olá, eu sou Seu Nome.</h2>
          <p>Desenvolvedor(a) — construindo coisas legais com web.</p>
          <p><a className="btn" href="#contato">Me contate</a></p>
        </section>

        <section id="sobre">
          <h3>Sobre</h3>
          <p>Breve resumo profissional. Tecnologias: HTML, CSS, JavaScript, React, Vite.</p>
        </section>

        <section id="projetos">
          <h3>Projetos</h3>
          <ul>
            <li><strong>Projeto A</strong> — descrição curta. <a href="#">ver</a></li>
            <li><strong>Projeto B</strong> — descrição curta. <a href="#">ver</a></li>
          </ul>
        </section>

        <section id="contato">
          <h3>Contato</h3>
          <p>Email: <a href="mailto:seu.email@exemplo.com">seu.email@exemplo.com</a></p>
          <p>GitHub: <a href="https://github.com/seu-usuario">@seu-usuario</a></p>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">© Seu Nome — <a href="#">Currículo</a></div>
      </footer>
    </>
  );
}