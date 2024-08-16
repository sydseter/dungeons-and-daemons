<script>
    import Breadcrumbs from "$lib/components/breadcrumbs.svelte";
</script>

<div>
    <Breadcrumbs></Breadcrumbs>
    <slot></slot>
</div>


<style>
    div
    {
        width : 60%;
        margin : auto;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }

    @media (max-aspect-ratio: 1/1) 
    {
        div
        {
            width: 95%;
        }

        h1
        {
            font-size: 4rem;
            padding-top: 1rem;
        }

        h3
        {
            font-size: 1.5rem;
        }
    }
</style>