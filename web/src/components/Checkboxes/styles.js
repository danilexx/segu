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

export const CheckBoxesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

export const LabelSection = styled.div`
  /* background-color: #e6e6e6; */
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  height: 5rem;
  cursor: pointer;
  flex: 1;
  width: 100%;
`;

export const Label = styled.p`
  flex: 1;
  font-size: 1.5rem;
  /* text-align: center; */
  color: black;
  padding: 0 1rem;
  height: fit-content;
`;

export const Checkbox = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.secondary};
  padding: 0.5rem;
  border-radius: 5px;
`;

export const CheckboxIcon = styled.img.attrs({
  src: "/assets/icons/whiteCheckBox.svg",
})`
  width: 100%;
  height: 100%;
`;

export const DiscreteInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
`;
