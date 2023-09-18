const express = require("express");
const router = express.Router();
const controller = require("../controllers/mainControllers")
const protect = require("../middleware/authMiddleware")

router.get("/" , protect , controller.displayLogs)

router.post("/sendEmail" ,protect , controller.sendEmail)

router.post("/login" , controller.login)

router.post("/search" , controller.search)




module.exports = router;