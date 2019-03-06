<template>
  <div class="transition_body">
    <h1>transition</h1>
    <p>use keyframe example</p>
    <v-btn style="width:100px" block color="warning" dark @click="show = !show">SHOW BOX</v-btn>
    <transition name="bounce">
      <div v-show="show" class="box"></div>
    </transition>
    <p>use animate.css example</p>
    <p>https://daneden.github.io/animate.css/</p>
    <v-btn style="width:100px" block color="warning" dark @click="show2 = !show2">SHOW CSS</v-btn>
    <transition enter-active-class="animated tada" appear-active-class="animated tada">
      <span v-show="show2" style="font-size:50px">ANIMATE CSS</span>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      show2: false
    };
  }
};
</script>

<style >
h1 {
  color: chocolate;
}

p {
  display: block;
  font-size: 20px;
  font-style: italic;
  color: rgb(211, 100, 211);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.8);
  }
  100% {
    transform: scale(1);
  }
}

.box {
  display: inline-block;
  background: pink;
  width: 200px;
  height: 200px;
}

.transition_body {
  /* padding: 20px; */
  /* text-align: center; */
  background-color: antiquewhite;
  height: 100%;
}

/* always present */
.expand-transition {
  transition: all 0.3s ease;
  height: 30px;
  padding: 10px;
  background-color: #eee;
  overflow: hidden;
}
/* .expand-enter defines the starting state for entering */
/* .expand-leave defines the ending state for leaving */
.expand-enter,
.expand-leave {
  height: 0;
  padding: 0 10px;
  opacity: 0;
}
</style>
