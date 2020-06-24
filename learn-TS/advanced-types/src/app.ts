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

console.log(ee1);
