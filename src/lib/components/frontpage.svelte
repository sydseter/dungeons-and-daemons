

<div class="frontpage">
    <div class="text-container">
        <p>
            OWASP® Dungeons & Daemons is a collection of LRP games for promoting awareness and knowlege about application security and security practices.

            Although the project was inspired by OWASP Cornucopia, it does not necessarily use OWASP Cornucopia cards or game rules. 
        </p>
    </div>
    <div class="img-container">
        <img src="/images/games/azure-cloud-castle.jpg" alt="Adventurers standing in front of the Azure Cloud Castle"/>
    </div>
</div>


<style>
    .img-container {
        text-align: right;
        float: right;
        width: 50%;
        flex:1;
    }

    .text-container {
        text-align: left;
        float: left;
        height: 100%;
		width: 50%;
		opacity: 80%;
        flex:1;
        z-index: 50;
    }

    img {
		height: 100%;
		width: 100%;
		object-fit: cover;
		border-radius: .3rem;
	}

    .frontpage
    {
        width: 90%;
		margin: auto;
		padding: 0rem;
		display: flex;
		padding-top: 2rem;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
    }

    @media (max-aspect-ratio: 1/1) 
    {
        .frontpage
        {
            flex-direction: column;
        }

		.img-container {
			width: 90%;
			padding: 0;
			margin: auto;
		}

		.text-container {
			padding: 1rem;
			height: 100%;
			width: calc(100% - 2rem);
		}
    }
</style>