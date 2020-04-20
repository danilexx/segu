import * as Yup from "yup";

Yup.setLocale({
  mixed: {
    required: "Obrigatorio",
  },
  array: {
    min: "Selecione ao menos uma opção",
  },
});

export const form3Schema = Yup.object().shape({
  profissionalActivity: Yup.string().required(),
  income: Yup.string().required(),
  dependents: Yup.string().required(),
  insurancePriceLimit: Yup.string().required(),
  // healthIssues: Yup.array().min(1),
});
