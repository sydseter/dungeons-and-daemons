<script lang="ts">

  export let href = ''
  export let title : string = ""
  export let text = ''
  let clazz : String = ""
  let url = href

  // Using /static allows autocomplete in VS code somehow, but breaks the image linking
  // So I just remove it before applying the href property of the img tag.
  if(url.includes("/static"))
      url = url.replace("/static","");

  if(text.includes("[status]"))
      clazz = "status-img";
      text = text.replace("[status]","");

  if(text.includes("[small]"))
      clazz = "small-img";
      text = text.replace("[small]","");

  if(text.includes("[medium]"))
      clazz = "medium-img";
      text = text.replace("[medium]","");

  if(text.includes("[large]"))
      clazz = "large-img";
      text = text.replace("[large]","");

  if(!title || title == "")
      title = text;

</script>

<img loading="lazy" class="{clazz}" src={url} {title} alt={text}>
<p class="alt-text"><i>Image: {text}</i></p>

<style>
      .alt-text
      {
          font-weight: 300;
          font-size: 1rem;
          text-align: center;
          margin-bottom: 2rem;
      }

      img
      {
          border-radius: .5rem;
          margin:auto;
          margin-top: 2rem;
          margin-bottom: 1rem;;
          display: block;
      }

      .status-img 
      {
          width: 10%;
          
      }

      .small-img 
      {
          width: 25%;
      }

      .medium-img 
      {
          width: 50%;
      }

      .large-img 
      {
          width: 100%;
      }

      @media (max-aspect-ratio: 1/1) 
      {
          img
          {
              width : 100% !important;
          }
      }
</style>