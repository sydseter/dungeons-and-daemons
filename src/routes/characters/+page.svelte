<script>
  import { Text } from "$lib/utils/text";

  export let data;
</script>

{#each data.characters as character}
  <p>├──<a href="/characters/{character}">{Text.Format(character)}</a></p>
{/each}
<style>
  p
  {
      font-size: 1.5rem;
      margin:0;
  }

  a
  {
      text-decoration: none;
  }

  a:hover
  {
      opacity:50%;
  }
</style>