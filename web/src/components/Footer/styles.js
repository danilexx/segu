import styled from "styled-components";

import { Form as BaseForm } from "@unform/web";

export const Container = styled.footer`
  width: 100%;
  background-color: #081845;
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;
  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

export const Section = styled.div`
  width: fit-content;
  margin: 0 auto;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: white;
  text-align: center;
  margin: 1rem auto !important;
`;

export const IconContainer = styled.div`
  margin: 0 2rem;
`;

export const Icon = styled.img``;

export const IconDescription = styled.p`
  color: white;
`;

export const Form = styled(BaseForm)`
  width: fit-content;
  label {
    color: white;
    text-align: center;
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  margin: 0 auto;
`;

export const Sign = styled.button`
  background-color: ${(props) => props.theme.secondary};
  border: none;
  color: white;
  font-size: 2rem;
  padding: 1rem 2rem;
  margin: 1rem auto;
  border-radius: 5px;
  display: block;
`;
