import React, { useEffect } from 'react';
import { Container, Section } from './styles';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import java from '../../assets/javascript.png';
import typeScript from '../../assets/typescript.png';
import react from '../../assets/react.png';
import node from '../../assets/node-js.png';
import express from '../../assets/express.png';
import postgres from '../../assets/postgres.png';
import mongodb from '../../assets/mongodb.png';
import git from '../../assets/git.png';
import github from '../../assets/github.png';
import docker from '../../assets/docker.png';
import figma from '../../assets/figma.png';
import chatgpt from '../../assets/chatbot.png';

function Skills() {
  useEffect(() => {
    const sections = document.querySelectorAll('.skills');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          sections.forEach((section) => section.classList.add('visible'));
        }
      });
    });

    sections.forEach((section) => {
      observer.observe(section);
    });
  }, []);

  return (
    <Container id="Habilidades">
      <h1>
        Habili<span>dades</span>
      </h1>
      <Section>
        <div className="skills">
          <div className="skills-inner">
            <div className="skills-front">
              <img src={html} alt="html" />
              <h6>HTML</h6>
            </div>
            <div className="skills-back">
              <p>
                Estruturação de conteúdo e marcação semântica para páginas web.
              </p>
            </div>
          </div>
        </div>

        <div className="skills">
          <div className="skills-inner">
            <div className="skills-front">
              <img src={css} alt="css" />
              <h6>CSS</h6>
            </div>
            <div className="skills-back">
              <p>
                Estilização e layout visual para criar páginas atraentes e
                responsivas.
              </p>
            </div>
          </div>
        </div>

        <div className="skills">
          <div className="skills-inner">
            <div className="skills-front">
              <img src={java} alt="java" />
              <h6>JAVASCRIPT</h6>
            </div>
            <div className="skills-back">
              <p>Interatividade e lógica no lado do cliente.</p>
            </div>
          </div>
        </div>
        <div className="skills">
          <div className="skills-inner">
            <div className="skills-front">
              <img src={typeScript} alt="typeScript" />
              <h6>TYPESCRIPT</h6>
            </div>
            <div className="skills-back">
              <p>
                Tipagem estática para mais segurança e eficiência no código.
              </p>
            </div>
          </div>
        </div>

        <div className="skills">
          <div className="skills-inner">
            <div className="skills-front">
              <img src={react} alt="react" />
              <h6>REACT</h6>
            </div>
            <div className="skills-back">
              <p>
                Criação de interfaces de usuário dinâmicas e componentes
                reutilizáveis.
              </p>
            </div>
          </div>
        </div>

        <div className="skills">
          <div className="skills-inner">
            <div className="skills-front">
              <img src={node} alt="node" />
              <h6>NODE.JS</h6>
            </div>
            <div className="skills-back">
              <p>Desenvolvimento de servidores e APIs RESTful.</p>
            </div>
          </div>
        </div>
        <div className="skills">
          <div className="skills-inner">
            <div className="skills-front">
              <img src={express} alt="express" />
              <h6>EXPRESS</h6>
            </div>
            <div className="skills-back">
              <p>Roteamento simplificado para APIs rápidas e robustas.</p>
            </div>
          </div>
        </div>

        <div className="skills">
          <div className="skills-inner">
            <div className="skills-front">
              <img src={postgres} alt="postgres" />
              <h6>POSTGRES</h6>
            </div>
            <div className="skills-back">
              <p>Banco de dados relacional, manipulação de dados com SQL.</p>
            </div>
          </div>
        </div>

        <div className="skills">
          <div className="skills-inner">
            <div className="skills-front">
              <img src={mongodb} alt="mongodb" />
              <h6>MONGODB</h6>
            </div>
            <div className="skills-back">
              <p>Banco de dados NoSQL para dados não estruturados.</p>
            </div>
          </div>
        </div>

        <div className="skills">
          <div className="skills-inner">
            <div className="skills-front">
              <img src={git} alt="git" />
              <h6>GIT</h6>
            </div>
            <div className="skills-back">
              <p>Controle de versão para rastreamento de mudanças no código.</p>
            </div>
          </div>
        </div>

        <div className="skills">
          <div className="skills-inner">
            <div className="skills-front">
              <img src={github} alt="github" />
              <h6>GITHUB</h6>
            </div>
            <div className="skills-back">
              <p>
                Plataforma para hospedagem e colaboração em repositórios Git.
              </p>
            </div>
          </div>
        </div>

        <div className="skills">
          <div className="skills-inner">
            <div className="skills-front">
              <img src={docker} alt="docker" />
              <h6>DOCKER</h6>
            </div>
            <div className="skills-back">
              <p>Containerização de aplicações para ambientes consistentes.</p>
            </div>
          </div>
        </div>

        <div className="skills">
          <div className="skills-inner">
            <div className="skills-front">
              <img src={figma} alt="figma" />
              <h6>FIGMA</h6>
            </div>
            <div className="skills-back">
              <p>
                Ferramenta de design colaborativo para criar interfaces e
                protótipos digitais.
              </p>
            </div>
          </div>
        </div>

        <div className="skills">
          <div className="skills-inner">
            <div className="skills-front">
              <img src={chatgpt} alt="chatgpt" />
              <h6>CHATGPT</h6>
            </div>
            <div className="skills-back">
              <p>
                IA para gerar textos, responder perguntas e auxiliar em tarefas
                diversas.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
}

export default Skills;
