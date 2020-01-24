const router = require("express").Router();
const signRoutes = require("./sign");
const docRoutes = require("./pdf");

// Book routes
router.use("/account", signRoutes);
router.use("/doc", docRoutes);

module.exports = router;
