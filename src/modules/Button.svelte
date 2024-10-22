<script lang="ts">
  import plus from '/public/assets/images/plus.svg';
  let { text, onclick } = $props();
</script>

<button
  class="transition text-gray-800 text-9xl rounded-full border-solid h-20 w-20 hover:scale-125 hover:text-12xl cursor-pointer flex items-center justify-center"
  {onclick}
>
  {@html plus}
</button>
