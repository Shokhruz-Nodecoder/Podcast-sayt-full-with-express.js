const { v4: uuid } = require("uuid");

class Topic {
  constructor(image, title, episodes) {
    this.id = uuid();
    this.image = image;
    this.title = title;
    this.episodes = episodes;
  }
}

module.exports = Topic;
