const { v4: uuid } = require("uuid");
const Io = require("../utils/io");
const path = require("path");
const Trends = new Io("./database/trendings.json");
const Trend = require("../models/Trend");
const { log } = require("util");

const createTrendEpisodes = async (req, res) => {
  const { musicName, author, field, comment } = req.body;
  const { image, ProfileImage } = req.files;

  const imageName = `${uuid()}${path.extname(image.name)}`;
  image.mv(process.cwd() + "/uploads/" + imageName);

  const ProfimageName = `${uuid()}${path.extname(ProfileImage.name)}`;


  ProfileImage.mv(process.cwd() + "/uploads/" + ProfimageName);

  const newTrend = new Trend(
    imageName,
    musicName,
    ProfimageName,
    author,
    field,
    comment
  );

  const trends = await Trends.read();

  const data = trends.length ? [...trends, newTrend] : [newTrend];

  await Trends.write(data);

  res.redirect("/form");
};

module.exports = {
  createTrendEpisodes,
};
