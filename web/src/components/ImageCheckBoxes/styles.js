import styled from "styled-components";

export const Container = styled.div`
  /* padding: 0 1rem; */
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
`;

export const StyledLabel = styled.label`
  font-size: 1.8rem;
  color: black;
  width: 100%;
  text-align: left;
  margin: 0.8rem 0.5rem;
`;

export const ErrorMessage = styled.span`
  color: red;
  margin: 0.5rem;
  font-size: 1.5rem;
  font-family: Roboto;
  text-transform: capitalize;
`;

export const Images = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ImageContainer = styled.div`
  border-radius: 15px;
  flex: 1;
  margin: 0.5rem 0.5rem;
  /* padding: 5rem 2rem; */
  /* width: fit-content; */
  min-width: calc(33% - 1rem);
  max-width: calc(33% - 1rem);
  cursor: pointer;
  background-color: white;
  @media (max-width: 768px) {
    min-width: calc(50% - 1rem);
    max-width: calc(50% - 1rem);
  }
  @media (max-width: 460px) {
    min-width: 100%;
    max-width: 100%;
  }
`;

export const Image = styled.img`
  width: auto;
  margin: 0 auto;
  display: block;
  height: 15rem;
`;

export const LabelSection = styled.div`
  background-color: #e6e6e6;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  height: 5rem;
`;

export const Label = styled.p`
  flex: 1;
  font-size: 1.5rem;
  text-align: center;
  padding: 0 0.5rem;
  height: fit-content;
`;

export const Checkbox = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 0.5rem;
`;

export const CheckboxIcon = styled.img.attrs({
  src: "/assets/icons/checkbox.svg",
})`
  width: 100%;
  height: 100%;
`;
