import { json } from '@sveltejs/kit';
import frontpage from './frontpage.json';
export function GET() {
	return json(frontpage);
}
