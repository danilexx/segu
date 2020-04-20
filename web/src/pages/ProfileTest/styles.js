import styled from "styled-components";
import { Form as BaseForm } from "@unform/web";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;
`;

export const ChallengeImg = styled.img.attrs({
  src: "/assets/test/challenge.svg",
})`
  margin: 2rem auto !important;
  display: block;
`;

export const ChallengeExplanation = styled.p`
  font-size: 2rem;
  margin: 1rem auto;
  padding: 0 2rem;
  text-align: center;
`;

export const ChallengeTitle = styled.p`
  font-size: 2.2rem;
  font-weight: bolder;
  margin: 1rem auto;
  padding: 0 2rem;
`;

export const Form = styled(BaseForm)`
  padding: 0 2rem;
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.secondary};
  border-radius: 5px;
  color: white;
  border: none;
  font-size: 2rem;
  padding: 1rem 2rem;
  margin: 2rem auto;
  display: block;
  cursor: pointer;
`;

export const PageIndicator = styled.p`
  font-size: 2.5rem;
  color: ${(props) => props.theme.secondary};
  margin: 2rem auto !important;
  font-weight: bold;
`;
