<script lang="ts">
    export let name;
    import logo from '/public/assets/images/logo.svg';
</script>

<section class="bg-orange-500 h-40 w-40 flex flex-row">
    {@html logo}
    <h1 class="max-w-6xl mx-auto text-center mb-40 px-10 pt-16">
        {name}'s app
    </h1>
</section>
<style>
  /* styles go here */
</style>

<!-- markup (zero or more HTML elements) goes here -->

