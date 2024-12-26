import React, { useEffect, useState } from 'react';
import { Projects, Container, Section } from './styles';
import Modal from '../Modal';

import CodeBurger from '../../assets/home.png';
import DevBills from '../../assets/tela-home.png';
import portfolio from '../../assets/portfolio.png';
import cafeteria from '../../assets/cafeteria.png';
import mario from '../../assets/mario.png';
import calculadora from '../../assets/calculadora.png';
import sorteio from '../../assets/sorteio.png';
import Conversor from '../../assets/Currency-Converter.png';
import Game from '../../assets/game.png';

function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const sections = document.querySelectorAll('.card');

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

  const main = [
    {
      image: DevBills,
      title: 'DevBill$',
      description: (
        <div>
          <p>
            O DevBill$ é um sistema financeiro desenvolvido para controle de
            receitas e despesas, permitindo que o usuário registre transações,
            organize categorias personalizadas e acompanhe sua evolução
            financeira através de gráficos interativos. O sistema é totalmente
            responsivo, oferecendo uma experiência consistente em desktops,
            tablets e celulares.
          </p>

          <p>Tecnologias Utilizadas</p>
          <ul>
            <li>Frontend: React.js, TypeScript, CSS Moderno</li>
            <li>Backend: Node.js com Express, MongoDB (Atlas), JWT</li>
            <li>Hospedagem: Vercel (Frontend), Render (Backend)</li>
          </ul>
        </div>
      ),
      link: (
        <div className="links">
          <a
            href="https://devbills-front-lb1o68row-pablo-ferreira-martins-projects.vercel.app"
            className="link-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Acessar deploy
          </a>
          <a
            href="https://github.com/pablomartinsti/devbills-front"
            className="link-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Frontend
          </a>
          <a
            href="https://github.com/pablomartinsti/devbills-api"
            className="link-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Backend
          </a>
          <a
            href="https://www.linkedin.com/posts/pablo-ferreira-martins_nodejs-react-typescript-activity-7277336975555121152-No0s?utm_source=share&utm_medium=member_desktop"
            className="link-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver post no LinkedIn
          </a>
        </div>
      ),
    },

    {
      image: CodeBurger,
      title: 'Code Burger',
      description: (
        <div>
          <p>
            O CodeBurger é um sistema desenvolvido para otimizar o processo de
            gestão de pedidos em hamburguerias. Com uma interface intuitiva, o
            usuário pode navegar pelas categorias de produtos, adicionar itens
            ao carrinho e concluir pedidos. O sistema oferece uma área
            administrativa onde o administrador pode gerenciar os produtos
            disponíveis e atualizar o status dos pedidos em tempo real.
          </p>

          <p>Tecnologias Utilizadas</p>
          <ul>
            <li>Frontend React.js, Styled-Components, Axios</li>
            <li>
              Backend Node.js com Express, Sequelize, PostgreSQL, MongoDB.
            </li>
          </ul>
        </div>
      ),
      link: (
        <div className="links">
          <a
            href="https://dev-burger-frontend.vercel.app/"
            className="link-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Acessar deploy
          </a>
          <a
            href="https://github.com/pablomartinsti/devBurger-Frontend"
            className="link-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Frontend
          </a>
          <a
            href="https://github.com/pablomartinsti/devBurger-Backend"
            className="link-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Backend
          </a>
          <a
            href="https://www.linkedin.com/posts/pablo-ferreira-martins_desenvolvimentoweb-fullstack-reactjs-activity-7237520722946867201-rCdd?utm_source=share&utm_medium=member_desktop"
            className="link-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver post no LinkedIn
          </a>
        </div>
      ),
    },
    {
      image: portfolio,
      title: 'Portfólio - Pablo Ferreira Martins',
      description: (
        <div>
          <p>
            Este portfólio foi criado com foco na apresentação dos meus projetos
            como desenvolvedor Full Stack. A interface é totalmente responsiva,
            garantindo uma experiência fluida em todos os dispositivos. O design
            foi pensado para ser simples e intuitivo, com foco na performance e
            usabilidade. O código segue boas práticas de desenvolvimento,
            refletindo a qualidade dos projetos que realizo.
          </p>

          <p>Tecnologias Utilizadas</p>
          <ul>
            <li>React.js, Styled-Components,</li>
          </ul>
        </div>
      ),
      link: (
        <div className="links">
          <a
            href="https://portfolio-xi-one-79.vercel.app/"
            className="link-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Acessar deploy
          </a>
          <a
            href="https://github.com/pablomartinsti/Portfolio"
            className="link-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Acessar GitHub
          </a>

          <a
            href="https://www.linkedin.com/posts/pablo-ferreira-martins_desenvolvimentoweb-react-portfaejlio-activity-7239708838902349824-Rom6?utm_source=share&utm_medium=member_desktop"
            className="link-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver post no LinkedIn
          </a>
        </div>
      ),
    },
  ];

  const projects = [
    {
      image: cafeteria,
      title: 'Cafeteria Martins',
      description: (
        <div>
          <p>
            A Cafeteria Martins é uma página web desenvolvida para uma cafeteria
            fictícia, focada em oferecer uma experiência visual agradável e
            moderna. O site é completamente responsivo, garantindo uma navegação
            fluida em diferentes dispositivos, desde desktops até smartphones.
          </p>

          <p>Tecnologias Utilizadas</p>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Flexbox</li>
            <li>JavaScript</li>
          </ul>
        </div>
      ),
      link: (
        <div className="links">
          <a
            href="https://pablomartinsti.github.io/cafeteria-martins/"
            className="link-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Acessar deploy
          </a>
          <a
            href="https://github.com/pablomartinsti/cafeteria-martins"
            className="link-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Acessar GitHub
          </a>
          <a
            href="https://www.linkedin.com/feed/update/urn:li:activity:7235011516029169664/"
            className="link-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver post no LinkedIn
          </a>
        </div>
      ),
    },
    {
      image: mario,
      title: 'Mario Landing Page',
      description: (
        <div>
          <p>
            O projeto Mario é uma landing page desenvolvida para promover
            serviços ou produtos específicos, com um design clean e focado na
            conversão de leads. A página inclui um formulário simples para
            captura de informações de contato, bem como um ícone integrado que
            direciona os usuários diretamente para o WhatsApp, facilitando a
            comunicação imediata com potenciais clientes.
          </p>

          <h3>Tecnologias Utilizadas:</h3>
          <ul>
            <li>HTML5:</li>
            <li>CSS3</li>
            <li>JavaScript</li>
          </ul>
        </div>
      ),
      link: (
        <div className="links">
          <a
            href="https://pablomartinsti.github.io/mario/"
            className="link-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Acessar deploy
          </a>
          <a
            href="https://github.com/pablomartinsti/mario"
            className="link-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Acessar GitHub
          </a>
          <a
            href="https://www.linkedin.com/feed/update/urn:li:activity:7235315334780510208/"
            className="link-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver post no LinkedIn
          </a>
        </div>
      ),
    },

    {
      image: sorteio,
      title: 'Sorteio',
      description: (
        <div>
          <p>
            O Projeto Sorteio é uma aplicação que realiza o sorteio de um número
            aleatório dentro de um intervalo definido pelo usuário. Com um
            design simples e funcional, a aplicação permite que os usuários
            insiram um número inicial e final, e então sorteia um número
            aleatório entre esses valores. A interface é intuitiva, tornando o
            processo de sorteio rápido e fácil.
          </p>

          <h3>Tecnologias Utilizadas:</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
          </ul>
        </div>
      ),
      link: (
        <div className="links">
          <a
            href="https://pablomartinsti.github.io/Projeto-Sorteio/"
            className="link-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Acessar deploy
          </a>
          <a
            href="https://github.com/pablomartinsti/Projeto-Sorteio"
            className="link-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Acessar GitHub
          </a>
          <a
            href="https://www.linkedin.com/posts/pablo-ferreira-martins_desenvolvimentoweb-javascript-html5-activity-7236100862945746944-8Yli?utm_source=share&utm_medium=member_desktop"
            className="link-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver post no LinkedIn
          </a>
        </div>
      ),
    },
    {
      image: Conversor,
      title: 'Conversor de Moedas',
      description: (
        <div>
          <p>
            O Conversor de Moedas é uma aplicação web que permite a conversão de
            valores entre diferentes moedas de forma rápida e precisa.
            Utilizando uma API para obter taxas de câmbio atualizadas em tempo
            real, o usuário pode selecionar as moedas de origem e destino e
            obter o valor convertido instantaneamente. A interface é responsiva
            e foi desenvolvida com HTML5, CSS3 e JavaScript, garantindo uma
            experiência intuitiva em qualquer dispositivo.
          </p>

          <h3>Tecnologias Utilizadas:</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
          </ul>
        </div>
      ),
      link: (
        <div className="links">
          <a
            href="https://pablomartinsti.github.io/Currency-converter/"
            className="link-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Acessar deploy
          </a>
          <a
            href="https://github.com/pablomartinsti/Currency-converter"
            className="link-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Acessar GitHub
          </a>
          <a
            href="https://www.linkedin.com/posts/pablo-ferreira-martins_boa-tarde-pessoal-hoje-gostaria-de-compartilhar-activity-7206396960088432640-gPkl?utm_source=share&utm_medium=member_desktop"
            className="link-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver post no LinkedIn
          </a>
        </div>
      ),
    },
    {
      image: Game,
      title: 'JOKENPO',
      description: (
        <div>
          <p>
            O Jokenpô é um jogo clássico de Pedra, Papel e Tesoura desenvolvido
            em HTML, CSS e JavaScript. O jogo permite que o usuário jogue contra
            a máquina, que faz escolhas aleatórias. A interface simples e
            interativa proporciona uma experiência divertida e rápida, onde o
            resultado é exibido imediatamente após cada rodada. O projeto é uma
            demonstração prática de habilidades em manipulação do DOM e lógica
            de programação em JavaScript.
          </p>

          <h3>Tecnologias Utilizadas:</h3>
          <ul>
            <li>HTML5 </li>
            <li>CSS3</li>
            <li>JavaScript</li>
          </ul>
        </div>
      ),
      link: (
        <div className="links">
          <a
            href="https://pablomartinsti.github.io/Jokenp-/"
            className="link-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Acessar deploy
          </a>
          <a
            href="https://github.com/pablomartinsti/Jokenp-"
            className="link-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Acessar GitHub
          </a>
          <a
            href="https://www.linkedin.com/posts/pablo-ferreira-martins_desenvolvimentoweb-javascript-html5-activity-7236335246151999488-8ait?utm_source=share&utm_medium=member_desktop"
            className="link-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver post no LinkedIn
          </a>
        </div>
      ),
    },
    {
      image: calculadora,
      title: 'calculadora',
      description: (
        <div>
          <p>
            Este projeto é uma calculadora simples, desenvolvida utilizando
            HTML, CSS e JavaScript. A calculadora permite realizar operações
            básicas como adição, subtração, multiplicação e divisão. Ela possui
            uma interface amigável, responsiva, e foi projetada para funcionar
            de maneira eficiente tanto em desktops quanto em dispositivos
            móveis.
          </p>

          <h3>Tecnologias Utilizadas:</h3>
          <ul>
            <li>HTML5 </li>
            <li>CSS3</li>
            <li>JavaScript</li>
          </ul>
        </div>
      ),
      link: (
        <div className="links">
          <a
            href="https://pablomartinsti.github.io/Calculadora/"
            className="link-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Acessar deploy
          </a>
          <a
            href="https://github.com/pablomartinsti/Calculadora"
            className="link-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Acessar GitHub
          </a>
          <a
            href="https://www.linkedin.com/feed/update/urn:li:activity:7209632273833373696/"
            className="link-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver post no LinkedIn
          </a>
        </div>
      ),
    },
  ];

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <Container id="portfólio">
      <h1>
        Port<span>fólio</span>
      </h1>
      <h2>Destaques</h2>

      <Projects>
        {main.map((project, index) => (
          <div
            key={index}
            className="card"
            onClick={() => handleOpenModal(project)}
          >
            <img src={project.image} alt={project.title} />
            <div className="ver-mais">
              <button onClick={() => handleOpenModal(project)}>Ver Mais</button>
            </div>
          </div>
        ))}
      </Projects>

      <h2>Projetos</h2>

      <Section>
        {projects.map((project, index) => (
          <div
            key={index}
            className="card"
            onClick={() => handleOpenModal(project)}
          >
            <img src={project.image} alt={project.title} />
            <div className="ver-mais">
              <button onClick={() => handleOpenModal(project)}>Ver Mais</button>
            </div>
          </div>
        ))}
      </Section>

      {selectedProject && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          image={selectedProject.image}
          title={selectedProject.title}
          description={selectedProject.description}
          link={selectedProject.link}
          repo={selectedProject.repo}
          linkedin={selectedProject.linkedin}
        />
      )}
    </Container>
  );
}

export default Portfolio;
