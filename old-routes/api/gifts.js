const router = require("express").Router();
const giftController = require("../../controllers/giftController");
const { checkJwt } = require("../../authz/check-jwt");

// Matches with "/api/gift"

router.get("/", (req, res) => {
  return giftController.findAll(req, res)
})

// Matches with "/api/gift/:id"

router
  .route("/:id")
  .get(giftController.findById)
  .put(giftController.update)
  .delete(giftController.remove);

router.post("/", checkJwt, (req, res) => {
  return giftController.create(req, res)
})

// router.get("/public-message", (req, res) => {
//   const message = "public";
//   res.status(200).send(message);
// });

// router.get("/protected-message", checkJwt, (req, res) => {
//   const message = "private";
//   res.status(200).send(message);
// });

module.exports = router;
