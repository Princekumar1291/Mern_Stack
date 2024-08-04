class Car {
  constructor() {
    this.brand = "Nissan";
  }
  start() {
    console.log("Car started");
  }
  stop() {
    console.log("Car stopped");
  }
  setBrand(brand) {
    this.brand = brand;
  }
}

let car = new Car();
car.start();
car.stop();
car.setBrand("Toyota");
console.log(car)

