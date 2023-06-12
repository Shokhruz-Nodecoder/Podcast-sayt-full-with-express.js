const {Router} = require("express");
const isAuth = require("../middlewares/isAuth");
const { createTrendEpisodes } = require("../controllers/trend.controller");



const router = Router();

router.post("/trend", isAuth, createTrendEpisodes);

module.exports = router;
