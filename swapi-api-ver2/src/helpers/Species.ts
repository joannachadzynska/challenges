import { RootState } from '../reducers/rootReducer';
import { Species as ISpecies } from '../providers/swapiProvider/interfaces/Species';
import { Common } from './Common';

export class Species extends Common {
	public readonly name: string;
	public readonly classification: string;
	public readonly designation: string;
	public readonly averageHeight: string;
	public readonly averageLifespan: string;
	public readonly eyeColors: string;
	public readonly hairColors: string;
	public readonly skinColors: string;
	public readonly language: string;
	public readonly homeworld: string;
	public readonly people: string[];
	public readonly films: string[];

	public constructor(name: string, store: RootState) {
		super();
		const speciesInfo = store.species.find(
			(species) => species.name === name
		) as ISpecies;

		this.name = speciesInfo.name;
		this.classification = speciesInfo.classification;
		this.designation = speciesInfo.designation;
		this.averageHeight = speciesInfo.average_height;
		this.averageLifespan = speciesInfo.average_lifespan;
		this.eyeColors = speciesInfo.eye_colors;
		this.hairColors = speciesInfo.hair_colors;
		this.skinColors = speciesInfo.skin_colors;
		this.language = speciesInfo.language;
		this.homeworld = speciesInfo.homeworld;
		this.people = this.parseCharactersNames(
			speciesInfo.people,
			store.characters
		);
		this.films = this.parseFilmsTitles(speciesInfo.films, store.films);
	}
}
