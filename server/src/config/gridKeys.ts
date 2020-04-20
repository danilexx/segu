import dotenv from "dotenv";

dotenv.config();

const gridKeys = {
  cnpj: process.env.GRID_CNPJ_KEY,
  cpf: process.env.GRID_CPF_KEY,
};
export default gridKeys;
