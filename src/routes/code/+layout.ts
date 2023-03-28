import { getMostRecentRepos } from "$lib/githubApi";

export async function load() {
    const repos = await getMostRecentRepos();
    return {
        repos: repos.map(repo => ({ name: repo.name, htmlUrl: repo.html_url, description: repo.description }))
    }
}