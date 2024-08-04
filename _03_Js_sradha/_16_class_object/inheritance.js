//inheritance


class Person{
  constructor(name){
    this.species='homosapiens'
  }
  eat(){
    console.log("eat")
  }
  sleep(){
    console.log("sleep")
  }
}

class Enginner extends Person{
  constructor(branch){
    super();
    this.branch=branch
  }
  work(){
    console.log("work")
  }
}

class Doctor extends Person{
  treat(){
    console.log("treat")
  }
}

let prince=new Enginner();
prince.eat();
prince.sleep();
prince.work()

let sonu=new Doctor();
sonu.eat();
sonu.sleep();
sonu.treat()