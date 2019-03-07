<template>
  <div class="body_div">
    <h1>Transtion Group</h1>
    <v-btn style="width:100px" block color="warning" dark @click="shuffle">SHUFFLE LIST</v-btn>
    <v-btn style="width:100px" block color="warning" dark @click="add">add LIST</v-btn>

    <v-list style="width:300px;background-color:bisque">
      <transition-group

        name="list"
        enter-active-class="animated zoomInLeft delay-.5s" leave-active-class="animated zoomOutRight"
        tag="ul"
      >
        <!-- <li :key="item.title" v-for="item in items">{{item.title}}</li> -->
        <v-list-tile  :key="item.title" v-for="item in items">
          <v-list-tile-content>
            <v-list-tile-title class="list_title" v-html="item.title"></v-list-tile-title>
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
      items: []
    };
  },
  mounted() {
    console.log("mount");
    for (let i = 0; i < 4; i++) {
      let title = "title" + i;
      this.items.push({ title: title, active: true });
    }
    console.log( this.$anime);
  },

  methods: {
    shuffle() {
      this.items = _.shuffle(this.items);
    },
    add() {
      let title = "title" + (this.items.length + 1);
      this.items.push({ title: title, active: true });
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
  transition: transform .5s;
}

.list_title{
    color:coral
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

