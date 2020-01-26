const router = require("express").Router();
const signRoutes = require("./sign");
const dataRoutes = require("./data");

// Book routes
router.use("/account", signRoutes);
router.use("/data", dataRoutes);

module.exports = router;
