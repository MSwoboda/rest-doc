const router = require("express").Router();
const bookRoutes = require("./books");
const signRoutes = require("./sign");

// Book routes
router.use("/books", bookRoutes);
router.use("/account", signRoutes);

module.exports = router;
