import React from "react";
import { Element, scroller } from "react-scroll";
import { ChallengeTitle, Form, Button } from "../styles";
// import Input from "-/components/Input";
// import GenderSelector from "-/components/GenderSelector";
// import ImageCheckBoxes from "-/components/ImageCheckBoxes";
// import DateSelector from "-/components/DateSelector";
import CheckBoxes from "-/components/Checkboxes";
import validate from "-/utils/validate";
import { form2Schema } from "./schema";

const pastInsegurancesOptions = [
  "De Vida",
  "De automovel",
  "De moto/bike",
  "Celular",
  "Residencial",
  "Saúde",
  "Viagem",
].map((e) => ({ label: e, value: e }));

const currentInsegurancesOptions = pastInsegurancesOptions;

const Form2 = ({ handleNext }) => {
  React.useEffect(() => {
    scroller.scrollTo("form2", {
      smooth: true,
    });
  }, []);
  const formRef = React.useRef(null);
  const handleSubmit = async (data) => {
    const isValid = await validate(form2Schema, data, formRef);
    if (!isValid) return;
    handleNext(data);
  };
  return (
    <Element name="form2">
      <ChallengeTitle>Minha relação com seguros</ChallengeTitle>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <CheckBoxes
          name="pastInsegurances"
          options={pastInsegurancesOptions}
          label="Já contratei esse tipo de seguro no passado:"
        />
        <CheckBoxes
          name="currentInsegurances"
          options={currentInsegurancesOptions}
          label="Atualmente tenho esse tipo de seguro:"
        />
        <Button type="submit">Continuar</Button>
      </Form>
    </Element>
  );
};

export default Form2;
