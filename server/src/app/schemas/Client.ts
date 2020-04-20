import * as Yup from "yup";

export const clientStoreSchema = Yup.object().shape({
  name: Yup.string().required().max(150),
  email: Yup.string().email().required().max(100),
  birth: Yup.string().required(),
  gender: Yup.string().required(),
  profissionalActivity: Yup.string().required(),
  income: Yup.string().required(),
  dependents: Yup.string().required(),
  about: Yup.array().required(),
  pastInsegurances: Yup.array(),
  currentInsegurances: Yup.array(),
  healthIssues: Yup.array(),
});
