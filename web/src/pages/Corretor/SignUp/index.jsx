import React, { Fragment } from "react";
import { Form } from "@unform/web";
import * as Yup from "yup";
import validate from "-/utils/validate";
import Input from "-/components/Input";
import InputMask from "-/components/InputMask";
import CheckBoxes from "-/components/Checkboxes";
import Selector from "-/components/Selector";
import { FormContainer, AreaTitle, FormImg, PrimaryButton } from "../styles";
import { UserService } from "-/services";

Yup.setLocale({
  mixed: {
    required: "Obrigatorio",
  },
});

const schema = Yup.object().shape({
  name: Yup.string().required().max(150),
  email: Yup.string().email().required().max(100),
  password: Yup.string().required().max(100),
  cnpj: Yup.string().required(),
  zap: Yup.string().required(),
  confirmpassword: Yup.string().when("password", {
    is: (val) => val && val.length > 0,
    then: Yup.string().oneOf(
      [Yup.ref("password")],
      "As senhas precisam ser iguais"
    ),
  }),
  insurances: Yup.string().required(),
  type: Yup.string().required(),
  cep: Yup.string().required(),
  cpf: Yup.string().required(),
});

const corretorOptions = ["Generalista", "Especialista"].map((e) => ({
  label: e,
  value: e,
}));

const insuranceOptions = [
  "De Vida",
  "De automovel",
  "De moto/bike",
  "Celular",
  "Residencial",
  "Saúde",
  "Viagem",
].map((e) => ({ label: e, value: e }));

const SignUp = () => {
  const formRef = React.useRef(null);
  const handleSubmit = async (data) => {
    const isValid = validate(schema, data, formRef);
    if (!isValid) return;
    const response = await UserService.create(data);
    console.log(response);
  };
  return (
    <Fragment>
      <FormContainer>
        <AreaTitle>área do corretor!</AreaTitle>
        <FormImg src={require("../../../icons/undraw_interview_rmcf.svg")} />
        <AreaTitle>Fazer cadastro</AreaTitle>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input fluid name="name" label="Nome" placeholder="Nome" />
          <Input
            fluid
            name="email"
            label="Email"
            type="email"
            placeholder="Email"
          />
          <InputMask
            fluid
            name="cnpj"
            label="CNPJ"
            placeholder="CNPJ"
            mask="99.999.999/9999-99"
          />
          <Input
            fluid
            name="company"
            label="Trabalha para empresa corretora? Qual?"
            placeholder="Trabalha para empresa corretora? Qual?"
          />
          <InputMask
            fluid
            name="zap"
            label="Celular/Whatsapp"
            placeholder="Celular/Whatsapp"
            mask="(99) 99999-9999"
          />
          <InputMask
            fluid
            name="cpf"
            label="CPF"
            placeholder="CPF"
            mask="999.999.999-99"
          />
          <Selector
            name="type"
            label="Sou um(a) corretor(a)"
            options={corretorOptions}
          />
          <CheckBoxes
            name="insurances"
            label="Quais tipos de seguro você oferece?"
            options={insuranceOptions}
          />
          <InputMask
            fluid
            name="cep"
            label="CEP"
            placeholder="CEP"
            mask="99999-999"
          />
          <Input
            fluid
            name="password"
            label="Senha"
            type="password"
            placeholder="Senha"
          />
          <Input
            fluid
            name="confirmpassword"
            label="Confirmação da senha"
            type="password"
            placeholder="Confirmação da senha"
          />
          <PrimaryButton type="submit">Enviar</PrimaryButton>
        </Form>
      </FormContainer>
    </Fragment>
  );
};
export default SignUp;
