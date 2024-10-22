<script lang="ts">
  import type { Snippet } from "svelte";

 let { children } : {children: Snippet}= $props()
</script>

<h1
  class=" text-gray-800 text-6xl font-bold max-w-72"
>
{@render children()}
</h1>
