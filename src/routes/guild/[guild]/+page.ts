import type { PageLoad } from './$types';

export const load : PageLoad = ({ params }) => {
	return { guild: params.guild }
}