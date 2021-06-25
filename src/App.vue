<template>
  <div id="app">
    <calc></calc>
  </div>
</template>
<script>
import calc from '@/components/Calc'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    calc
  }
})
export default class App extends Vue {

}
</script>
<style lang="scss">

</style>
