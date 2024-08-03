// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)  //now we can not change the value of jsUser
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());





// Creating Objects

// Object Literal Syntax
let person = {
    name: 'Alice',
    age: 30,
    job: 'Engineer'
};


// Using the new Object() singleton
person = new Object();
person.name = 'Alice';
person.age = 30;
person.job = 'Engineer';




// Accessing Object Properties

// Dot Notation
const product = {
    name: 'Laptop',
    price: 1000
};
console.log(product.name); // 'Laptop'
console.log(product.price);  // 1000


// Bracket Notation
const order = {
    id: 1234,
    total: 250.50
};
console.log(order['id']); // 1234
console.log(order['total']);  // 250.50


// Dynamic Property Access
const key = 'model';
const car = {
    model: 'Tesla Model S'
};
console.log(car[key]); // 'Tesla Model S'





// Adding and Modifying Properties
// Adding Properties
const account = {
    username: 'alice123'
};
account.email = 'alice@example.com';
console.log(account); // { username: 'alice123', email: 'alice@example.com' }



// Modifying Properties
const settings = {
    theme: 'dark',
    notifications: true
};
settings.notifications = false;
console.log(settings.notifications); // false


// Deleting Properties
const company = {
    name: 'TechCorp',
    location: 'New York'
};
delete company.location;
console.log(company); // { name: 'TechCorp' }




// hasOwnProperty() Method:

// In the second example, person.hasOwnProperty('name') and person.hasOwnProperty('age') return true because these properties are directly on the person object.
// person.hasOwnProperty('toString') returns false because toString is not a property defined directly on the person object but is inherited from the prototype.
const person = {
    name: 'Alice',
    age: 30
};
// Checking if a property exists directly on the object (not in its prototype chain)
console.log(person.hasOwnProperty('name'));  // true, because 'name' is a direct property of person
console.log(person.hasOwnProperty('age'));   // true, because 'age' is a direct property of person
console.log(person.hasOwnProperty('toString')); // false, because 'toString' is not a direct property of person; it's inherited from Object.prototype









// in Operator
// In the first example, 'name' in person and 'age' in person return true because these properties are directly on the person object.
// 'toString' in person also returns true because toString is a method inherited from Object.prototype.
const person = {
    name: 'Alice',
    age: 30
};
// Checking if a property exists directly on the object or in its prototype chain
console.log('name' in person);  // true, because 'name' is a direct property of person
console.log('age' in person);   // true, because 'age' is a direct property of person
console.log('toString' in person); // true, because 'toString' is an inherited property from Object.prototype





// Iterating Over Properties

// for...in Loop
const smartphone = {
    brand: 'Apple',
    model: 'iPhone 13'
};
for (const key in smartphone) {
    console.log(key, smartphone[key]);
}


// Object.keys()
const userDetails = {
    firstName: 'Alice',
    lastName: 'Johnson'
};
const keys = Object.keys(userDetails);
console.log(keys); // ['firstName', 'lastName']
keys.forEach(key => {
    console.log(key, userDetails[key]);
});


// Object.values()
const laptop = {
    brand: 'Dell',
    model: 'XPS 13'
};
const values = Object.values(laptop);
console.log(values); // ['Dell', 'XPS 13']



// Object.entries()
const address = {
    city: 'San Francisco',
    state: 'California'
};
const entries = Object.entries(address);
console.log(entries); // [['city', 'San Francisco'], ['state', 'California']]
entries.forEach(([key, value]) => {
    console.log(key, value);
});



// Object.freeze()
// Freezes an object so that its properties cannot be modified.
const config = {
    apiEndpoint: 'https://api.example.com',
    retries: 3
};
Object.freeze(config);
config.retries = 5; // This will not be applied
console.log(config.retries); // 3




// Object.seal()
// Seals an object so that new properties cannot be added and existing properties cannot be deleted, but existing properties can still be modified.
const accountSettings = {
    privacy: 'public'
};
Object.seal(accountSettings);
accountSettings.privacy = 'private'; // This will be applied
delete accountSettings.privacy; // This will not be applied
console.log(accountSettings); // { privacy: 'private' }





// Object Destructuring
// Object destructuring allows you to extract properties from objects and assign them to variables.
const event1 = {
    name: 'Conference',
    date: '2024-10-01'
};
const { name, date } = event1;
console.log(name); // 'Conference'
console.log(date);  // '2024-10-01'









// Rest and Spread Properties
// Rest Properties
// The rest syntax (...) allows you to "collect" the remaining elements of an array or the remaining properties of an object into a new array or object. It's often used in function parameters or destructuring assignments.

const accountInfo = {
    username: 'charlie123',
    password: 'securepassword',
    email: 'charlie@example.com'
};
const { password, ...restAccountInfo } = accountInfo;
console.log(password); // 'securepassword'
console.log(restAccountInfo); // { username: 'charlie123', email: 'charlie@example.com' }



//Spread Syntax
// The spread syntax (...) allows you to "spread out" the elements of an array or the properties of an object into a new array or object.

const userProfile = {
    name: 'Bob',
    age: 40
};
const updatedProfile = { ...userProfile, location: 'Los Angeles' };
console.log(updatedProfile); // { name: 'Bob', age: 40, location: 'Los Angeles' }

