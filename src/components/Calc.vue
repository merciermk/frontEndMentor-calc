<template>
  <div id="calculette">
    <div id="#calcHeader">
      <h4>calc</h4>
    </div>
    <div id="resultat">
      <h4>{{ affichage }}</h4>
    </div>
    <div id="interface">
      <button class="small-button" value="7" @click="userInput($event)">
        7
      </button>
      <button class="small-button" value="8" @click="userInput($event)">
        8
      </button>
      <button class="small-button" value="9" @click="userInput($event)">
        9
      </button>
      <button class="small-button del" @click="deleteActions">DEL</button>

      <button class="small-button" value="4" @click="userInput($event)">
        4</button
      ><button class="small-button" value="5" @click="userInput($event)">
        5</button
      ><button class="small-button" value="6" @click="userInput($event)">
        6</button
      ><button
        class="small-button addition"
        value="+"
        @click="userInput($event)"
      >
        +
      </button>

      <button class="small-button" value="1" @click="userInput($event)">
        1</button
      ><button class="small-button" value="2" @click="userInput($event)">
        2</button
      ><button class="small-button" value="3" @click="userInput($event)">
        3</button
      ><button
        class="small-button soustraction"
        value="-"
        @click="userInput($event)"
      >
        -
      </button>

      <button class="small-button point" value="." @click="userInput($event)">
        .</button
      ><button class="small-button" value="0" @click="userInput($event)">
        0</button
      ><button
        class="small-button division"
        value="div"
        @click="userInput($event)"
      >
        /</button
      ><button
        class="small-button multiplication"
        value="*"
        @click="userInput($event)"
      >
        x
      </button>

      <button class="large-button reset" value="reset" @click="resetAll">
        RESET
      </button>
      <button
        class="large-button egale validation"
        value="enter"
        @click="result"
      >
        =
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Action } from 'vuex-class'
import { mapGetters } from 'vuex'
import store from '../store/index'

@Component({
  computed: {
    ...mapGetters(['affichage'])
  }
})
export default class Calc extends Vue {
  @Action('result')
  result!: void;

  @Action('resetAll')
  resetAll!: void;

  @Action('deleteActions')
  deleteActions!: void;

  @Action('addLastInput')
  addLastInput!: void;

  userInput (event): void {
    console.log(typeof event)
    store.dispatch('addLastInput', event.target.value)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@700&display=swap');

$width: 400px;
$button-small-width: 60px;
$button-small-height: 30px;
$key-button-bg: hsl(30, 25%, 89%);
$global-bg-color: hsl(222, 26%, 31%);

$screen-background-color: hsl(224, 36%, 15%);
$screen-height: 80px;
$screen-text-color: hsl(0, 0, 100%);
$screen-font-size: 32px;
$font-family: 'Spartan', sans-serif;

body{
  font-family: $font-family;
  margin: 0;
  padding: 0;
}

#calculette{
  background-color: $global-bg-color;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
}

#interface {
  border-radius: 20px;
  background-color: hsl(223, 31%, 20%);
  height: 400px;
  justify-content: space-between;
  width: $width;

  button{
    margin: 20px;
    background-color: $key-button-bg
  }
}

#resultat {
  border-radius: 20px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row-reverse;
  align-items: center;
  margin-bottom: 20px;
  background-color: $screen-background-color;
  width: $width;
  height: $screen-height;
  color: $screen-text-color;
  font-size: $screen-font-size;

   h4{
    margin-right: 20px
  }
 }

.small-button {
  width: $button-small-width;
  height: $button-small-height;
}
.large-button {
  width: 150px;
  height: 30px;
}
</style>
