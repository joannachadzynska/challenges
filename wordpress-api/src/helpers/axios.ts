import axios from "axios";

export const request = axios.create({
	baseURL: `https://public-api.wordpress.com/rest/v1.1/sites/en.blog.wordpress.com`,
});
