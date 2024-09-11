import React, { useState, useEffect } from 'react';
import { Container, Nav, HamburgerMenu } from './styles';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const sectionIds = [
      'Home',
      'sobre',
      'Habilidades',
      'portfólio',
      'contatos',
    ];
    const sections = sectionIds.map((id) => document.getElementById(id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '-150px 0px -50px 0px',
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    const handleScroll = () => {
      if (window.scrollY === 0) {
        setActiveSection('Home');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container>
      <Nav className={isOpen ? 'open' : ''}>
        <a
          href="#Home"
          onClick={() => {
            setActiveSection('Home');
            closeMenu();
          }}
          className={activeSection === 'Home' ? 'active' : ''}
        >
          Home
        </a>
        <a
          href="#sobre"
          onClick={() => {
            setActiveSection('sobre');
            closeMenu();
          }}
          className={activeSection === 'sobre' ? 'active' : ''}
        >
          Sobre
        </a>
        <a
          href="#Habilidades"
          onClick={() => {
            setActiveSection('Habilidades');
            closeMenu();
          }}
          className={activeSection === 'Habilidades' ? 'active' : ''}
        >
          Habilidades
        </a>
        <a
          href="#portfólio"
          onClick={() => {
            setActiveSection('portfólio');
            closeMenu();
          }}
          className={activeSection === 'portfólio' ? 'active' : ''}
        >
          Portfólio
        </a>
        <a
          href="#contatos"
          onClick={() => {
            setActiveSection('contatos');
            closeMenu();
          }}
          className={activeSection === 'contatos' ? 'active' : ''}
        >
          Contatos
        </a>
      </Nav>
      <HamburgerMenu onClick={toggleMenu} className={isOpen ? 'open' : ''}>
        <span></span>
        <span></span>
        <span></span>
      </HamburgerMenu>
    </Container>
  );
}

export default Header;
