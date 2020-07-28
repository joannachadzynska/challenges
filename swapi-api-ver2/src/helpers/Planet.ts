import { RootState } from '../reducers/rootReducer';
import { Planet as IPlanet } from '../providers/swapiProvider/interfaces/Planet';
import { Common } from './Common';

export class Planet extends Common {
	public readonly name: string;
	public readonly diameter: string;
	public readonly rotationPeriod: string;
	public readonly orbitalPeriod: string;
	public readonly gravity: string;
	public readonly population: string;
	public readonly climate: string;
	public readonly terrain: string;
	public readonly surfaceWater: string;
	public readonly residents: string[];
	public readonly films: string[];

	public constructor(name: string, store: RootState) {
		super();
		const planetInfo = store.planets.find(
			(planet) => planet.name === name
		) as IPlanet;

		this.name = planetInfo.name;
		this.diameter = planetInfo.diameter;
		this.rotationPeriod = planetInfo.rotation_period;
		this.orbitalPeriod = planetInfo.orbital_period;
		this.gravity = planetInfo.gravity;
		this.population = planetInfo.population;
		this.climate = planetInfo.climate;
		this.terrain = planetInfo.terrain;
		this.surfaceWater = planetInfo.surface_water;
		this.residents = this.parseCharactersNames(
			planetInfo.residents,
			store.characters
		);
		this.films = this.parseFilmsTitles(planetInfo.films, store.films);
	}
}
