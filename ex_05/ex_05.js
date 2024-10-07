const car = {
  brand: 'Aston Martin',
  model: 'DB5',
  color: 'grey',
  power: '300hp',
  logInfo() {
    console.log(`Car information: ${this.color}, ${this.model}, ${this.brand}`);
  }
}; 
// Defines a car object with properties: brand, model, color, and power.
// Includes a method logInfo to display car information in the console.

const agent = {
  firstName: "James",
  lastName: "Bond",
  code: "007",
  age: 57,
  car,
  logInfo() {
    console.log(`Agent information: ${this.firstName} ${this.lastName}, ${this.code}, ${this.age}`);
    this.car.logInfo();
  }
}; 
// Defines an agent object with properties: firstName, lastName, code, and age.
// Associates the car object with the agent.
// Includes a method logInfo to display agent information and call the car's logInfo method.
