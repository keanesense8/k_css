<template>
  <div>
    <h1>AnimeCssDemo</h1>
    <span>
      <p>use key frame doing this</p>
    </span>

    <v-btn @click="animateNum">animeNum</v-btn>

    <!-- <v-text-field class="tf" v-model="num1"></v-text-field>
    <v-text-field class="tf" v-model="num2"></v-text-field>-->
    <span style="display:block">Process: {{getNum}}</span>
    <v-btn @click="animateBall">animeBall</v-btn>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      num1: "0%",
      num2: 0
    };
  },
  mounted() {
    // console.log(TWEEN);
    // console.log(this.$data.num1);
    // this.animateNum()
    // console.log(this.$el.children[5]);
  },
  computed: {
    getNum() {
      // console.log('computed: ' + this.num1)
      return this.num1;
    }
  },
  methods: {
    animateBall() {
      var anime = this.$anime;
      const vm = this;
      const targets = [
        this.$el.children[5],
        this.$el.children[6],
        this.$el.children[7]
      ];

      anime({
        // targets: targets,
        targets: '.box',
        translateX: 200,
        translateY: function(el, i) {
          return 30 * i;
        },
        scale: function(el, i) {
           return 1.2 * (i + 1)
        },
        rotate: function() {
          return anime.random(-360, 360);
        },
        borderRadius: function() {
          return ["50%", anime.random(10, 35) + "%"];
        },
        duration: function() {
          return anime.random(1200, 1800);
        },
        delay: function() {
          return anime.random(0, 400);
        },
        backgroundColor: "rgb(81, 224, 145)",
        direction: "alternate",
        loop: true
      });
    },
    animateNum() {
      var battery = {
        charged: "0%",
        cycles: 120
      };

      var anime = this.$anime;
      const vm = this;

      anime({
        targets: battery,
        charged: "100%",
        cycles: 130,
        round: 1,
        easing: "linear",
        duration: 2000,
        update: function() {
          //   logEl.innerHTML = JSON.stringify(battery);
          // console.log(battery)
          vm.num1 = battery.charged;
          // console.log("num1:" + this.num1)
        }
      });
    }
  }
};
</script>

<style>
div {
  text-align: center;
}

.tf {
  width: 100px;
}

.box {
  width: 30px;
  height: 30px;
  background-color: maroon;
  margin: 0px auto;
  border-style: solid;
  border-radius: 50%;
  border-color: rgb(81, 224, 145);
  margin-left: 50px;
  margin-bottom: 20px;
}
</style>
