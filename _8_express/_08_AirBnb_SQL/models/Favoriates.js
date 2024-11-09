const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/path-util");
const filePath = path.join(rootDir, "data", "favoriates.json");

class Favourite {

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
    Favourite.fetchAllFavoriates((favoriateIds) => {
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

  static deleteFavoriate(homeId, callback) {
    Favourite.fetchAllFavoriates((favoriateIds) => {
      const newFavoriates = favoriateIds.filter(id => id !== homeId);
      fs.writeFile(filePath,JSON.stringify(newFavoriates), error => {
        if (error) {
          console.log("Error in writing file", error);
          callback(error);
        } else {
          callback(null);
        }
      })
    })
  }
  
}

module.exports = {
  Favourite,
};