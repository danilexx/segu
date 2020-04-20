import React from "react";
import { Element, scroller } from "react-scroll";
import { ChallengeExplanation, ChallengeTitle, Form, Button } from "../styles";
import Selector from "-/components/Selector";
import CheckBoxes from "-/components/Checkboxes";
import validate from "-/utils/validate";
import { form3Schema } from "./schema";
import profs from "-/utils/profs";

const profissionalActivity = profs.map((e) => ({
  label: e,
  value: e,
}));
const incomeOptions = ["Trabalho Formal", "Trabalho Informal"].map((e) => ({
  label: e,
  value: e,
}));

const dependentsOptions = ["1-2", "3-4", "4+"].map((e) => ({
  label: e,
  value: e,
}));

const insurancePriceLimitOptions = [
  "R$50-100 por mes",
  "R$100-200 por mes",
  "R$200-300 por mes",
  "R$300-500 por mes",
  "R$500-1000 por mes",
  "Eu sou rico(a)",
].map((e) => ({ label: e, value: e }));

const healthIssuesOptions = [
  "Eu bebo sim! 🍺",
  "Eu fumo 🚬",
  "Tenho alguma doença grave 😔",
].map((e) => ({ label: e, value: e }));

const Form3 = ({ handleNext }) => {
  React.useEffect(() => {
    scroller.scrollTo("form3", {
      smooth: true,
    });
  }, []);
  const formRef = React.useRef();
  const handleSubmit = async (data) => {
    const isValid = await validate(form3Schema, data, formRef);
    if (!isValid) return;
    handleNext(data);
  };
  return (
    <Element name="form3">
      <ChallengeTitle>Mais umas perguntinhas...</ChallengeTitle>
      <ChallengeExplanation>
        Responde com sinceridade tá? A gente promete que ninguem vai ficar
        sabendo!
      </ChallengeExplanation>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Selector
          name="profissionalActivity"
          label="Qual a sua atividade profissional?"
          options={profissionalActivity}
        />
        <Selector
          name="income"
          label="Qual a sua fonte de renda"
          options={incomeOptions}
        />
        <Selector
          name="dependents"
          label="Quantas pessoas dependem da sua renda?"
          options={dependentsOptions}
        />
        <Selector
          name="insurancePriceLimit"
          label="Até quanto imagina pagar por um seguro?"
          options={insurancePriceLimitOptions}
        />
        <CheckBoxes name="healthIssues" options={healthIssuesOptions} />
        <Button type="submit">Continuar</Button>
      </Form>
    </Element>
  );
};

export default Form3;
