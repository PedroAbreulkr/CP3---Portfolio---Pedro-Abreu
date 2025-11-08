import React from "react";
import { useParams, Link } from "react-router-dom";

export default function ProjectDetails() {
  const { id } = useParams();

  const projects = [
    {
      id: 1,
      name: "Web-Dev-CP1-2-Semestre",
      description: "Futebol Feminino Cards — Portal de Gerenciamento de Jogadoras",
      url: "https://github.com/PedroAbreulkr/Web-Dev-CP1-2-Semestre",
    },
    {
      id: 2,
      name: "portfolio-pedro",
      description: "Meu portfólio pessoal com visual macOS e integração com GitHub.",
      url: "https://github.com/pedroaraujolkr",
    },
    {
      id: 3,
      name: "floodguard-tech",
      description: "Projeto escolar sobre monitoramento de enchentes e evacuação.",
      url: "https://github.com/pedroaraujolkr/floodguard-tech",
    },
  ];

  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <section className="section">
        <h2>Projeto não encontrado</h2>
        <Link to="/projects" className="button">
          Voltar
        </Link>
      </section>
    );
  }

  return (
    <section className="section">
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <a
        className="button"
        href={project.url}
        target="_blank"
        rel="noreferrer"
      >
        Ver no GitHub
      </a>
      <br />
      <Link to="/projects" className="button" style={{ marginTop: "10px" }}>
        Voltar
      </Link>
    </section>
  );
}
