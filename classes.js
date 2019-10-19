/*Use the keyword class to create a class, and always add a constructor method.
The constructor method is called each time the class object is initialized.*/

class Car {
  // we don't use function keyword infront in classes
  constructor(brand, type) {
    // these are the class properties
    // we use this keyword to access them and set values to them
    // this referes to the current object
    this.brand = brand;
    this.type = type;
  }

  getName() {
    return this.brand + " " + this.type;
  }
}  

// this is an object based on class Car
mycar = new Car("Ford", "electric");
myNewCar = new Car("Premio", "petrol");

console.log("my car", mycar.brand, mycar.type); //Ford
console.log("my new car", myNewCar.brand); // Premio

console.log("car name", mycar.getName());

  /*Classes inheritance
A class can extend another class, and objects initialized using that class inherit all the
methods of both classes.*/




