import React, { useEffect, useRef, useState } from 'react';
import { Container } from './styles';

function About() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <Container ref={containerRef} isVisible={isVisible} id="sobre">
      <h1>
        Sobre <span>Mim</span>
      </h1>

      <p>
        Desenvolvedor Full Stack com experiência em HTML, CSS, JavaScript,
        TypeScript, React.js, Node.js, PostgreSQL, MongoDB e Docker. Desenvolvo
        interfaces intuitivas e APIs escaláveis, com foco em boas práticas de
        programação e na experiência do usuário. No projeto CodeBurger – Sistema
        de Gestão para Hamburguerias, desenvolvi o front-end, back-end e
        implementei o deploy em plataformas como Vercel e Render, utilizando
        Node.js, Express, React, PostgreSQL e MongoDB.Outros projetos
        disponíveis no meu GitHub demonstram minha evolução e comprometimento
        com o desenvolvimento de software. Recentemente, finalizei um curso
        completo de programação Full Stack e estou matriculado em Engenharia de
        Software, com início em janeiro de 2025. Busco oportunidades para
        aplicar e expandir minhas habilidades, contribuindo com soluções
        inovadoras e colaborativas em projetos desafiadores.
      </p>
    </Container>
  );
}

export default About;
