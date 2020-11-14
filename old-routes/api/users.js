const router = require("express").Router();
const userController = require("../../controllers/userController");
const { checkJwt } = require("../../authz/check-jwt");

// Matches with "/api/user"
router.route("/")
    .get(userController.findAll)
    .post(userController.create);

// Matches with "/api/user/:id"
router
    .route("/:id")
    .get(userController.findById)
    .put(userController.update)
    .delete(userController.remove);

router.post("/", checkJwt, (req, res) => {
    return userController.create(req, res)
})

router.get("/", checkJwt, (req, res) => {
    return userController.findAll(req, res)
})

router.get("/:id", checkJwt, (req, res) => {
    return userController.findAll(req, res)
})

router.put("/:id", checkJwt, (req, res) => {
    return userController.update(req, res)
})

module.exports = router;
