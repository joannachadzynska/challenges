import { RootState } from '../reducers/rootReducer';
import { Starship as IStarship } from '../providers/swapiProvider/interfaces/Starship';
import { Common } from './Common';

export class Starship extends Common {
	public readonly name: string;
	public readonly model: string;
	public readonly starshipClass: string;
	public readonly manufacturer: string;
	public readonly costInCredits: string;
	public readonly length: number;
	public readonly crew: number;
	public readonly passengers: number;
	public readonly maxAtmospheringSpeed: number | null;
	public readonly hyperdriveRating: number;
	public readonly MGLT: number;
	public readonly cargoCapacity: number;
	public readonly consumables: string;
	public readonly films: string[];
	public readonly pilots: string[];

	public constructor(name: string, store: RootState) {
		super();
		const starshipInfo = store.starships.find(
			(starship) => starship.name === name
		) as IStarship;

		this.name = starshipInfo.name;
		this.model = starshipInfo.model;
		this.starshipClass = starshipInfo.starship_class;
		this.manufacturer = starshipInfo.manufacturer;
		this.costInCredits = starshipInfo.cost_in_credits;
		this.length = Number(starshipInfo.length);
		this.crew = Number(starshipInfo.crew);
		this.passengers = Number(starshipInfo.passengers);
		this.maxAtmospheringSpeed =
			starshipInfo.max_atmosphering_speed === 'n/a'
				? null
				: Number(starshipInfo.max_atmosphering_speed);
		this.hyperdriveRating = Number(starshipInfo.hyperdrive_rating);
		this.MGLT = Number(starshipInfo.MGLT);
		this.cargoCapacity = Number(starshipInfo.cargo_capacity);
		this.consumables = starshipInfo.consumables;
		this.films = this.parseFilmsTitles(starshipInfo.films, store.films);
		this.pilots = this.parseCharactersNames(
			starshipInfo.pilots,
			store.characters
		);
	}
}
