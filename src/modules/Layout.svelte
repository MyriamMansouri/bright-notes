<script lang="ts">
  import Card from './Card.svelte';
  import Title from './Title.svelte';

  let { cards }: { cards: { i: number; x: number; y: number }[] } = $props();
</script>

<div class="h-screen w-screen mx-auto p-4 relative">
  <Title>Double-click anywhere to create a new note</Title>
  <div id="card-layout">
    {#each cards as card}
      <Card text={cards.length} x={card.x} y={card.y} />
    {/each}
  </div>
</div>
