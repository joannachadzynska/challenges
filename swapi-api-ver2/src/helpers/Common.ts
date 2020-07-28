import { Film } from '../providers/swapiProvider/interfaces/Film';
import { Planet } from '../providers/swapiProvider/interfaces/Planet';
import { Species } from '../providers/swapiProvider/interfaces/Species';
import { Starship } from '../providers/swapiProvider/interfaces/Starship';
import { Vehicle } from '../providers/swapiProvider/interfaces/Vehicle';
import { Person } from '../providers/swapiProvider/interfaces/Person';

export class Common {
	public parseCharactersNames(
		charactersUrls: string[],
		charactersStore: Person[]
	): string[] {
		return charactersStore
			.filter((character) => charactersUrls.includes(character.url))
			.map((character) => character.name);
	}

	public parseFilmsTitles(filmUrls: string[], filmStore: Film[]): string[] {
		return filmStore
			.filter((film) => filmUrls.includes(film.url))
			.map((film) => film.title);
	}

	public parsePlanetsNames(
		planetsUrls: string[],
		planetsStore: Planet[]
	): string[] {
		return planetsStore
			.filter((planet) => planetsUrls.includes(planet.url))
			.map((planet) => planet.name);
	}

	public parseSpeciesName(
		speciesUrls: string[],
		speciesStore: Species[]
	): string[] {
		return speciesStore
			.filter((species) => speciesUrls.includes(species.url))
			.map((species) => species.name);
	}

	public parseStarshipNames(
		starshipsUrls: string[],
		starshipsStore: Starship[]
	): string[] {
		return starshipsStore
			.filter((starship) => starshipsUrls.includes(starship.url))
			.map((starship) => starship.name);
	}

	public parseVehiclesNames(
		vehiclesUrls: string[],
		vehiclesStore: Vehicle[]
	): string[] {
		return vehiclesStore
			.filter((vehicle) => vehiclesUrls.includes(vehicle.url))
			.map((vehicle) => vehicle.name);
	}
}
