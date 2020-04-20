import React from "react";
import {
  Container,
  Info,
  Name,
  Enterprise,
  KnowMoreButton,
  Gender,
  PastInsegurances,
  CurrentInsegurances,
  About,
  InsurancePriceLimit,
  ProfissionalActivity,
  Income,
  Email,
  Dependents,
  HealthIssues,
} from "./styles";

export { ClientCards } from "./styles";
export const ClientCard = ({ handle }) => {
  const handleSomething = () => {
    if (handle) {
      handle();
    }
  };
  return (
    <Container>
      <Info>
        <Name>Fabricio Oliveira</Name>
        <ProfissionalActivity>Corretora F&S</ProfissionalActivity>
        <InsurancePriceLimit>R$1000</InsurancePriceLimit>
        <About>Blablabla</About>
        <Income>R$1000</Income>
        <CurrentInsegurances>Saúde</CurrentInsegurances>
        <PastInsegurances>Nop</PastInsegurances>
        <Gender>Female</Gender>
        <Email>bla@gmail.com</Email>
        <Dependents>1 filho</Dependents>
        <HealthIssues>Diabético</HealthIssues>
      </Info>
    </Container>
  );
};

export default ClientCard;
