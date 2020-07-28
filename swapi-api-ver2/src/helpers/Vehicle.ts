import { RootState } from '../reducers/rootReducer';
import { Vehicle as IVehicle } from '../providers/swapiProvider/interfaces/Vehicle';
import { Common } from './Common';

export class Vehicle extends Common {
	public readonly name: string;
	public readonly model: string;
	public readonly vehicleClass: string;
	public readonly manufacturer: string;
	public readonly length: number;
	public readonly costInCredits: number;
	public readonly crew: number;
	public readonly passengers: number;
	public readonly maxAtmospheringSpeed: number | null;
	public readonly cargoCapacity: number;
	public readonly consumables: string;
	public readonly films: string[];
	public readonly pilots: string[];
	public readonly url: string;

	public constructor(name: string, store: RootState) {
		super();
		const vehicleInfo = store.vehicles.find(
			(vehicle) => vehicle.name === name
		) as IVehicle;

		this.name = vehicleInfo.name;
		this.model = vehicleInfo.model;
		this.vehicleClass = vehicleInfo.vehicle_class;
		this.manufacturer = vehicleInfo.manufacturer;
		this.length = Number(vehicleInfo.length);
		this.costInCredits = Number(vehicleInfo.cost_in_credits);
		this.crew = Number(vehicleInfo.crew);
		this.passengers = Number(vehicleInfo.passengers);
		this.maxAtmospheringSpeed =
			vehicleInfo.max_atmosphering_speed === 'n/a'
				? null
				: Number(vehicleInfo.max_atmosphering_speed);
		this.cargoCapacity = Number(vehicleInfo.cargo_capacity);
		this.consumables = vehicleInfo.consumables;
		this.films = this.parseFilmsTitles(vehicleInfo.films, store.films);
		this.pilots = this.parseCharactersNames(
			vehicleInfo.pilots,
			store.characters
		);
		this.url = vehicleInfo.url;
	}
}
