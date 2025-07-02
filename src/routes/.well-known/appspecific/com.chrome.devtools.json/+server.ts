import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	// Return a basic Chrome DevTools configuration
	return json({
		origins: ['*'],
		// Add any specific Chrome DevTools configuration if needed
	});
};
