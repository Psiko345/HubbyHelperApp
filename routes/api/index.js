const router = require("express").Router();
const giftRoutes = require("./gifts");

// Book routes
router.use("/gifts", giftRoutes);

module.exports = router;
