<script lang="ts">
    import { page } from "$app/stores";
    export let data;
</script>
<div class="flex p-8">
    <ul class="flex-shrink flex flex-col gap-8">
        {#each data.repos as {name}}
            <li class={`${$page.url.pathname.endsWith(name) ? "text-cyan-400" : undefined} text-xl`}><a class="block" href={`/code/${name}`}>{name}</a></li>    
        {/each} 

    </ul>
    <div class="flex-grow text-center">
        <slot />
    </div>
</div>