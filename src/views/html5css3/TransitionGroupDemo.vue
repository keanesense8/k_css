<template>
  <div class="body_div">
    <h1>Transtion Group</h1>
    <v-btn style="width:100px" block color="warning" dark @click="shuffle">SHUFFLE LIST</v-btn>
     <v-btn style="width:100px" block color="warning" dark @click="add">add LIST</v-btn>
    <!-- <transition
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"
      v-bind:css="false"
    >
      <p v-if="show">Demo</p>
    </transition>-->
    <!-- <transition
      name="a1"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
      :css="false"
    >-->
    <v-list style="width:300px">
    <transition-group
      name="list"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
      
      tag="ul"
    >
      <!-- <li :key="item.title" v-for="item in items">{{item.title}}</li> -->
      <v-list-tile :key="item.title" v-for="item in items">
          <v-list-tile-content>
            <v-list-tile-title v-html="item.title"></v-list-tile-title>
          </v-list-tile-content>
      </v-list-tile>
    </transition-group>
    </v-list>
    <!-- </transition> -->
    <v-textarea auto-grow box class="tt" v-model="text"></v-textarea>
    <span>{{ text }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      text: "",
      items: [
      
      ]
    };
  },
  mounted() {
    console.log("mount");
    for(let i = 0 ;i < 4 ; i++){
          let title = 'title' + i
     this.items.push({ title: title, active: true })
    }
    
  },
  
  methods: {
    shuffle() {
      this.items = _.shuffle(this.items);
      
    },
    add() {
      let title = 'title' + (this.items.length + 1)
      this.items.push({ title: title, active: true })
      
    },

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

.list-move {
  transition: transform 1s;
}

.tt {
  background-color: rgb(241, 180, 236);
  color: chocolate;
}

.body_div {
  background-color: bisque;
  height: 100%;
}
</style>

