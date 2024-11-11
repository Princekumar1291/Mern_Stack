const airbnbDB = require("../utils/database-utils");
const { Favourite } = require("./Favoriates");


class Home {
  constructor(homeName, price, location, rating, photoUrl,description) {
    this.name = homeName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
    this.description=description;
  }

  static fetchAllHomes() {
    return airbnbDB.execute("SELECT * FROM homes");
  }

  saveHome() {
    return airbnbDB.execute("INSERT INTO homes (name, price, location, rating, photoUrl,description) VALUES (?,?,?,?,?,?)", [this.name, this.price, this.location, this.rating, this.photoUrl,this.description]);
  }

  static findById(homeId) {
    return airbnbDB.execute("SELECT * FROM homes WHERE id = ?", [homeId]);
  }

  static deleteById(homeId) {
    return airbnbDB.execute("DELETE FROM homes WHERE id = ?", [homeId]);
  }
  static updateById(homeId, name, price, location, rating, photoUrl,description) {
    return airbnbDB.execute("UPDATE homes SET name = ?, price = ?, location = ?, rating = ?, photoUrl = ?,description=? WHERE id = ?", [name, price, location, rating, photoUrl,description, homeId]);
  }
}

module.exports = {
  Home,
};