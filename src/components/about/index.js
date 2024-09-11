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
        Desenvolvedor Full Stack em transição de carreira, apaixonado por
        tecnologia e em constante evolução. Com conhecimentos em HTML, CSS,
        JavaScript, React.js, Node.js, PostgreSQL e MongoDB, venho aplicando
        minhas habilidades para criar soluções digitais focadas em usabilidade e
        escalabilidade. Tenho experiência na construção de interfaces intuitivas
        e sistemas funcionais que atendem às necessidades do usuário. No projeto
        DevBurger - Sistema de Gestão para Hamburguerias, atuei em todas as
        etapas, desenvolvendo tanto o front-end quanto o back-end, desde a
        concepção da interface até a implementação do sistema de gerenciamento
        de pedidos, com deploy em plataformas como Vercel e Render. Outros
        projetos estão disponíveis no meu GitHub, demonstrando meu progresso e
        comprometimento com o aprendizado contínuo. Estou em busca de
        oportunidades para aplicar e expandir minhas habilidades, seja como
        freelancer, contratado ou em regime CLT/PJ. Acredito no poder da
        colaboração e estou sempre disposto a aprender e contribuir para
        projetos inovadores. Vamos trabalhar juntos para transformar ideias em
        realidade!
      </p>
    </Container>
  );
}

export default About;
