import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard.jsx";

export default function Projects() {
  const [search, setSearch] = useState("");

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

  const filtered = projects.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="section">
      <h2>Projetos</h2>

      <input
        type="text"
        placeholder="Buscar projeto..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "8px 12px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          marginBottom: "20px",
          width: "100%",
          maxWidth: "400px",
        }}
      />

      {filtered.length > 0 ? (
        <div className="grid">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      ) : (
        <p style={{ marginTop: "20px", color: "#aaa" }}>
          Nenhum projeto localizado.
        </p>
      )}
    </section>
  );
}
