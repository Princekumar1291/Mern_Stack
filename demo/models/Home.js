const Homes=[];

class Home {
  constructor(name,age) {
    this.name = name;
    this.age = age;
  }

  static save() {
    Homes.push(this);
  }

  static fetchAll() {
    return Homes;
  }
}

module.exports = Home;