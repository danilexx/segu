import styled from "styled-components";
import { Photo, Enterprise } from "-/components/CorrectorCard/styles";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const Container = styled.div`
  position: relative;
  background-color: #e6e6e6;
  width: 90%;
  margin: 2rem auto;
  border-radius: 4px;
`;

export const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
  width: fit-content;
  justify-content: center;
  text-align: center !important;
  ${Enterprise} {
    margin-top: -0.2rem;
  }
  ${Photo} {
    margin: auto;
  }
`;

export const Description = styled.div`
  width: fit-content;
  margin: 0 auto;
`;

export const Row = styled.p`
  width: fit-content;
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ContactCard = styled.div`
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
`;

export const Icon = styled.img`
  width: 6rem;
  height: 6rem;
  margin: 0 auto;
  display: block;
`;

export const ContactTitle = styled.p`
  margin: 1rem auto !important;
  text-align: center !important;
  width: fit-content;
  display: block;
`;

export const ContactHeader = styled.p`
  font-size: 2rem;
  font-weight: bold;
  margin: 1rem auto;
  text-align: center;
  padding: 0 2rem;
`;

export const Close = styled.img.attrs({
  src: "/assets/icons/close.svg",
})`
  position: absolute;
  top: 0;
  right: 0;
  box-sizing: content-box;
  width: 4rem;
  height: 4rem;
  padding: 1rem;
  cursor: pointer;
`;
