<script lang="ts">
  import Button from "./Button.svelte";
  import Card from "./Card.svelte";

	let cards = [1];

  function addCard() {
		cards = [...cards, cards.length + 1];
	}


</script>

<div class="min-h-screen bg-cyan-50 max-w-screen-lg mx-auto p-4">
  <div class="flex justify-end my-3">
    <Button symbol="+" additionalClasses="align-top" on:click={addCard}/>
  </div>
 
{#each [...cards] as number, i}
	<div>
    <Card text={i + 1}/>
	</div>
{/each}
</div>


<!-- markup (zero or more HTML elements) goes here -->

