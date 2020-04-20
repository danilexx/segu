import * as Yup from "yup";

Yup.setLocale({
  mixed: {
    required: "Obrigatorio",
  },
  array: {
    min: "Selecione ao menos uma opção",
  },
});

export const form1Schema = Yup.object().shape({
  name: Yup.string().required().max(150),
  email: Yup.string().email().required().max(150),
  birth: Yup.string().required(),
  gender: Yup.string().required(),
  // about: Yup.array().min(1),
});
