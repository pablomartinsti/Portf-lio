import React from 'react';
import {
  Overlay,
  Container,
  CloseButton,
  Image,
  Description,
  Buttons,
  Section,
} from './styles';

const Modal = ({
  isOpen,
  onClose,
  image,
  title,
  description,
  link,
  repo,
  linkedin,
}) => {
  if (!isOpen) return null;

  return (
    <Overlay>
      <Container>
        <Section>
          <Image src={image} alt={title} />

          <Description>
            <CloseButton onClick={onClose}>×</CloseButton>
            <h2>{title}</h2>
            <div>{description}</div>
          </Description>
        </Section>
        <Buttons>{link}</Buttons>
      </Container>
    </Overlay>
  );
};

export default Modal;
