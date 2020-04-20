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

export const Selects = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  .react-select {
    flex: 1;
    margin-right: 1rem;
    .react-select__control {
      cursor: pointer !important;
      border-radius: 10px;
      border: none;
      padding: 1rem;
      font-size: 2rem;
      background-color: #e6e6e6;
    }
    &:last-of-type {
      margin-right: 0;
    }
  }
`;
