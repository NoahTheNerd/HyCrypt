// @ts-ignore
import type { PageLoad } from '../../../../../.svelte-kit/types/src/routes';

// @ts-ignore
export const load : PageLoad = ({ params }) => {
	return { guild: params.guild, method: params.method }
}