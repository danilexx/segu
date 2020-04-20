import * as Yup from "yup";

export const userStoreSchema = Yup.object().shape({
  name: Yup.string().required().max(150),
  email: Yup.string().email().required().max(100),
  password: Yup.string().required().max(100),
  insurances: Yup.string().required().max(150),
  zap: Yup.string().required().min(13),
  iconId: Yup.number(),
  cnpj: Yup.string().required(),
});

export const userUpdateSchema = Yup.object().shape({
  name: Yup.string().max(150),
  email: Yup.string().email().max(100),
  newPassword: Yup.string().max(100),
  password: Yup.string().max(100),
  confirmNewPassword: Yup.string()
    .max(100)
    .oneOf(
      [Yup.ref("newPassword"), null],
      "ConfirmNewPassword e NewPassword não são iguais"
    ),
  insurances: Yup.string().max(150),
  zap: Yup.string().min(15),
  iconId: Yup.number(),
  cnpj: Yup.string(),
  description: Yup.string().max(150),
});
