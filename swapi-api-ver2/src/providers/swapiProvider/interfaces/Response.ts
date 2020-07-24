export interface Response<T> {
	/**
	 * number of all elements in endpoint
	 */
	count: number;
	/**
	 * Url to the next chunk or null if there is no more data
	 */
	next: string | null;
	/**
	 * Url to the previous chunk or null if there is no more data
	 */
	previous: string | null;
	/**
	 * Array of elements from endpoint
	 */

	results: T[];
}
