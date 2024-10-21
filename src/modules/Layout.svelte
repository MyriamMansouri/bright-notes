<script lang="ts">
  import Card from './Card.svelte';

  let { cards }: { cards: { i: number; x: number; y: number }[] } = $props();
</script>

<div class="h-screen w-screen mx-auto p-4 relative">
  {#each cards as card}
    <Card text={card.i} x={card.x} y={card.y} />
  {/each}
</div>
