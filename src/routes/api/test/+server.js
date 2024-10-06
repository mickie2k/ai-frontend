import { json } from '@sveltejs/kit';
import frontpage from './frontpage.json';
export function GET({ url }) {
	const idParam = url.searchParams.get('id');

	// Split the IDs into an array if multiple are provided
	const ids = idParam ? idParam.split(',') : [];

	// Now you can use `ids` to filter or fetch data based on these IDs
	const filteredData =
		ids.length > 0 ? frontpage.filter((item) => ids.includes(item.id.toString())) : frontpage; // Return all data if no IDs are provided // Example filtering

	return json(filteredData);
}
