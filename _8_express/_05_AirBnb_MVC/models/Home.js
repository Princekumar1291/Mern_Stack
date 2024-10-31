const registeredHomes = [];

class Home {
  constructor(homeName, price, location, rating, photoUrl) {
    this.name = homeName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }
  static fetchAllHomes() {
    return registeredHomes;
  }
  saveHome() {
    registeredHomes.push(this);
  }
}

module.exports = {
  Home,
};
