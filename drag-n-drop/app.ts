// const person: {
// 	name: string;
// 	age: number;
// } = {
// 	name: "Joanna",
// 	age: 33,
// };

const person: {
	name: string;
	age: number;
	hobbies: string[];
	role: [number, string];
} = {
	name: "Joanna",
	age: 33,
	hobbies: ["books", "puzzles"],
	role: [2, "author"],
};

// person.role.push("admin");
// person.role[1] = 10;

// person.role = [1, "admin", "user"]

let favoriteActivities: string[];
favoriteActivities = ["books"];

for (const hobby of person.hobbies) {
	console.log(hobby.toUpperCase());
}

type Product = {
	id: string;
	price: number;
	tags: string[];
	details: {
		title: string;
		description: string;
	};
};

const product = {
	id: "abc1",
	price: 12.99,
	tags: ["great-offer", "hot-and-new"],
	details: {
		title: "Red Carpet",
		description: "A great carpet - almost brand-new!",
	},
};
