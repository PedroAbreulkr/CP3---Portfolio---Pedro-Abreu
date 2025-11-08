import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nome: ${form.name}\nE-mail: ${form.email}\nMensagem: ${form.message}`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-section">
      <div className="contact-card">
        <h2>Entre em Contato</h2>
        <p>Preencha o formulário abaixo para me enviar uma mensagem:</p>

        <form onSubmit={handleSubmit} className="contact-form">
          <label>Nome</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Digite seu nome"
            required
          />

          <label>E-mail</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Digite seu e-mail"
            required
          />

          <label>Mensagem</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Digite sua mensagem"
            required
          ></textarea>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
}
