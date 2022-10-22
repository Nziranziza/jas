import { Router } from "express";
import { applicationController } from "../controllers";

const applicationRouter = Router();

applicationRouter
  .route("/")
  .get(applicationController.getAll)
  .post(applicationController.create);

applicationRouter.route("/:id").put(applicationController.update);

export default applicationRouter;
