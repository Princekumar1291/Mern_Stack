const fs = require("fs");
const path = require("path");
const rootDir = require("../utils.js/path-util");
const filePath = path.join(rootDir, "data", "favoriates.json");

class Favorites {
  static fetchAllFavoriates(callback) {
    fs.readFile(filePath, (error, fileContent) => {
      if (error) {
        callback([]);
      } else {
        callback(JSON.parse(fileContent));
      }
    });
  }

  static saveFavoriate(homeId, callback) {
    Favorites.fetchAllFavoriates((favoriateIds) => {
      favoriateIds.push(homeId);
      fs.writeFile(filePath, JSON.stringify(favoriateIds), error => {
        if (error) {
          console.log("Error in writing file", error);
          callback(error);
        } else {
          callback(null);
        }
      });
    })
  }
  
}

module.exports = {
  Favorites,
};