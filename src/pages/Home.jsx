import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(){
  return (
    <section className="hero">
      <div className="hero-left">
        <p className="hi">HI, I AM</p>
        <h1 className="title">Pedro Abreu</h1>
        <p className="lead">Estudante De Engenharia de Software | Curioso por natureza, estou sempre pulando de
um projeto pro outro, entre códigos, cortes e conceitos.</p>
        <div className="row">
          <Link className="button primary" to="/projects">Ver Projetos</Link>
          <a className="button" href="/Pedro_Abreu_CV.pdf" download>Download CV</a>
        </div>
      </div>
      <div className="mac-window">
        <div className="window-top">
          <div className="dot red"></div>
          <div className="dot yellow"></div>
          <div className="dot green"></div>
        </div>
        <div className="window-body">
  <img
    src="https://assets.dio.me/o9pdzu0gpK-PRnXRg7FAei3tRG6yJ9wwI-__WyMLRIE/f:webp/q:80/L2FydGljbGVzL2NvdmVyLzhkNWRjOGVhLWYwMGItNGQ4NS1hNWI4LWQ0ZjM4ZGMzNTgzOS5qcGc"
    alt="Preview do projeto"
    style={{ width: '100%', borderRadius: '12px' }}
  />
</div>

      </div>
    </section>
  );
}
