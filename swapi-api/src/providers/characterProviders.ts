/* eslint-disable no-await-in-loop */
import { request } from 'helpers/request';

export interface Character {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  films: Film[];
  species: Species[];
  url: string;
  created: string;
  edited: string;
}

export interface Film {
  title: string;
  release_date: string;
}

export interface Species {
  name: string;
}

export interface Response {
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
      // eslint-disable-next-line no-plusplus
      response = (await request.get(`/people/?page=${counter++}`)).data;
      characters.push(...response.results);
    } while (response.next);
  } catch (error) {
    characters.splice(0, characters.length);
  }

  return characters;
};
