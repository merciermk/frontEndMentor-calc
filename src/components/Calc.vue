<template>
  <div id="#calculette">
    <div id="#calcHeader">
      <h4>calc</h4>
    </div>
    <div id="resultat">
      {{ affichage }}
    </div>
    <div id="interface">
      <button class="small-button" value="7" @click="userInput($event)">7</button>
      <button class="small-button" value="8" @click="userInput($event)">8</button>
      <button class="small-button" value="9" @click="userInput($event)">9</button>
      <button class="small-button del" @click="deleteActions">DEL</button>

      <button class="small-button" value="4" @click="userInput($event)">4</button
      ><button class="small-button" value="5" @click="userInput($event)">5</button
      ><button class="small-button" value="6" @click="userInput($event)">6</button
      ><button class="small-button addition" value="+" @click="userInput($event)">+</button>

      <button class="small-button" value="1" @click="userInput($event)">1</button
      ><button class="small-button" value="2" @click="userInput($event)">2</button
      ><button class="small-button" value="3" @click="userInput($event)">3</button
      ><button class="small-button soustraction" value="-" @click="userInput($event)" >-</button>

      <button class="small-button point" value="."  @click="userInput($event)">.</button
      ><button class="small-button" value="0"  @click="userInput($event)">0</button
      ><button class="small-button division" value="div"  @click="userInput($event)">/</button
      ><button class="small-button multiplication" value="*" @click="userInput($event)">x</button>

      <button class="large-button reset" value="reset" @click="resetAll">RESET</button>
      <button class="large-button egale validation" value="enter" @click="result">=</button>
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
  result!: void

  @Action('resetAll')
  resetAll!: void

  @Action('deleteActions')
  deleteActions!: void

  @Action('addLastInput')
  addLastInput!: void

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  userInput (event): void {
    console.log(typeof event)
    store.dispatch('addLastInput', event.target.value)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  color: red;
}
#interface {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 400px;
  height: 400px;
  background-color: hsl(223, 31%, 20%);
}
.small-button {
  margin: 15px;
  width: 60px;
  height: 30px;
}
.large-button {
  margin: 15px;
  width: 150px;
  height: 30px;
}
</style>

function dispatch(arg0: string, value: any) {
  throw new Error('Function not implemented.')
}
