const { Router } = require("express");
const isAuth = require("../middlewares/isAuth");
const { deletePost, DeleteTopic, DeleteTrend } = require("../controllers/deletes.controller");

const router = Router();

router.post("/admin/delete-teacher", isAuth, deletePost)
router.post("/admin/delete-trend-episodes", isAuth, DeleteTrend)
router.post("/admin/delete-topics", isAuth, DeleteTopic)

module.exports = router;