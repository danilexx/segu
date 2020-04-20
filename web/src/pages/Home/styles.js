import styled from "styled-components";

import { Container } from "semantic-ui-react";

export const StyledContainer = styled(Container)`
  max-width: 50%;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: auto;
`;

export const Logos = styled.img`
  width: 25%;
`;

export const InitialWelcome = styled.img`
  height: 100%;
`;

export const SeguLogo = styled.img`
  width: 30%;
  margin-bottom: -60px;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 600px;
  margin-left: 64px;
  align-items: flex-start;
  justify-content: center;
`;

export const LogoTitle = styled.p`
  font-size: 7rem;
  font-weight: bolder;
  color: white;
  margin-left: 48px;
`;

export const PrimaryText = styled.p`
  font-size: 2.5rem;
  text-align: center;
  padding: 20px;
  font-weight: bolder;
`;

export const SecondaryText = styled.p`
  font-size: 2.2rem;
  text-align: center;
  padding: 20px;
`;
