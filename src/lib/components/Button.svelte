<script lang="ts">
    export let classes = "";
</script>

<button class={"text-xl py-2 px-4 bg-blue-400 rounded-full text-white ".concat(classes)} on:click>
    <slot />
</button>