<template>
<div id="app">
  <div class="game-container">
    <game-board></game-board>
    <score-board></score-board>
  </div>
</div>
</template>

<script>
import GameBoard from './components/game-board'
import ScoreBoard from './components/score-board'

export default {
  name: 'app',
  components: {
    'game-board': GameBoard,
    'score-board': ScoreBoard
  }
}
</script>

<style>
#app {
  display: flex;
  justify-content: center;
}

.game-container {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
</style>
