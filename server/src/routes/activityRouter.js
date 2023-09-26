const { Router } = require("express");
const { createActivitiesHandler, getActivitiesHandler } = require("../handlers/activityHandler");
const activityRouter = Router();

activityRouter.post("/", createActivitiesHandler);
activityRouter.get("/", getActivitiesHandler);

module.exports = activityRouter;