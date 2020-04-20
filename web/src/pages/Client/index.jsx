import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import {
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  RadarChart,
} from "recharts";
import { useToggle } from "react-use";
import { ThemeContext } from "styled-components";
import Column from "-/components/Column";
import {
  ProfilezationImage,
  Title,
  Explanation,
  ChartContainer,
  SubTitle,
  LeftExplanation,
} from "./styles";
import CorrectorCard, { CorrectorCards } from "-/components/CorrectorCard";
import CorrectorModal from "./CorrectorModal";

const data = [
  {
    subject: "Vida",
    A: 80,
    fullMark: 100,
  },
  {
    subject: "Automóvel",
    A: 10,
    fullMark: 100,
  },
  {
    subject: "Celular",
    A: 42,
    fullMark: 100,
  },
  {
    subject: "Saúde",
    A: 55,
    fullMark: 100,
  },
  {
    subject: "Residencial",
    A: 15,
    fullMark: 100,
  },
  {
    subject: "Viagem",
    A: 50,
    fullMark: 100,
  },
];
const Chart = () => {
  const { secondary } = useContext(ThemeContext);
  return (
    <ChartContainer>
      <ResponsiveContainer
        width="100%"
        maxHeight={500}
        minHeight={200}
        height="100%"
      >
        <RadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar
            name="person"
            dataKey="A"
            stroke={secondary}
            fill={secondary}
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

const Client = () => {
  const { id } = useParams();
  const [isOpen, toggle] = useToggle(false);
  return (
    <Column>
      <ProfilezationImage />
      <Title>Olá, Juliana! ♥</Title>
      <Explanation>
        Você tem o perfil ideal para começar a pensar em fazer um seguro de
        vida! Percebemos que você se importa muito com a família e as pessoas
        que ama! Quanto mais cedo você procurar se informar e consultar as
        opções de produto, mais chance você tem de encontrar uma opção de seguro
        em conta e perfeita para viver com tranquilidade, segura e satisfeita!
      </Explanation>
      <Chart />
      <SubTitle>Corretores selecionados</SubTitle>
      <LeftExplanation>
        Esses corretores foram selecionados com base no seu perfil! Eles estão
        aqui para te ajudar. Fique a vontade para conversar e tirar dúvidas com
        o que escolher! Você não será cobrado por nada a não ser que decida
        fazer um seguro.
      </LeftExplanation>
      <CorrectorCards>
        <CorrectorCard handle={toggle} />
        <CorrectorCard handle={toggle} />
        <CorrectorCard handle={toggle} />
      </CorrectorCards>
      <CorrectorModal isOpen={isOpen} setter={toggle} />
    </Column>
  );
};

export default Client;
