<script lang="ts">
	import { page } from '$app/stores'
	import { slide } from 'svelte/transition';
	let navIsOpen = false;
	let urls = ["/", "/code", "/cv"];
	let isActive = (url: string) => $page.url.pathname === url || $page.url.pathname.includes(url);
	let capitalize = (str: string) => `${str[0].toUpperCase().concat(str.slice(1))}`;
	let navItems = urls.map(url => ({ href: url, active: isActive(url), label: capitalize(url === "/" ? "home" : url.slice(1))}))
	let toggleNav = () => (navIsOpen = !navIsOpen);
</script>
<header class={`flex ${navIsOpen ? "flex-col text-center" : undefined} lg:flex-row lg:items-center gap-4 p-4 bg-cyan-900 text-cyan-100 sticky top-0`}>
	<h1 class={`${navIsOpen ? "text-center" : "mr-auto"} text-4xl`}>Markus rantanikunen</h1>	

	<ul class={`${!navIsOpen ? "hidden" : "flex flex-col"} lg:flex lg:flex-row gap-8 text-xl mr-4`}>
		{#each navItems as navItem}
		<li transition:slide class={`hover:text-cyan-400 transition duration-200 ${navItem.active ? "text-cyan-200" : undefined}`}><a class="block" href={navItem.href}>{navItem.label}</a></li>
		{/each}
	</ul>
	<button on:click={toggleNav} class="lg:hidden rounded-full bg-cyan-600 py-4 px-8 hover:bg-cyan-300">{navIsOpen ? "Close" : "Open"}</button>
	
</header>


