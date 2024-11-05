const registeredHomes = [];
const fs = require("fs");
const path = require("path");
const rootDir = require("../utils.js/path-util");
const filePath = path.join(rootDir, "data", "homes.json");

class Home {
  constructor(homeName, price, location, rating, photoUrl) {
    this.name = homeName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }
  static fetchAllHomes(callback) {
    fs.readFile(filePath, (error, fileContent) => {
      if (error) {
        callback([]);
      } else {
        callback(JSON.parse(fileContent));
      }
    });
  }
  saveHome() {
    const registeredHomes = Home.fetchAllHomes();
    registeredHomes.push(this);
    fs.writeFile(filePath, JSON.stringify(registeredHomes), error => {
      if (error) console.log("Error in writing file", error);
    });
  }
}

module.exports = {
  Home,
};