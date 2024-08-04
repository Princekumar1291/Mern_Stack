//inheritance


class Person{
  constructor(name){
    this.name=name
  }
  eat(){
    console.log("eat")
  }
  sleep(){
    console.log("sleep")
  }
}

class Enginner extends Person{
  constructor(name,branch){
    super(name);
    this.branch=branch
  }
  work(){
    console.log("work")
  }
}


let prince=new Enginner("Prince","CSE");
prince.eat();
prince.sleep();
prince.work()
console.log(prince.name)
console.log(prince.branch)
