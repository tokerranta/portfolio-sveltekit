<script>
    export let data;
</script>
<div class="flex flex-col gap-10">

<h1 class="text-6xl">{data.name}</h1>
<p class="text-2xl">{data.description}</p>
<p class="text-2xl">{data.created_at}</p>
<a class="text-cyan-400 text-2xl" href={`${data.html_url}`} target="_blank">{data.html_url}</a>
</div>