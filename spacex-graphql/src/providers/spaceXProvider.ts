import axios, { AxiosInstance } from 'axios';
import { Launch } from 'types/launchTypes';

export enum Endpoints {
	capsules = '/capsules',
	cores = '/cores',
	crew = '/crew',
	dragons = '/dragons',
	landpads = '/landpads',
	launches = '/launches',
	launchpads = '/launchpads',
	payloads = '/payloads',
	fairings = '/fairings',
	roadster = '/roadster',
	rockets = '/rockets',
	ships = '/ships',
	starlink = '/starlink',
	history = '/history',
}

export enum Launches {
	past = '/past',
	upcoming = '/upcoming',
	latest = '/latest',
	next = '/next',
}

export class SpaceXClient {
	private readonly request: AxiosInstance;

	public constructor(baseURL: string) {
		this.request = axios.create({ baseURL });
	}

	public async getAllLaunches(): Promise<Launch[]> {
		return this.getAllElements(Endpoints.launches);
	}

	public async getPastLaunches(): Promise<Launch[]> {
		return this.getAllElements(`${Endpoints.launches}${Launches.past}`);
	}

	public async getUpcomingLaunches(): Promise<Launch[]> {
		return this.getAllElements(`${Endpoints.launches}${Launches.upcoming}`);
	}

	public async getNextLaunch(): Promise<Launch> {
		try {
			const response = (
				await this.request.get(`${Endpoints.launches}${Launches.next}`)
			).data;

			return response;
		} catch (err) {
			return err;
		}
	}
	public async getLatestLaunch(): Promise<Launch> {
		try {
			const response = (
				await this.request.get(`${Endpoints.launches}${Launches.latest}`)
			).data;

			return response;
		} catch (err) {
			return err;
		}
	}

	public async getLaunchDetails(id: string): Promise<Launch> {
		return this.getElementById(Endpoints.launches, id);
	}

	private async getAllElements<T>(endpoint: string): Promise<T[]> {
		try {
			const response = (await this.request.get(`${endpoint}`)).data;

			return response;
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
				await this.request.get(`${endpoint}}?page=${chunkNumber}`)
			).data;

			return response;
		} catch {
			return [];
		}
	}

	private async getElementById<T>(endpoint: string, id: string): Promise<T> {
		try {
			const response = (await this.request.get(`${endpoint}${id}`)).data;

			return response;
		} catch (err) {
			return err;
		}
	}
}
