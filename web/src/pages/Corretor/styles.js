import styled from "styled-components";
import { Button } from "semantic-ui-react";

export const Circle = styled.div`
  padding: 10px;
  margin: 20px;
  display: "inline-block";
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background-color: blueviolet;
`;

export const FormContainer = styled.div`
  width: 40%;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const AreaTitle = styled.p`
  font-size: 2.2rem;
  font-weight: bolder;
  margin: auto;
  text-align: center;
`;

export const FormImg = styled.img`
  width: 50%;
  display: block;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
`;

export const PrimaryButton = styled(Button)`
  &&& {
    width: 30%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    margin-bottom: 10px;
    font-size: 1.5rem;
    background-color: #ce0f4e;
    color: white;
  }
`;

export const SecondaryButton = styled(Button)`
  &&& {
    width: 50%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    margin-bottom: 50px;
    font-size: 1.5rem;
    background-color: #979797;
    color: white;
  }
`;
