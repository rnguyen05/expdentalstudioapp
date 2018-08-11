const router = require("express").Router();
const userController = require("../../controllers/userController");

router.post("/signup", userController.create);
router.post("/login", userController.findAll);
// router.post("/getUser", userController.findOne);
router.post("/logout", userController.logout);

module.exports = router;
