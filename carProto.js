/**
 * Car class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
class Car {
    constructor(model, currentSpeed) {
        this.model = model;
        this.currentSpeed = currentSpeed;
        this.accelerate = () => {
            this.currentSpeed++;
        }
        this.brake = () => {
            this.currentSpeed--;
        }
    } 
    toString() {
        console.log(`${this.model}'s current speed is at ${this.currentSpeed}`)
    }
}

const myCar = new Car ('myCar', 0);
myCar.accelerate()
myCar.accelerate()
myCar.brake()
myCar.toString();

/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
class ElectricCar extends Car{
    constructor(model, currentSpeed) {
        super(model,currentSpeed)
        this.motor = "electric";
        this.accelerate = () => {
            this.currentSpeed += 2;
        }
    } 
    toString() {
        console.log(`${this.model}'s current speed is at ${this.currentSpeed}. EV is faster!`)
    }
}

const myEVCar = new ElectricCar ('myEVCar', 0);
myEVCar.accelerate()
myEVCar.accelerate()
myEVCar.brake()
myEVCar.toString();