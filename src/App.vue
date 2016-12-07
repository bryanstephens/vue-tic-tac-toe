<template>
  <div id="app">
    <game></game>
  </div>
</template>

<script>
import Game from './components/game'

export default {
  name: 'app',
  components: {
    'game': Game
  }
}
</script>

<style>
#app {
  display: flex;
  justify-content: center;
}
</style>
