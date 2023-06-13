const Io = require("../utils/io");
const Teachers = new Io("./database/teacher.json");
const Topics = new Io("./database/topics.json");
const Trends = new Io("./database/trendings.json");

const deletePost = async (req, res) => {
  const { id } = req.body;
  
  const teachers = await Teachers.read();
  const deletes = teachers.find((data) => data.id === id);
  if (!deletes) return res.redirect("/admin/delete-teacher");

  teachers.splice(teachers.indexOf(deletes), 1);
  await Teachers.write(teachers);
  res.redirect("/admin");
};

const DeleteTopic = async (req, res) => {
  const { id } = req.body;

  const topics = await Topics.read();

  const deletes = topics.find((data) => data.id === id);
  if (!deletes) return res.redirect("/admin/delete-topics");

  topics.splice(topics.indexOf(deletes), 1);
  await Topics.write(topics);
  res.redirect("/admin");
};
const DeleteTrend = async (req, res) => {
  const { id } = req.body;

  const trends = await Trends.read();

  const deletes = trends.find((data) => data.id === id);
  if (!deletes) return res.redirect("/admin/delete-trend-episodes");

  trends.splice(trends.indexOf(deletes), 1);
  await Trends.write(trends);
  res.redirect("/admin");
};

module.exports = {
  DeleteTopic,
  DeleteTrend,
  deletePost,
};