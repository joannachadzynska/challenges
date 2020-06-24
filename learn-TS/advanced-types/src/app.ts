// intersection types
// can use types or interfaces
type Admin = {
	name: string;
	privileges: string[];
};

type Employee = {
	name: string;
	startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const ee1: ElevatedEmployee = {
	name: "Joanna",
	privileges: ["create server"],
	startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// Type Guards
function add(a: Combinable, b: Combinable) {
	if (typeof a === "string" || typeof b === "string") {
		return a.toString(+b.toString());
	}
	return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
	console.log(`Name: ${emp.name}`);
	if ("privileges" in emp) {
		console.log(`Privileges: ${emp.privileges}`);
	}
	if ("startDate" in emp) {
		console.log(`Start date: ${emp.startDate}`);
	}
}

printEmployeeInformation(ee1);

class Car {
	drive() {
		console.log("Driving...");
	}
}

class Truck {
	drive() {
		console.log("Driving a truck...");
	}

	loadCargo(amount: number) {
		console.log(`Loading cargo: ${amount}`);
	}
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
	vehicle.drive();
	if (vehicle instanceof Truck) {
		vehicle.loadCargo(1000);
	}
}

useVehicle(v1);
useVehicle(v2);

// Discriminated unions
interface Bird {
	type: "bird";
	flyingSpeed: number;
}

interface Horse {
	type: "horse";
	runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
	let speed;
	switch (animal.type) {
		case "bird":
			speed = animal.flyingSpeed;
			break;

		case "horse":
			speed = animal.runningSpeed;
	}
	console.log(`Moving with speed: ${speed}`);
}

moveAnimal({ type: "bird", flyingSpeed: 25 });

// Type Casting
const paragraph = document.querySelector("p");
const paragraphWithId = document.getElementById("message-output");
// const userInputElement = <HTMLInputElement>(
// 	document.getElementById("user-input")!
// );
const userInputElement = document.getElementById(
	"user-input"
)! as HTMLInputElement;

userInputElement.value = "hi";

// Index properties

interface ErrorContainer {
	[key: string]: string;
}

const errorBag: ErrorContainer = {
	email: "Not a valid email!",
	username: "Must start with a capital character!",
};

// Function overloads
function add2(a: number, b: number): number;
function add2(a: string, b: string): string;
function add2(a: number, b: string): string;
function add2(a: string, b: number): string;
function add2(a: Combinable, b: Combinable) {
	if (typeof a === "string" || typeof b === "string") {
		return a.toString(+b.toString());
	}
	return a + b;
}

const result = add2(3, 5);
const stringResult = add2("Joanna", "Chądzyńska");

// Optional chaining

const fetchedUserData = {
	id: "u2",
	name: "Joanna",
	job: {
		title: "CEO",
		description: "My own company",
	},
};

console.log(fetchedUserData?.job?.title);

// Nullish coalescing
// for nullish data or undefined

const userInput = "";

const storedData = userInput ?? "DEFAULT";

console.log(storedData);
