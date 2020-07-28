import { RootState } from '../reducers/rootReducer';
import { Film as IFilm } from '../providers/swapiProvider/interfaces/Film';
import { Common } from './Common';

export class Film extends Common {
	public readonly title: string;
	public readonly episodeId: number;
	public readonly openingCrawl: string;
	public readonly director: string;
	public readonly producer: string;
	public readonly releaseDate: Date;
	public readonly species: string[];
	public readonly starships: string[];
	public readonly vehicles: string[];
	public readonly characters: string[];
	public readonly planets: string[];

	public constructor(title: string, store: RootState) {
		super();
		const filmInfo = store.films.find((film) => film.title === title) as IFilm;
		this.title = filmInfo.title;
		this.episodeId = filmInfo.episode_id;
		this.openingCrawl = filmInfo.opening_crawl;
		this.director = filmInfo.director;
		this.producer = filmInfo.producer;
		this.releaseDate = new Date(filmInfo.release_date);
		this.species = this.parseSpeciesName(filmInfo.species, store.species);
		this.starships = this.parseStarshipNames(
			filmInfo.starships,
			store.starships
		);
		this.vehicles = this.parseVehiclesNames(filmInfo.vehicles, store.vehicles);
		this.characters = this.parseCharactersNames(
			filmInfo.characters,
			store.characters
		);
		this.planets = this.parsePlanetsNames(filmInfo.planets, store.planets);
	}
}
