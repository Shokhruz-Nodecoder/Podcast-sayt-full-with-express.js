const auth = require("./auth.route");
const home = require("./home.route");
const teacher = require("./teacher.route");
const topic = require("./topic.route");
const trend = require("./trend.route")
const deleteElements= require("./delete.route")

module.exports = [auth, home, teacher, topic, trend,deleteElements];
