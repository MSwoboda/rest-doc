const router = require("express").Router();
const signRoutes = require("./sign");

// Book routes
router.use("/account", signRoutes);

module.exports = router;
