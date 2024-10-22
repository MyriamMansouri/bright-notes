<script lang="ts">
  import Layout from './modules/Layout.svelte';
  let cards: { i: number; x: number; y: number }[] = $state([]);

  function addCard(e: MouseEvent) {
    cards = [...cards, { x: e.clientX, y: e.clientY, i: cards.length + 1 }];
  }
</script>

<svelte:window on:dblclick={addCard} />

<main>
  <Layout {cards} />
</main>
