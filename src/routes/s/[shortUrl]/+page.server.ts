import type { PageServerLoad } from "./$types"
import { getUrl } from "$lib/db/db"
import { redirect } from "@sveltejs/kit"

export const load = (async ({ params }) => {
	const url = await getUrl(params.shortUrl)
	if (url) {
		return redirect(302, url.longUrl)
	}
}) satisfies PageServerLoad
