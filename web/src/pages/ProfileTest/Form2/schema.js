import * as Yup from "yup";

Yup.setLocale({
  mixed: {
    required: "Selecione ao menos uma opção",
  },
  array: {
    min: "Selecione ao menos uma opção",
  },
});

export const form2Schema = Yup.object().shape({
  // pastInsegurances: Yup.array().min(1),
  // currentInsegurances: Yup.array().min(1),
});
