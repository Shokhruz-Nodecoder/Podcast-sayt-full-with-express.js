const {v4: uuid} = require("uuid");

class Trend {
  constructor(image, musicName, ProfileImage, author, field, comment) {
    this.id = uuid();
    this.image = image;
    this.musicName = musicName;
    this.ProfileImage = ProfileImage;
    this.author = author;
    this.field = field;
    this.comment = comment;
    
  }
}

module.exports = Trend;
