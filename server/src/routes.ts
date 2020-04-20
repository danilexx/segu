import { Router } from "express";
import { userStoreSchema, userUpdateSchema } from "./app/schemas/User";
import UserController from "./app/controllers/UserController";
import validateBody from "./app/middlewares/validateBody";
import { sessionStoreSchema } from "./app/schemas/Session";
import { clientStoreSchema } from "./app/schemas/Client";
import auth from "./app/middlewares/auth";
import { multerUploads } from "./app/middlewares/multer";
import FileController from "./app/controllers/FileController";
import { cloudinaryConfig } from "./app/middlewares/cloudnary";
import SessionController from "./app/controllers/SessionController";
import ClientController from "./app/controllers/ClientController";

const routes = Router();
routes.post("/users", validateBody(userStoreSchema), UserController.store);

routes.post(
  "/sessions",
  validateBody(sessionStoreSchema),
  SessionController.store
);
routes.post(
  "/clients",
  validateBody(clientStoreSchema),
  ClientController.store
);
routes.get("/clients/:id", ClientController.show);

routes.use(auth);
routes.get("/users", UserController.show);
routes.put("/users", validateBody(userUpdateSchema), UserController.update);
routes.delete("/users", UserController.destroy);
routes.post("/files", multerUploads, cloudinaryConfig, FileController.store);

export default routes;
