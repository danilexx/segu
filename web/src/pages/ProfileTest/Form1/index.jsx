import React from "react";
import { Element } from "react-scroll";
import {
  ChallengeImg,
  ChallengeExplanation,
  ChallengeTitle,
  Form,
  Button,
} from "../styles";
import Input from "-/components/Input";
import GenderSelector from "-/components/GenderSelector";
import ImageCheckBoxes from "-/components/ImageCheckBoxes";
import DateSelector from "-/components/DateSelector";
import validate from "-/utils/validate";
import { form1Schema } from "./schema";

const Form1 = ({ handleNext }) => {
  const formRef = React.useRef(null);
  const handleSubmit = async (data) => {
    const isValid = await validate(form1Schema, data, formRef);
    if (!isValid) return;
    handleNext(data);
  };
  return (
    <Element name="form1">
      <ChallengeImg />
      <ChallengeExplanation>
        Olá, tudo bem? Você tem curiosidade de saber quais os tipos de seguro
        fazem mais sentido com base no seu perfil? Tem ideia de quanto custaria
        em média um seguro de vida? E de automóvel? Para receber um relatório
        completo, personalizado e 100% gratuito para entender direitinho seu
        perfil de risco, basta responder algumas perguntas!
      </ChallengeExplanation>
      <ChallengeTitle>Vamos lá?</ChallengeTitle>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="name"
          placeholder="ex: Dona Maria"
          label="Qual é o seu nome?"
        />
        <Input
          name="email"
          placeholder="ex: DonaMaria@gmail.com"
          label="E seu email?"
          type="email"
        />
        <DateSelector label="Quando você nasceu?" name="birth" />
        <GenderSelector
          label="Com qual gênero você se identifica?"
          name="gender"
        />
        <ImageCheckBoxes label="Nos conte mais sobre você: " name="about" />
        <Button type="submit">Continuar</Button>
      </Form>
    </Element>
  );
};

export default Form1;
