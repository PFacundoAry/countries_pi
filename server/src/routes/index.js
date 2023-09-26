const { Router } = require("express");
const countriesRouter = require("./countriesRouter");
const activityRouter = require("./activityRouter");

const router = Router();

router.use("/activity", activityRouter);
router.use("/countries", countriesRouter);

module.exports = router;