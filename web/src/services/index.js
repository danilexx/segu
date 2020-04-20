import axios from "axios";
import { cookie } from "react-cookies";

const api = axios.create({
  baseURL: "http://localhost:3333",
});
const getAuth = () => ({
  headers: { Authorization: `Bearer ${cookie.load("token")}` },
});
export const ClientService = {
  create: (data) => api.post("/clients", data),
};
export const UserService = {
  create: (data) => api.post("/users", data),
  login: (data) => api.post("/sessions", data),
};
