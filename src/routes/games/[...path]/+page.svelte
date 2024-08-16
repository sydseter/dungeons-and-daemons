<script>
    export let data;
    import { Text } from '$lib/utils/text';
    import SvelteMarkdown from 'svelte-markdown'
    import renderers from '$lib/components/renderers/renderers';
    import GamesImage from "$lib/components/games/image.svelte";
</script>

<!--The location is a file -->
{#each data.files as file}
    <p>├──<a href="/games/{data.path}/{file}">{Text.Format(file)}</a></p>
{/each}

<!--The location is a folder -->
{#each data.folders as folder}
    <p>├──<a href="/games/{data.path}/{folder}">{Text.Format(folder)}</a></p>
{/each}

<!--The location is filecontent -->
{#if data.content && data.content != ''}
    <GamesImage src="/images/games/{data.path}.jpg"></GamesImage>
    <SvelteMarkdown {renderers} source={data.content}></SvelteMarkdown>
{/if}

<style>
    img
    {
        display: block;
        width : 100%;
        border-radius: .25rem;
        margin:auto;
    }

    h3
    {
        text-align: center;
        font-family: var(--font-title);
        font-weight: 500;
        font-size: 2rem;
        margin-top: 0;
    }

    h1
    {
        font-size: 8rem;
        padding-top:8rem;
        margin: 0;
        width : 100%;
        text-align: center;
        font-family: var(--font-title);
        font-weight: 500;
    }
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