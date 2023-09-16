const express = require("express");
const router = express.Router();
const controller = require("../controllers/mainControllers")

router.post("/sendEmail" , controller.sendEmail)

router.get("/" , controller.displayLogs)


module.exports = router;