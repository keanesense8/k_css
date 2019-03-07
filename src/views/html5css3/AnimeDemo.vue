<template>
  <div>
    <h1>Anime js</h1>
    <span>
      <p>https://animejs.com/</p>
    </span>
    <v-btn @click="remove">REMOVE</v-btn>
    <v-btn @click="add">ADD</v-btn>

    <transition :css="false" @before-enter="beforeEnterNum">
      <v-chip  outline color="secondary" >{{process}}</v-chip>
    </transition>

    <!-- @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @enter-cancelled="enterCancelled"
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
        @leave-cancelled="leaveCancelled"
        :css="false"
    tag="ul"-->
    <v-list style="width:300px;background-color:bisque;display:block">
      <transition-group
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @enter-cancelled="enterCancelled"
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
        @leave-cancelled="leaveCancelled"
        name="list"
        :css="false"
        tag="ul"
      >
        <!-- <li :key="item.title" v-for="item in items">{{item.title}}</li> -->
        <v-list-tile
          class="list-tile-class"
          :key="item.title"
          :data-index="index"
          v-for="(item , index) in items"
        >
          <v-list-tile-content>
            <v-list-tile-title v-html="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </transition-group>
    </v-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      text: "",
      items: [],
      anime: {},
      process: 0
    };
  },

  mounted() {
    console.log("mount");
    this.init();
    const anime = this.$anime;
    // console.log(this.$anime);
    //v-chip__content
     anime({
        targets: '.v-chip__content',
        value: [0, 1000],
        round: 1,
        easing: "easeInOutExpo"
      });

  },
  methods: {
    beforeEnterNum(el) {
      console.log(el)
     
    },
    init() {
      console.log("init");

      for (let i = 0; i < 4; i++) {
        let title = "title" + i;
        this.items.push({ title: title, active: true });
      }
    },
    remove() {
      this.items.pop();
    },
    add() {
      this.items.push({
        title: "title" + (this.items.length + 1),
        active: true
      });
    },
    beforeEnter3(el) {
      const targets = el;
      let idx = el.children[0].attributes[0].value;
      let duration = (idx + 1) * 30;
      const anime = this.$anime;
      anime({
        targets,
        // translateX: 200,
        // rotateZ: function() { return anime.random(0, 360); },
        // rotate: {
        //   value: 360,
        //   duration: 1000,
        //   easing: "easeInOutSine"
        // },
        scale: {
          value: 1.2,
          duration: 400
        },
        translateZ: {
          value: 360,
          duration: 1000
        },
        // skew:{
        //    value: 360,
        //   duration: 1000,
        //   easing: "easeInOutSine"
        // },
        // direction: "forward"
        direction: "alternate"
        // easing: "easeInOutSine"
      });
      // this.$anime({
      //   targets,
      //   // translateX: 200,
      //   duration: duration,
      //   // direction: "alternate",
      //   easing: "easeInOutSine",
      //    rotate: anime.stagger([-360, 360])
      // });
    },
    afterEnter(el) {},
    beforeEnter(el) {
      let targets = el;
      let idx = el.children[0].attributes[0].value;
      let duration = (idx + 1) * 30;
      const anime = this.$anime;
      anime({
        targets,
        translateX: 500,

        duration: 300,
        delay: duration,
        // borderRadius: ["0%", "50%"],
        direction: "alternate",
        easing: "easeInOutSine"
      });
      //   console.log(this.anime)
    },
    afterEnter2(el) {
      let targets = el;
      //   console.log(this.anime);
      this.anime.add({
        targets,
        translateX: 0,
        duration: 200,
        easing: "easeInOutSine"
      });
    },
    enter(el) {
      //   console.log(el.childNodes);hehe
      let targets = el;
    },
    enterCancelled(el) {
      console.log("enterCancelled");
    },
    beforeLeave(el) {
      console.log("beforeLeave");
    },
    leave(el) {
      console.log("leave");
      const targets = el;
      /**
 * IN	OUT	IN-OUT
'easeInQuad'	'easeOutQuad'	'easeInOutQuad'
'easeInCubic'	'easeOutCubic'	'easeInOutCubic'
'easeInQuart'	'easeOutQuart'	'easeInOutQuart'
'easeInQuint'	'easeOutQuint'	'easeInOutQuint'
'easeInSine'	'easeOutSine'	'easeInOutSine'
'easeInExpo'	'easeOutExpo'	'easeInOutExpo'
'easeInCirc'	'easeOutCirc'	'easeInOutCirc'
'easeInBack'	'easeOutBack'	'easeInOutBack'

 */

      this.$anime({
        targets,
        translateX: 200,
        duration: 1000,
        direction: "reverse",
        easing: "easeOutSine"
      });
      // console.log(a)
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
.list-tile-class {
  background-color: coral;
  align-content: center;
  align-self: center;
  text-align: center;
  border: 2px;
  margin: 2px;
}
</style>
