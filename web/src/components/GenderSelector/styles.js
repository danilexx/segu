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

export const GenderCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const GenderCard = styled.div`
  background-color: ${(props) =>
    props.selected ? props.theme.secondary : "#DADADA"};
  color: white;
  font-size: 2rem;
  border-radius: 15px;
  flex: 1;
  max-width: calc(50% - 1rem);
  margin: 0.5rem 0.5rem;
  padding: 4rem 2rem;
  text-align: center;
  cursor: pointer;
  @media (min-width: 500px) {
    padding: 2.5rem 2rem;
  }
`;
