// Person/person.js
class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  greet() {
    return `ID: ${this.id} | Name: ${this.firstName} ${this.lastName} | Age: ${this.age}`;
  }
}

module.exports = Person;
