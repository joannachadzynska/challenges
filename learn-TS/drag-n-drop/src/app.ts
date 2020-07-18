import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";

import { ProjectInput } from "./components/project-input";
import { ProjectList } from "./components/project-list";
import _ from "lodash";
// declare var GLOBAL: any;
import { Product } from "./product.model";

new ProjectInput();
new ProjectList("active");
new ProjectList("finished");

console.log(_.shuffle([1, 2, 3, 4, 5]));
// console.log(GLOBAL);

const products = [
	{ title: "A Carpet", price: 29.99 },
	{ title: "A Another Book", price: 10.99 },
];
const p1 = new Product("", -12.99);
validate(p1).then((errors) => {
	if (errors.length > 0) {
		console.log("VALIDATION ERRORS!");
		console.log(errors);
	}
	console.log(p1.getInformation());
});

const loadedProducts = plainToClass(Product, products);

for (const prod of loadedProducts) {
	console.log(prod.getInformation());
}
