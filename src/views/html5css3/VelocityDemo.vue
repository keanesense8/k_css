<template>
  <div>
    <h1>VelocityDemo</h1>

     <!-- @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @enter-cancelled="enterCancelled"
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
        @leave-cancelled="leaveCancelled"
        :css="false"
        tag="ul" -->
  </div>
</template>

<script>
export default {
  methods: {
    beforeEnter(el) {
      console.log("beforeEnter");
    },
    afterEnter(el) {
      console.log("afterEnter");
    },
    enter(el) {
      //   console.log(el.childNodes);hehe
    },
    enterCancelled(el) {
      console.log("enterCancelled");
    },
    beforeLeave(el) {
      console.log("beforeLeave");
    },
    leave(el) {
      console.log("leave");
    },
    afterLeave(el) {
      console.log("afterLeave");
    },
    leaveCancelled(el) {
      console.log("leaveCancelled");
    }
  }
};
</script>

<style>
</style>
