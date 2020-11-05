const router = require("express").Router();
const giftController = require("../../controllers/giftController");
const { checkJwt } = require("../../authz/check-jwt");

// Matches with "/api/gift"
// router.route("/")
//   .get(giftController.findAll)
//   .post(giftController.create);

// // Matches with "/api/gift/:id"
// router
//   .route("/:id")
//   .get(giftController.findById)
//   .put(giftController.update)
//   .delete(giftController.remove);

router.get("/public-message", (req, res) => {
  const message = "public";
  res.status(200).send(message);
});

router.get("/protected-message", checkJwt, (req, res) => {
  const message = "private";
  res.status(200).send(message);
});

module.exports = router;
