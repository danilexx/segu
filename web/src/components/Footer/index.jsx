import React from "react";
import Mailchimp from "react-mailchimp-form";
import {
  Container,
  Section,
  Title,
  IconContainer,
  Content,
  Icon,
  IconDescription,
} from "./styles";

const Footer = () => (
  <Container>
    <Section>
      <Title>Acompanhe nossas redes sociais:</Title>
      <Content>
        <IconContainer>
          <Icon src="/assets/icons/instagram.svg" />
          <IconDescription>Instagram</IconDescription>
        </IconContainer>
        <IconContainer>
          <Icon src="/assets/icons/facebook.svg" />
          <IconDescription>Facebook</IconDescription>
        </IconContainer>
      </Content>
    </Section>
    <Section>
      <Title>Assinar Newsletter:</Title>
      <Content>
        {/* <MailchipContainer></MailchipContainer> */}
        <Mailchimp
          action="https://gmail.us4.list-manage.com/subscribe/post?u=ee9c5bed6b557deb28882c39b&amp;id=aa377ea68d"
          fields={[
            {
              name: "EMAIL",
              placeholder: "Email",
              type: "email",
              required: true,
            },
          ]}
          messages={{
            sending: "Enviando...",
            success: "Obrigado por sua inscrição!",
            error: "Um erro ocorreu.",
            empty: "Você devê escrever um email.",
            duplicate: "Email Duplicado",
            button: "Assinar",
          }}
          // Add a personalized class
          className="mailchip"
        />
        {/* <Form>
          <Input name="email" label="Email" />
          <Sign type="submit">Assinar</Sign>
        </Form> */}
      </Content>
    </Section>
  </Container>
);

export default Footer;
