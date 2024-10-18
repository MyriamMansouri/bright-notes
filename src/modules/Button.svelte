<script lang="ts">
    export let symbol;
    export let additionalClasses;
</script>

<button class="bg-black text-white rounded-full p-2 text-2xl size-10 leading-3 {additionalClasses}" on:click>
    {symbol}
</button>

<style>
    button {
        transition: all 250ms;
        transform-origin: center;
        box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25),
        inset 0px -2px 3px rgba(0, 0, 0, 0.25);
    }
    button:hover {
        cursor: pointer;
        transform: scale(0.975);
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
    }
</style>