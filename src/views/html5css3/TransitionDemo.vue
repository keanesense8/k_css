<template>
    <div class="transition_body">
        <h1>transtion</h1>
        <transition>
        <div class="box"></div>
        </transition>
    </div>

</template>

<script>
export default {

}
</script>

<style>

h1{
    color:chocolate
}

.box{
    display: inline-block;
    background:pink;
    width: 200px;
    height: 200px;
    transition: opacity 2s ease-in 1s;
}
.box:hover{
    transform: translate(200px , 200px) 
}

.transition_body{
    padding: 20px;
    text-align: center;
    background-color: antiquewhite;
    height: 100%;
    
}
</style>
