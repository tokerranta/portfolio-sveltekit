type GithubRepo = {
    name: string;
    description: string;
    html_url: string;
    created_at: string;
}

export async function getAllRepos() {
    const response = await fetch(`https://api.github.com/users/tokerranta/repos`);
    const allRepos = await response.json() as GithubRepo[]
    return allRepos;
}

export async function getMostRecentRepos() {
    const allRepos = await getAllRepos();
    return [...allRepos].sort((a, b) => b.created_at.localeCompare(a.created_at)).slice(0, 5);
}

export async function getRepoByName(name: string) {
    const repos = await getAllRepos();
    return repos.find(repo => repo.name === name);
}