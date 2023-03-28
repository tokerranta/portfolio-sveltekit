import { getRepoByName } from '$lib/githubApi';

export async function load({ params }) {
    return getRepoByName(params.repoName);
}
