import React, { Fragment } from "react";
import { Image, Header } from "semantic-ui-react";
import { Parallax } from "react-parallax";
import {
  StyledContainer,
  StyledDiv,
  Logos,
  MenuText,
  SeguLogo,
  LogoContainer,
  LogoTitle,
  PrimaryText,
  SecondaryText,
} from "./styles";
import ReactPlayer from "react-player";

const BigScreenText = () => {
  return (
    <Fragment>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={require("../../icons/Home/home.png")}
        bgImageAlt="the dog"
        strength={-200}
      >
        <LogoContainer>
          <SeguLogo src={require("../../icons/Home/Logov1.png")} />
          <LogoTitle>você seguro e satisfeito!</LogoTitle>
        </LogoContainer>
      </Parallax>
      <StyledContainer>
        <Image
          src={require("../../icons/Home/undraw_dev_focus_b9xo.png")}
          size="large"
          floated="left"
        />
        <PrimaryText>O que é o Segü?</PrimaryText>
        <SecondaryText>
          É uma ferramenta online de conexão entre interessados em seguros e
          corretores. Com a proposta de revolucionar esse mercado, a Segü
          interage com o público de forma lúdica e divertida e apresenta o
          perfil ideal de seguros.
        </SecondaryText>
      </StyledContainer>
      <StyledContainer>
        <Image
          src={require("../../icons/Home/undraw_all_the_data_h4ki.png")}
          size="large"
          floated="right"
        />
        <PrimaryText>Quem pode usar?</PrimaryText>
        <SecondaryText>
          Qualquer pessoa interessada em adquirir seguros, entender mais sobre
          seguros, pessoas que já tenham seguros e corretores!
        </SecondaryText>
      </StyledContainer>
      <StyledContainer>
        <Image
          src={require("../../icons/Home/undraw_statistic_chart_38b6.png")}
          size="large"
          floated="left"
        />
        <PrimaryText>Como funciona?</PrimaryText>
        <SecondaryText>
          Para usar a Segü basta participar do Quiz de perguntas. No final, você
          receberá as indicações dos seguros ideais para o seu perfil. No caso
          do corretor, ele precisará fazer um cadastro na ferramenta para ter
          acesso às informações respondidas e assim oferecer o seguro mais
          adequado ao cliente.
        </SecondaryText>
      </StyledContainer>
      <StyledContainer>
        <StyledDiv>
          <ReactPlayer url="https://youtu.be/zFCpVfXtD2E" />
        </StyledDiv>
      </StyledContainer>
      <StyledContainer>
        <PrimaryText>Apoio</PrimaryText>
        <StyledDiv>
          <Logos src={require("../../icons/Home/shawee.jpeg")} />
          <Logos src={require("../../icons/Home/grid.jpg")} />
        </StyledDiv>
      </StyledContainer>
    </Fragment>
  );
};

export default BigScreenText;
