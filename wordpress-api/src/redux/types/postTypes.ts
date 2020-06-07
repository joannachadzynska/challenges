export interface Post {
	ID: number;
	site_ID: number;
	author: PostAuthor;
	date: string;
	modified: string;
	title: string;
	URL: string;
	excerpt: string;
	featured_image: string;
	content: string;
}

interface PostAuthor {
	ID: number;
	first_name: string;
	last_name: string;
	URL: string;
	avatar_URL: string;
	profile_URL: string;
}

export interface PostRequest {
	found: number;
	post: Post[];
}
