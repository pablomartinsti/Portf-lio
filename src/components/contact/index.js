import React from 'react';
import { Container } from './styles';
import email from '../../assets/email.png';
import whatsapp from '../../assets/whatsapp.png';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';

function Contact() {
  return (
    <Container id="contatos">
      <h1>
        Cont<span>atos</span>
      </h1>
      <div className="contatos">
        <div>
          <a
            href="https://api.whatsapp.com/send/?phone=5534996430942&text&type=phone_number&app_absent=0"
            aria-label="WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={whatsapp} alt="WhatsApp" />
          </a>
          <p>(34) 99643-0942</p>
        </div>

        <div>
          <a
            href="mailto:pablomartinsti@outlook.com"
            aria-label="Email"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={email} alt="Email" />
          </a>
          <p>pablomartinsti@outlook.com</p>
        </div>

        <div>
          <a
            href="https://github.com/pablomartinsti"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="GitHub" />
          </a>
          <p>pablomartinsti</p>
        </div>

        <div>
          <a
            href="https://www.linkedin.com/in/pablo-ferreira-martins/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <p>pablo-ferreira-martins</p>
        </div>
      </div>
    </Container>
  );
}

export default Contact;
