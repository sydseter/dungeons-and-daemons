<script lang="ts">
    import { goto } from "$app/navigation";

    export let depth : number;
    export let raw : string;
    export let text : string;

    function cleanText(input : string) : string
    {
      return input.trim().replaceAll(':','').replaceAll(' ','-').replaceAll(',','').replaceAll("'","")
    }
</script>
  
  {#if depth === 1}
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <h1 class="clickable" on:keydown={()=>goto("#" + cleanText(text))} on:click={()=>goto("#" + cleanText(text))}
     id={cleanText(text)}>
      <slot></slot>
    </h1>
  {:else if depth === 2}
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <h2 class="clickable" on:keydown={()=>goto("#" + cleanText(text))} on:click={()=>goto("#" + cleanText(text))} id={cleanText(text)}>
      <slot></slot>
    </h2>
  {:else if depth === 3}
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <h3 class="clickable" on:keydown={()=>goto("#" + cleanText(text))} on:click={()=>goto("#" + cleanText(text))} id={cleanText(text)}>
      <slot></slot>
    </h3>
  {:else if depth === 4}
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <h4 class="clickable" on:keydown={()=>goto("#" + cleanText(text))} on:click={()=>goto("#" + cleanText(text))} id={cleanText(text)}>
      <slot></slot>
    </h4>
  {:else if depth === 5}
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->

    <h5 class="clickable" on:keydown={()=>goto("#" + cleanText(text))} on:click={()=>goto("#" + cleanText(text))} id={cleanText(text)}>
      <slot></slot>
    </h5>
  {:else if depth === 6}
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <h6 class="clickable" on:keydown={()=>goto("#" + cleanText(text))} on:click={()=>goto("#" + cleanText(text))} id={cleanText(text)}>
      <slot></slot>
    </h6>
  {:else}
    {raw}
  {/if}

  <style>
    .clickable
    {
      cursor:pointer;
    }

    .clickable:hover
    {
      opacity: 70%;
    }

    h1
    {
      background-color: var(--white);
      color: var(--background);
      padding: .5rem;
    }

    h2
    {
      color: var(--white);
    }

    h2::after,h3::after
    {
      content: '_';
    }

    h3
    {
      color: rgb(0, 209, 0);
      font-size: 1.2rem;
      margin-bottom: 0;
    }
 
  </style>