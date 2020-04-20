import React from "react";
import {
  Container,
  Photo,
  Info,
  Name,
  Enterprise,
  KnowMoreButton,
} from "./styles";

export { CorrectorCards } from "./styles";
const CorrectorCard = ({ handle, corrector }) => {
  const handleSomething = () => {
    if (handle) {
      handle();
    }
  };
  return (
    <Container>
      <Photo />
      <Info>
        <Name>{corrector.name}</Name>
        <Enterprise>Corretora F&S</Enterprise>
        <KnowMoreButton onClick={handleSomething}>saber mais</KnowMoreButton>
      </Info>
    </Container>
  );
};

export default CorrectorCard;
