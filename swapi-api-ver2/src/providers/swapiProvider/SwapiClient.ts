import axios, { AxiosInstance } from 'axios';
import { Person } from './interfaces/Person';
import { Film } from './interfaces/Film';
import { Planet } from './interfaces/Planet';
import { Species } from './interfaces/Species';
import { Starship } from './interfaces/Starship';
import { Vehicle } from './interfaces/Vehicle';
import { Response } from './interfaces/Response';

export class SwapiClient {
	private readonly PEOPLE_ENDPOINT = '/people/';
	private readonly FILMS_ENDPOINT = '/films/';
	private readonly PLANETS_ENDPOINT = '/planets/';
	private readonly SPECIES_ENDPOINT = '/species/';
	private readonly STARSHIPS_ENDPOINT = '/starships/';
	private readonly VEHICLES_ENDPOINT = '/vehicles/';

	private readonly request: AxiosInstance;

	public constructor(baseURL: string) {
		this.request = axios.create({ baseURL });
	}

	/**
	 * Method get from API all characters from Star Wars Saga
	 * @returns Person[]
	 */
	public async getCharacters(): Promise<Person[]> {
		return this.getAllElements(this.PEOPLE_ENDPOINT);
	}

	/**
	 * Method get from API chunk 10 characters from Star Wars Saga
	 * @param chunkNumber number of chunk it contain ie. characters from 0-9 for 1 value
	 * @returns Person[]
	 */

	public async getChunkCharacters(chunkNumber = 1): Promise<Person[]> {
		return this.getChunkElements(chunkNumber, this.PEOPLE_ENDPOINT);
	}

	/**
	 * Method get from API single character from Star Wars Saga
	 * @param id: id of single person
	 * @returns Person || null
	 */

	public async getCharactersById(id: number): Promise<Person | null> {
		return this.getElementById(id, this.PEOPLE_ENDPOINT);
	}

	/**
	 * Method get from API all films from Star Wars Saga
	 * @returns Film[]
	 */
	public async getFilms(): Promise<Film[]> {
		return this.getAllElements(this.FILMS_ENDPOINT);
	}

	/**
	 * Method get from API chunk 10 films from Star Wars Saga
	 * @param chunkNumber number of chunk it contain ie. films from 0-9 for 1 value
	 * @returns Film[]
	 */

	public async getChunkFilms(chunkNumber = 1): Promise<Film[]> {
		return this.getChunkElements(chunkNumber, this.FILMS_ENDPOINT);
	}

	/**
	 * Method get from API one film from Star Wars Saga
	 * @param id: id of single movie
	 * @returns Person || null
	 */

	public async getFilmById(id: number): Promise<Film | null> {
		return this.getElementById(id, this.FILMS_ENDPOINT);
	}

	/**
	 * Method get from API all planets from Star Wars Saga
	 * @returns Planet[]
	 */
	public async getPlanets(): Promise<Planet[]> {
		return this.getAllElements(this.PLANETS_ENDPOINT);
	}

	/**
	 * Method get from API chunk 10 planets from Star Wars Saga
	 * @param chunkNumber number of chunk it contain ie. planets from 0-9 for 1 value
	 * @returns Planet[]
	 */

	public async getChunkPlanets(chunkNumber = 1): Promise<Planet[]> {
		return this.getChunkElements(chunkNumber, this.PLANETS_ENDPOINT);
	}

	/**
	 * Method get from API one planet from Star Wars Saga
	 * @param id: id of single planet
	 * @returns Planet || null
	 */

	public async getPlanetById(id: number): Promise<Planet | null> {
		return this.getElementById(id, this.PLANETS_ENDPOINT);
	}

	/**
	 * Method get from API all species from Star Wars Saga
	 * @returns Species[]
	 */
	public async getSpecies(): Promise<Species[]> {
		return this.getAllElements(this.SPECIES_ENDPOINT);
	}

	/**
	 * Method get from API chunk 10 species from Star Wars Saga
	 * @param chunkNumber number of chunk it contain ie. species from 0-9 for 1 value
	 * @returns Species[]
	 */

	public async getChunkSpecies(chunkNumber = 1): Promise<Species[]> {
		return this.getChunkElements(chunkNumber, this.SPECIES_ENDPOINT);
	}

	/**
	 * Method get from API one species from Star Wars Saga
	 * @param id: id of single species
	 * @returns Species || null
	 */

	public async getSpeciesById(id: number): Promise<Species | null> {
		return this.getElementById(id, this.SPECIES_ENDPOINT);
	}

	/**
	 * Method get from API all starships from Star Wars Saga
	 * @returns Starship[]
	 */
	public async getStarships(): Promise<Starship[]> {
		return this.getAllElements(this.STARSHIPS_ENDPOINT);
	}

	/**
	 * Method get from API chunk 10 starships from Star Wars Saga
	 * @param chunkNumber number of chunk it contain ie. starships from 0-9 for 1 value
	 * @returns Starship[]
	 */

	public async getChunkStarships(chunkNumber = 1): Promise<Starship[]> {
		return this.getChunkElements(chunkNumber, this.STARSHIPS_ENDPOINT);
	}

	/**
	 * Method get from API one starship from Star Wars Saga
	 * @param id: id of single starship
	 * @returns Starship || null
	 */

	public async getStarshipById(id: number): Promise<Starship | null> {
		return this.getElementById(id, this.STARSHIPS_ENDPOINT);
	}

	/**
	 * Method get from API all vehicles from Star Wars Saga
	 * @returns Vehicle[]
	 */
	public async getVehicles(): Promise<Vehicle[]> {
		return this.getAllElements(this.VEHICLES_ENDPOINT);
	}

	/**
	 * Method get from API chunk 10 vehicles from Star Wars Saga
	 * @param chunkNumber number of chunk it contain ie. vehicles from 0-9 for 1 value
	 * @returns Vehicle[]
	 */

	public async getChunkVehicles(chunkNumber = 1): Promise<Vehicle[]> {
		return this.getChunkElements(chunkNumber, this.VEHICLES_ENDPOINT);
	}

	/**
	 * Method get from API one vehicle from Star Wars Saga
	 * @param id: id of single vehicle
	 * @returns Vehicle || null
	 */

	public async getVehicleById(id: number): Promise<Vehicle | null> {
		return this.getElementById(id, this.VEHICLES_ENDPOINT);
	}

	private async getAllElements<T>(endpoint: string): Promise<T[]> {
		try {
			const data: T[] = [];
			let counter = 1;
			let response: Response<T>;

			do {
				response = (await this.request.get(`${endpoint}?page=${counter++}`))
					.data;
				data.push(...response.results);
			} while (response.next);

			return data;
		} catch {
			return [];
		}
	}

	private async getChunkElements<T>(
		chunkNumber: number,
		endpoint: string
	): Promise<T[]> {
		try {
			const response = (
				await this.request.get(`${endpoint}?page=${chunkNumber}`)
			).data;
			return response;
		} catch (error) {
			return [];
		}
	}

	private async getElementById<T>(
		id: number,
		endpoint: string
	): Promise<T | null> {
		try {
			const response = (await this.request.get(`${endpoint}${id}/`)).data;
			return response;
		} catch (error) {
			return null;
		}
	}
}
