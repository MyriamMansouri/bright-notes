<script lang="ts">
  import Button from "./Button.svelte";
  import Card from "./Card.svelte";

	let cards = [1];

  function addCard() {
		cards = [...cards, cards.length + 1];
	}
</script>

<div class="min-h-screen max-w-screen-lg mx-auto p-4">
  <div class="flex justify-end my-3">
    <Button symbol="+" on:click={addCard}/>
  </div>

  <div class="grid-cols-3 grid gap-10">
    {#each [...cards] as number, i}
        <Card text={i + 1}/>
    {/each}
  </div>

</div>

