import styled from "styled-components";

export const CorrectorCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 2rem;
`;

export const Container = styled.div`
  background-color: #e6e6e6;
  display: flex;
  flex-direction: row;
  padding: 1rem 2rem;
  flex: 1;
  margin: 1rem;
  min-width: calc(33% - 2rem);
  max-width: calc(33% - 2rem);

  @media (max-width: 900px) {
    min-width: calc(50% - 2rem);
    max-width: calc(50% - 2rem);
  }
  @media (max-width: 570px) {
    min-width: initial;
    max-width: initial;
  }
  border-radius: 10px;
`;

export const Photo = styled.img.attrs({
  src: "/assets/imgs/fabricio.png",
})`
  border-radius: 50%;
  width: 8rem;
  height: 8rem;
`;

export const Info = styled.div`
  margin: 0 1.5rem;
  flex: 1;
  text-align: center;
`;

export const Name = styled.p`
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
`;

export const Enterprise = styled.p`
  margin: 0.5rem 0;
  font-size: 1.8rem;
`;

export const KnowMoreButton = styled.button`
  background-color: ${(props) => props.theme.secondary};
  font-size: 2rem;
  color: white;
  border: none;
  padding: 1rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
`;
