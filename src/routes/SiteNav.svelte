<script lang="ts">
    import { page } from "$app/stores"
	import Button from "$lib/components/Button.svelte";

    let navIsOpen = false
    let toggleNav = () => (navIsOpen = !navIsOpen);
</script>

<nav class="bg-blue-300 sticky top-0">
    <div class={`p-4 lg:flex ${navIsOpen ? "flex flex-col gap-8 self-center" : "hidden"}`}>
        <ul class="flex flex-col lg:flex-row gap-8">
            <li class="text-xl hover:bg-blue-500 p-4" aria-current={$page.url.pathname === '/' ? 'page' : undefined }><a class="block text-center" href="/">Home</a></li>
            <li class="text-xl" aria-current={$page.url.pathname === '/cv' ? 'page' : undefined}><a class="block text-center" href="/">CV</a></li>
            <li class="text-xl" aria-current={$page.url.pathname === '/code' ? 'page' : undefined}><a class="block text-center" href="/code">Code</a></li> 
        </ul>
        <Button classes="lg:hidden py-4 px-8" on:click={toggleNav}>Close</Button>
    </div>
    <Button classes={`justify-self-end ${navIsOpen ? "hidden" : undefined} lg:hidden`} on:click={toggleNav}>Open</Button>
</nav>
