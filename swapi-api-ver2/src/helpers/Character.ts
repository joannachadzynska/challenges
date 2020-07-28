import { RootState } from '../reducers/rootReducer';
import { Person } from '../providers/swapiProvider/interfaces/Person';
import { Common } from './Common';

export class Character extends Common {
	public readonly name: string;
	public readonly birthYear: string;
	public readonly eyeColor: string;
	public readonly gender: string;
	public readonly hairColor: string;
	public readonly height: number;
	public readonly mass: number;
	public readonly skinColor: string;
	public readonly homeworld: string;
	public readonly films: string[];
	public readonly species: string[];
	public readonly starships: string[];
	public readonly vehicles: string[];
	public readonly url: string;

	public constructor(name: string, store: RootState) {
		super();
		const characterInfo = store.characters.find(
			(character) => character.name === name
		) as Person;
		this.name = characterInfo.name;
		this.birthYear = characterInfo.birth_year;
		this.eyeColor = characterInfo.eye_color;
		this.gender = characterInfo.hair_color;
		this.hairColor = characterInfo.hair_color;
		this.height = Number(characterInfo.height);
		this.mass = Number(characterInfo.mass);
		this.skinColor = characterInfo.skin_color;
		this.homeworld = characterInfo.homeworld;
		this.films = this.parseFilmsTitles(characterInfo.films, store.films);
		this.species = this.parseSpeciesName(characterInfo.species, store.species);
		this.starships = this.parseStarshipNames(
			characterInfo.starships,
			store.starships
		);
		this.vehicles = this.parseVehiclesNames(
			characterInfo.vehicles,
			store.vehicles
		);
		this.url = characterInfo.url;
	}
}
