const router = require("express").Router();
const giftRoutes = require("./gifts");
const userRoutes = require("./users")

// Book routes
router.use("/gifts", giftRoutes);
router.use("/users", userRoutes);

module.exports = router;
