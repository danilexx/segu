import styled from "styled-components";

export const ProfilezationImage = styled.img.attrs({
  src: "/assets/imgs/love.svg",
})`
  margin: 2rem auto !important;
  width: 30rem;
  display: block;
`;

export const Explanation = styled.p`
  font-size: 2rem;
  margin: 1rem auto !important;
  padding: 0 2rem;
  text-align: center;
`;

export const LeftExplanation = styled(Explanation)`
  text-align: left;
`;

export const Title = styled.p`
  font-size: 2.2rem;
  font-weight: bold;
  margin: 1rem auto;
  text-align: center;
  padding: 0 2rem;
`;

export const ChartContainer = styled.div`
  display: flex;
  width: 80%;
  min-height: 25rem;
  height: fit-content;
  margin: 3rem auto;
`;

export const SubTitle = styled.p`
  font-size: 2rem;
  font-weight: bold;
  margin: 1rem auto;
  text-align: left;
  padding: 0 2rem;
`;
