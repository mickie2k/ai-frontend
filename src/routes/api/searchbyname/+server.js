import { json } from '@sveltejs/kit';

export function GET({ url }) {
	const nameParam = url.searchParams.get('name');

	// Split the IDs into an array if multiple are provided
	const name = nameParam ? nameParam : [];

	// Now you can use `ids` to filter or fetch data based on these IDs
	const test = [
		{
			id: '39386'
		},
		{
			id: '21379'
		},
		{
			name: name
		}
	];
	return json(test);
}
