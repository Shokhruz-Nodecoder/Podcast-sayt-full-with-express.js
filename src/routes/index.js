const auth = require("./auth.route");
const home = require("./home.route");
const teacher = require("./teacher.route");
const topic = require("./topic.route");
const trend = require("./trend.route")

module.exports = [auth, home, teacher, topic, trend];
