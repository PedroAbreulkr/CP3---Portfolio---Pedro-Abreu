import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <div className="card">
      <h3 style={{ margin: "0 0 6px" }}>{project.name || project.titulo}</h3>
      <p style={{ color: "#9fb3c8", margin: 0 }}>
        {project.description || project.descricao || "Sem descrição"}
      </p>

      <div style={{ marginTop: 10, display: "flex", gap: "8px" }}>
        <Link className="button" to={`/projects/${project.id}`}>
          Detalhes
        </Link>
        <a
          className="button"
          href={project.url || "#"}
          target="_blank"
          rel="noreferrer"
        >
          Ver no GitHub
        </a>
      </div>
    </div>
  );
}
