const fs = require("fs");
const path = require("path");
const rootDir = require("../utils.js/path-util");
const { Favourite } = require("./Favoriates");
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

  saveHome(callback) {
    Home.fetchAllHomes((homes) => {
      if (this.id) {  //for edit
        homes = homes.map((home) => {
          if (home.id === this.id) {
            home.name = this.name;
            home.price = this.price;
            home.location = this.location;
            home.rating = this.rating;
            home.photoUrl = this.photoUrl;
          }
          return home;
        })
      }
      else { //for add
        this.id = Math.random().toString();
        homes.push(this);
      }
      fs.writeFile(filePath, JSON.stringify(homes), error => {
        if (error) {
          console.log("Error in writing file", error);
          callback(error);
        } else {
          callback(null);
        }
      });
    });
  }

  static findById(homeId, callback) {
    Home.fetchAllHomes((homes) => {
      const home = homes.find(home => home.id === homeId);
      callback(home);
    });
  }

  static deleteById(homeId, callback) {
    Home.fetchAllHomes((homes) => {
      const newHomes=homes.filter(home => home.id !== homeId);
      fs.writeFile(filePath, JSON.stringify(newHomes), error => {
        if (error) {
          console.log("Error in writing file", error);
          callback(error);
        } else {
          callback(null);
          Favourite.deleteFavoriate(homeId, (error) => {
            if (error) {
              console.log("Error in writing file", error);
            }
          });
        }
      })
    })
  }
  
}

module.exports = {
  Home,
};