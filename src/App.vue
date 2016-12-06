<template>
  <div id="app">
    <GameBoard></GameBoard>
  </div>
</template>

<script>
import GameBoard from './components/Game-Board'

export default {
  name: 'app',
  components: {
    GameBoard
  }
}
</script>

<style>
#app {
  display: flex;
  justify-content: center;
}
</style>
