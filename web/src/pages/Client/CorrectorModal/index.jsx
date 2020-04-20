import React from "react";
import { useLockBodyScroll } from "react-use";
import {
  Container,
  Avatar,
  Wrapper,
  Description,
  Row,
  Contact,
  ContactCard,
  Icon,
  ContactTitle,
  ContactHeader,
  Close,
} from "./styles";
import { Photo, Enterprise, Name } from "-/components/CorrectorCard/styles";

const CorrectorModal = ({ isOpen, setter }) => {
  useLockBodyScroll(isOpen);
  const handleClose = () => {
    setter(false);
  };
  if (!isOpen) {
    return null;
  }
  return (
    <Wrapper>
      <Container>
        <Close onClick={handleClose} />
        <Avatar>
          <Photo />
          <Name>Fabricio Oliveira</Name>
          <Enterprise>Corredoria</Enterprise>
        </Avatar>
        <Description>
          <Row>Corretor Generalista</Row>
          <Row>Tipos de Seguros: Vida, Auto</Row>
        </Description>
        <ContactHeader>Contato</ContactHeader>
        <Contact>
          <ContactCard>
            <Icon src="/assets/icons/email.svg" />
            <ContactTitle>e-mail</ContactTitle>
          </ContactCard>
          <ContactCard>
            <Icon src="/assets/icons/zap.svg" />
            <ContactTitle>WhatsApp</ContactTitle>
          </ContactCard>
        </Contact>
      </Container>
    </Wrapper>
  );
};

export default CorrectorModal;
