const {Router} = require("express");
const isAuth = require("../middlewares/isAuth");
const { createTopic } = require("../controllers/topic.controller");


const router = Router();

router.post("/topic", isAuth, createTopic);

module.exports = router;
