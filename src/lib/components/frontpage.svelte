

<div class="frontpage">
    <div class="text-container">
    </div>
    <div class="edtion-container">
    </div>
</div>


<style>
    .frontpage
    {
        display: flex;
        flex-direction: row;
        border-bottom: 1px var(--white) solid;
    }
    .edtion-container
    {
        flex:1;
    }

    .text-container
    {
        flex:1;
        z-index: 50;
    }

    .frontpage
    {
        height : calc(100vh - 5rem);
        width : 100%;
    }

    @media (max-aspect-ratio: 1/1) 
    {
        .frontpage
        {
            display: flex;
            flex-direction: column;
        }
    }
</style>