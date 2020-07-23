import { request } from "../helpers/request";
import { Character } from "../types/characterTypes";

interface Response {
	count: number;
	next: string | null;
	previous: string | null;
	results: Character[];
}

export const getCharacters = async (): Promise<Character[]> => {
	const characters: Character[] = [];
	let counter = 1;
	let response: Response;

	try {
		do {
			response = (await request.get(`/people/?page=${counter++}`)).data;
			characters.push(...response.results);
		} while (response.next);
	} catch {
		characters.splice(0, characters.length);
	}

	return characters;
};
