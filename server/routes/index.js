import { Router } from "express";

import applicationRouter from "./application";

const router = Router();

router.use('/applications', applicationRouter);

export default router;
