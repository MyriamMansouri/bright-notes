<script lang="ts">
  import { randomOkLCHColor } from "../helpers/randomColor";

    export let text;
    let color1 = randomOkLCHColor();
    let color2 = randomOkLCHColor();
    console.log(color1,color2)
    $: textDecoration =`linear-gradient(to bottom left in oklab, oklch(55% 0.${color1[1]} 350) 0%, oklch(95% 0.${color2[1]} 95) 100%)`;
</script>

<div class="bg-white font-bold text-white p-6 space-y-10 shadow-2xl rounded-2xl h-72 flex justify-center items-center text-8xl "
style:background={textDecoration}
>
 {text}
</div>

<style>
 
</style>