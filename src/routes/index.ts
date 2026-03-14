import { Router } from "express";
import { healthRouter } from "./health.route";

const apiRouter = Router();

apiRouter.use(healthRouter);

export { apiRouter };
