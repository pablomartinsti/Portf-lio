import React, { useState, useEffect } from 'react';
import { Container, Section, Text, Button } from './styles';
import whatsapp from '../../assets/whatsapp.png';
import foto from '../../assets/Design sem nome.png';

function Start() {
  const [text, setText] = useState('');
  const fullText = 'PABLO MARTINS';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;

      if (index === fullText.length) {
        setTimeout(() => {
          index = 0;
          setText('');
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Section>
        <Text className="text">
          <h2>Olá Meu Nome é </h2>
          <h1>{text}</h1>
          <h2> Developed Full Stack</h2>
          <Button className="button">
            <a
              href="/PabloFerreiraMartins.pdf"
              download="Pablo-Ferreira-Martins-Curriculo"
              className="download"
            >
              DOWNLOAD CV
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=5534996430942&text&type=phone_number&app_absent=0"
              aria-label="WhatsApp"
              className="contact"
            >
              CONTATO
              <img className="whatsapp" src={whatsapp} alt="logo-whatsapp" />
            </a>
          </Button>
        </Text>
        <div className="foto">
          <img src={foto} alt="foto perfil" />
        </div>
      </Section>
    </Container>
  );
}

export default Start;
