import React, { Fragment } from "react";
import { Form } from "@unform/web";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import validate from "-/utils/validate";
import Input from "-/components/Input";
import { UserService } from "-/services";
import {
  FormContainer,
  AreaTitle,
  FormImg,
  PrimaryButton,
  SecondaryButton,
} from "../styles";

Yup.setLocale({
  mixed: {
    required: "Obrigatorio",
  },
});

const schema = Yup.object().shape({
  email: Yup.string().email().required().max(100),
  password: Yup.string().required().max(100),
});

const SignIn = () => {
  const formRef = React.useRef(null);
  const [, setCookie] = useCookies(["token"]);

  const handleSubmit = async (data) => {
    const isValid = validate(schema, data, formRef);
    if (!isValid) return;
    const {
      data: { token },
    } = await UserService.login(data);
    setCookie("token", token);
  };
  return (
    <Fragment>
      <FormContainer>
        <AreaTitle>área do corretor!</AreaTitle>
        <FormImg src={require("../../../icons/undraw_interview_rmcf.svg")} />
        <AreaTitle>Fazer login</AreaTitle>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            fluid
            name="email"
            label="Email"
            type="email"
            placeholder="Email"
          />
          <Input
            fluid
            name="password"
            label="Senha"
            type="password"
            placeholder="Senha"
          />
          <PrimaryButton type="submit">Enviar</PrimaryButton>
        </Form>
        <Link to="/corretor/signup">
          <SecondaryButton>Ainda não tem cadastro? Faça agora</SecondaryButton>
        </Link>
      </FormContainer>
    </Fragment>
  );
};

export default SignIn;
