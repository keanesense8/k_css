<template>
  <div id = "div_body" >
    <div>
    <h1>Css3</h1>
    <p style="color:maroon;background:yellow">
      This is a paragraph with
      <em>an inline element</em> within it.
      <small>smail</small>
    </p>
    <title style="display:block">TITLE</title>
    </div>
    <div>
      <h2>Css3 @media
      </h2>
    </div>
     <div class="class3">
      <h2>Css3 Select
      </h2>
      <p class="warning ">warning</p>
      <p class="warning help">warning help</p>
      <a alt="alt">AAABBBCC</a>
    </div>
    <div id="box1">

    </div>
  </div>
 
</template>

<script>
export default {};
</script>

<style>

@import url('../../assets/sheet.css');
@import url('../../assets/media_sheet.css');

p.warning{
  color: blue;background-color: azure;

}

p.warning.help{
  color:darkseagreen;background-color: azure;
}

a:link:hover:lang(de) a:visited:hover:lang(de){
  color:darksalmon
}

small{
  font-size: 0.5em;
}

.class3{
  margin: 10px;
  margin-top: 100px;
}

#box1{
  width: 100px;
  height: 100px;
  background-color:maroon;
  margin-left: 300px;
  border-style:solid;
  border-color: aliceblue;
  animation-name:bg
}
#box1:hover{
  background-color:darkgreen;
  
}

@keyframes bg {
  10% {background-color: darkmagenta}
  50% {background-color: darksalmon}
}


</style>
