import React from 'react';
import { Container, Section } from './styles';
import Header from '../../components/header';
import Start from '../../components/start';
import About from '../../components/about';
import Skills from '../../components/skills';
import Portfolio from '../../components/portfolio';
import Contact from '../../components/contact';

function Home() {
  return (
    <Container>
      <Header />

      <Section id="Home">
        <Start />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </Section>
    </Container>
  );
}

export default Home;
