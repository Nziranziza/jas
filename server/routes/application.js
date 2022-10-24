import { Router } from "express";
import { applicationController } from "../controllers";
import {
  createApplicationValidator,
  updateApplicationValidator,
} from "../middlewares";

const applicationRouter = Router();

applicationRouter
  .route("/")
  .get(applicationController.getAll)
  .post(createApplicationValidator, applicationController.create);

applicationRouter
  .route("/:id")
  .put(updateApplicationValidator, applicationController.update)
  .get(applicationController.getById);

export default applicationRouter;
