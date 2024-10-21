<script lang="ts">
  import Button from './Button.svelte';
  import Card from './Card.svelte';

  let cards: number[] = [];

  function addCard() {
    cards = [...cards, cards.length + 1];
  }
</script>

<div class="min-h-screen max-w-screen-lg mx-auto p-4">
  <div class="flex justify-end my-12">
    <Button on:click={addCard} />
  </div>
  <div class="grid-cols-1 grid gap-10 sm:grid-cols-2 md:grid-cols-3">
    {#each [...cards] as number, i}
      <Card text={i + 1} />
    {/each}
  </div>
</div>
