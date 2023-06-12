const Io = require("../utils/io");
const Teachers = new Io("./database/teacher.json");
const Topics = new Io("./database/topics.json");
const Trends = new Io("./database/trendings.json")

const home = async (req, res) => {
  const teachers = await Teachers.read();
  const topics = await Topics.read();
  const trends = await Trends.read()
  res.render("index", {
    teachers,
    topics,
    trends,
  });
};

const detailPage = async (req, res) => {
  res.render("detail-page");
};

const listingPage = async (req, res) => {
  res.render("listing-page");
};

const adminPage = async (req, res) => {
  res.render("admin");
};
const formPage = async (req, res) => {
  res.render("form");
};

module.exports = {
  home,
  detailPage,
  formPage,
  adminPage,
  listingPage,
};
