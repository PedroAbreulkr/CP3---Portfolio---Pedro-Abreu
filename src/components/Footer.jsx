import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer(){
  return (
    <footer>
      <div>© {new Date().getFullYear()} Pedro Abreu</div>
      <div style={{display:'flex',gap:12,alignItems:'center'}}>
        <a href="https://github.com/PedroAbreulkr" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/pedroaraujoabreu/" target="_blank" rel="noreferrer"><FaLinkedin/></a>
        <a href="mailto:pedroaraujolkr@gmail.com"><FaEnvelope/></a>
      </div>
    </footer>
  );
}
