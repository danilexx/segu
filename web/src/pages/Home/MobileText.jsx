import React, { Fragment } from "react";
import { StyledContainer, SecondaryText, Logos, StyledDiv } from "./styles";
import { Image, Header } from "semantic-ui-react";
import { Parallax, Background } from "react-parallax";
import { ClientCard, ClientCards } from "../../components/ClientCard";

const MobileText = () => {
  return (
    <Fragment>
      <Parallax blur={{ min: -15, max: 15 }} strength={-200}>
        <Background
          className="custom-bg"
          bgStyle={{ backgroundPosition: "right" }}
        >
          <img src={require("../../icons/Home/home.png")} alt="Segu" />
        </Background>
        <div style={{ height: "600px" }} />
      </Parallax>
      <StyledContainer text>
        <Image
          src={require("../../icons/Home/undraw_dev_focus_b9xo.png")}
          size="medium"
          centered
        />
        <Header as="h1" textAlign="center">
          O que é o segu?
        </Header>
        <SecondaryText>
          É uma ferramenta online de conexão entre interessados em seguros e
          corretores. Com a proposta de revolucionar esse mercado, a Segü
          interage com o público de forma lúdica e divertida e apresenta o
          perfil ideal de seguros.
        </SecondaryText>
      </StyledContainer>
      <StyledContainer text>
        <Image
          src={require("../../icons/Home/undraw_all_the_data_h4ki.png")}
          size="medium"
          centered
        />
        <Header as="h1" textAlign="center">
          Quem pode usar?
        </Header>
        <SecondaryText>
          Qualquer pessoa interessada em adquirir seguros, entender mais sobre
          seguros, pessoas que já tenham seguros e corretores!
        </SecondaryText>
      </StyledContainer>
      <StyledContainer text>
        <Image
          src={require("../../icons/Home/undraw_statistic_chart_38b6.png")}
          size="medium"
          centered
        />
        <Header as="h1" textAlign="center">
          Como funciona?
        </Header>
        <SecondaryText>
          Para usar a Segü basta participar do Quiz de perguntas. No final, você
          receberá as indicações dos seguros ideais para o seu perfil. No caso
          do corretor, ele precisará fazer um cadastro na ferramenta para ter
          acesso às informações respondidas e assim oferecer o seguro mais
          adequado ao cliente.
        </SecondaryText>
      </StyledContainer>
      <StyledContainer>
        <Header as="h1" textAlign="center">
          Apoio
        </Header>
        <StyledDiv>
          <Logos src={require("../../icons/Home/shawee.jpeg")} />
          <Logos src={require("../../icons/Home/grid.jpg")} />
        </StyledDiv>
      </StyledContainer>
    </Fragment>
  );
};

export default MobileText;
